import { URL_API } from '../../constants/database';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';


export const addItem = (item, items, userId) => {

  // Traigo carrito:

    return async dispatch => {
      
    const response = await fetch(`${URL_API}/cart.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    })

    const result = await response.json(); //Acá guardo el resultado, lo que devuelve firebase. .json para convertir de json objeto de JS
    console.log(result)

    //Si trajo carritos, es decir result !== null, filtro el que corresponda al usuario en cuestión. 
    if(result == null){
      console.log("no hay carrito... creando carrito...");
      //Hay que crearlo haciendo un POST
      
        try {
          const response = await fetch(`${URL_API}/cart.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              date: Date.now(),
              items: items.concat(item),
              userId: userId
            })
          })

          console.log(response)

          console.log("carrito creado");

          dispatch({
            type: ADD_ITEM,
            item: item,
          });
        } catch {

          console.log(error.message);
          
        }
      
    }
    else{
      console.log("Hay carrito... Actualizando carrito...");

      const carts = [];

      Object.keys(result).forEach(key=>carts.push({id:key, ...result[key]})) //Pusheo los carritos en carts, esto se hace así para poder extraer la key,
      //del cart, es decir el id del carrito que genera automáticamente fireBase. Lo guardamos en " id: " se puede ver en el "console.log(cart)"
      const cart = carts.filter(cart=>cart.userId === userId)//Filtro el carrito del usuario en cuestión
      console.log(cart[0].id);
      // console.log("carts")
      // console.log(cart)
      // console.log("result")
      // console.log(result)

      //Hacer PUT
      try {
        const response = await fetch(`${URL_API}/cart/${cart[0].id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: Date.now(),
            items: items.concat(item),
            userId: userId
          })
        })

        console.log(response)

        console.log("Carrito Actualizado");

        dispatch({
          type: ADD_ITEM,
          item: item,
        });
      } catch {

        console.log(error.message);
        
      }

    }



  }

};

export const deleteItem = (itemID, items, userId) => {

  return async dispatch => {

    //Traigo carritos
    const response = await fetch(`${URL_API}/cart.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    })
    
    //Guardo el resultado de la consulta GET: 
    const result = await response.json(); 

    console.log("Hay carrito... Eliminando item...");

    //Creo constante para guardar los resultados con la key de cada uno (el id autogenerado por FireBase)
    const carts = [];

    //Pusheo los carritos en carts, esto se hace así para poder extraer la key del cart, es decir el id del carrito 
    //que genera automáticamente fireBase. Lo guardamos en " id: " se puede ver en el "console.log(cart)"
      Object.keys(result).forEach(key=>carts.push({id:key, ...result[key]}))

    //Filtro el carrito del usuario en cuestión
      const cart = carts.filter(cart=>cart.userId === userId)
      console.log(cart[0].id);

    //Actualizamos los items, removiendo el seleccionado:
      const new_list = items.filter((item)=>item.id !== itemID)
      console.log("new_list");
      console.log(new_list);

    try {
      const response = await fetch(`${URL_API}/cart/${cart[0].id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items: new_list,
          userId: userId
        })
      })

      console.log(response)

      console.log("Carrito Actualizado");

      dispatch({
        type: DELETE_ITEM,
        itemID: itemID,
      });
      
    } catch {

      console.log(error.message);
      
    }

  };

};

export const confirmCart = (payload) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...payload },
        })
      })
      console.log(response)
      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      });
    } catch {
      console.log(error.message);
    }
  }
}
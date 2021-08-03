import { URL_API } from '../../constants/database';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';
export const GET_CART = 'GET_CART';

export const addItem = (item, items, userId) => {


    return async dispatch => {

    // Traigo carrito:

      const response = await get_cart(); //Acá guardo el resultado, lo que devuelve firebase. .json para convertir de json objeto de JS
      const result = await response.json();

      console.log(result)

    //Si no trajo carritos, es decir result == null, lo creamos
    
      if(result == null){
        console.log("no hay carrito... creando carrito...");
        //Hay que crearlo haciendo un POST
        
        await create_cart(item, userId);

        dispatch({
          type: ADD_ITEM,
          item: item,
        });
    
    //Si trajo carritos chequeamos si alguno de los que hay pertenece al usuario en cuestión, de ser así se editará, sino se creará lo edito: 
    }
    else{
      console.log("Hay carrito... Actualizando carrito...");

      await edit_or_create_cart(result, items, item, userId);
      
      dispatch({
        type: ADD_ITEM,
        item: item,
      });
    }

  }

};

export const deleteItem = (itemID, items, userId) => {

  return async dispatch => {
    //Traigo carritos
    
    const response = await get_cart(); //Acá guardo el resultado, lo que devuelve firebase. .json para convertir de json objeto de JS
    const result = await response.json();
    

    console.log("Hay carrito... Eliminando item...");

    //Elimino en Firebase
    await delete_item(result, itemID, items, userId);

    dispatch({
      type: DELETE_ITEM,
      itemID: itemID,
    });

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



// Funciones - Funciones - Funciones - Funciones - Funciones - Funciones - Funciones - Funciones - Funciones - Funciones        

    
export const get_cart_first_time = (userId) => {

  //Busco si  el usuario logueado tiene un carrito para traeer sus items

  return async dispatch => {

    const response = await fetch(`${URL_API}/cart.json`, {
      
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    })

    const result = await response.json();

    const carts = [];

    //Si tiene un carrito, es decir el result no volvió vació, entonces lo guardo, sino no hago nada:
    if(result !== null){ 

      Object.keys(result).forEach(key=>carts.push({id:key, ...result[key]})) //Pusheo los carritos en carts, esto se hace así para poder extraer la key,
      //del cart, es decir el id del carrito que genera automáticamente fireBase. Lo guardamos en " id: " se puede ver en el "console.log(cart)"
      const cart = carts.filter(cart=>cart.userId === userId)//Filtro el carrito del usuario en cuestión
      console.log("cart");console.log(cart);
      //Si el usuario tiene carrito, lo edito:
  
      dispatch({
        type: GET_CART,
        items: cart[0].items,
      })

    }

  }
 
}


const get_cart = async () => {

  const response = await fetch(`${URL_API}/cart.json`, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
   }

 })

 return response;

}

const create_cart = async (item, userId) => {

 try {
   const response = await fetch(`${URL_API}/cart.json`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       date: Date.now(),
       items: item,
       userId: userId
     })
   })

   console.log(response)

   console.log("carrito creado");

 } catch {

   console.log(error.message);
   
 }

}

const edit_or_create_cart = async (result, items, item, userId)  => {

   const carts = [];

   Object.keys(result).forEach(key=>carts.push({id:key, ...result[key]})) //Pusheo los carritos en carts, esto se hace así para poder extraer la key,
   //del cart, es decir el id del carrito que genera automáticamente fireBase. Lo guardamos en " id: " se puede ver en el "console.log(cart)"
   const cart = carts.filter(cart=>cart.userId === userId)//Filtro el carrito del usuario en cuestión
   console.log("cart");console.log(cart);
   //Si el usuario tiene carrito, lo edito:
   if(cart.length > 0){
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

      } catch(error) {

        console.log(error.message);
        
      }
   }
   //Sino, lo creo:
   else{

    create_cart(item,userId)

   }
  
 
}

const delete_item = async (result, itemID, items, userId) => {

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
      
    } catch {

      console.log(error.message);
      
    }

}
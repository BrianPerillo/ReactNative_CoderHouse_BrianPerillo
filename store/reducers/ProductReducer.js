import { CURRENT_CATEGORY, CURRENT_PRODUCT, FILTERED_PRODUCTS_BY_NAME } from '../actions/ProductsAction';

import { items } from '../../data/products';

const INITIAL_STATE = {
    products: items,
    filtered_products: null,
    selected: null,
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) { //Switch de tipos de acciones para indicar que hacer en cada caso según el tipo de acción

        case FILTERED_PRODUCTS_BY_NAME: //Si es de tipo CURRENT_PRODUCT (Seleccionaron un producto en concreto):

            const filtered_list = items.filter((item) => item.name.match(action.productName));//Filtro el producto como si fuera con %LIKE%
            console.log(filtered_list);
            //items.filter( (item) => item.name==action.productName); //Filtro el producto "SIn %LIKE%"
            // console.log(filtered_list);

            return {
                ...state,
                filtered_products: filtered_list,
            }

        case CURRENT_PRODUCT: //Si es de tipo CURRENT_PRODUCT (Seleccionaron un producto en concreto):

            const productIndex = state.products.findIndex(product => product.id === action.productID) //Filtro el producto
            if (productIndex === -1) 
                return { ...state };//Si findIndex da -1 es porque no encontró el producto por lo tanto no se aplica el filtro. Retornamos nuevo estado igual al inicial
            return { //Si no da -1, (econtró el producto) entonces guardamos el index del prod en el atributo selected.
                ...state,
                selected: state.products[productIndex],
            };

        case CURRENT_CATEGORY:
            console.log("filtered_list_by_category");
            console.log(action.categoryName);
            const filtered_list_by_category = items.filter((item) => item.category == action.categoryName);//Filtro el producto como si fuera con %LIKE%
            console.log(filtered_list_by_category);
            //items.filter( (item) => item.name==action.productName); //Filtro el producto "SIn %LIKE%"
            // console.log(filtered_list);

            return {
                ...state,
                filtered_products: filtered_list_by_category,
            }

        default: // Deafult sería en caso que el state sea INITIAL_STATE. Lo que retornamos en este caso es u nuevo estado pero sin cambios. 
            return { ...state, filtered_products: INITIAL_STATE.products };
    }

}

export default ProductReducer;
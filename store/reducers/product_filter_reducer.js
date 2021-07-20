import { FILTERED_PRODUCTS_BY_NAME } from '../actions/findItemsByName';
import { items as ITEMS } from '../../data/products';

const INITIAL_STATE = {
    products: ITEMS,
    filtered_products: null,
}

const ProductFilteredReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) { //Switch de tipos de acciones para indicar que hacer en cada caso según el tipo de acción

        case FILTERED_PRODUCTS_BY_NAME: //Si es de tipo CURRENT_PRODUCT (Seleccionaron un producto en concreto):

            const filtered_list = ITEMS.filter((item) => item.name.match(action.productName));//Filtro el producto como si fuera con %LIKE%
            console.log(filtered_list);
            //ITEMS.filter( (item) => item.name==action.productName); //Filtro el producto "SIn %LIKE%"
            // console.log(filtered_list);

            return {
                ...state,
                filtered_products: filtered_list,
            }

        default: // Deafult sería en caso que el state sea INITIAL_STATE. Lo que retornamos en este caso es u nuevo estado pero sin cambios. 
            return { ...state, filtered_products: INITIAL_STATE.products };
    }

}

export default ProductFilteredReducer;
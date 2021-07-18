import { CURRENT_PRODUCT } from '../actions/findCurrentItem.js';
import { items as ITEMS } from '../../data/products';

const INITIAL_STATE = {
    products: ITEMS,
    selected: null,
}

const ProductReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) { //Switch de tipos de acciones para indicar que hacer en cada casó según el tipo de acción

        case CURRENT_PRODUCT: //Si es de tipo CURRENT_PRODUCT (Seleccionaron un producto en concreto):

            const productIndex = state.products.findIndex(product => product.id === action.productID) //Filtro el producto
            if (productIndex === -1) 
                return { ...state };//Si findIndex da -1 es porque no encontró el producto por lo tanto no se aplica el filtro. Retornamos nuevo estado igual al inicial
            return { //Si no da -1, (econntró el producto) entonces guardamos el index del prod en el atributo selected.
                ...state,
                selected: state.products[productIndex],
            };

        default: // Deafult sería en caso que el state sea INITIAL_STATE. Lo que retornamos en este caso es u nuevo estado pero sin cambios. 
            return { ...state };
    }

}

export default ProductReducer;
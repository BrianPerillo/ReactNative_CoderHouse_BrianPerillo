import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import AuthReducer from './reducers/auth.reducer';
import CartReducer from './reducers/cart.reducer';
import ProductFilteredReducer from './reducers/product_filter_reducer';
import ProductReducer from './reducers/product_reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  product: ProductReducer,
  filtered_products_by_name: ProductFilteredReducer,
  cart: CartReducer,
  auth: AuthReducer,
})

export default createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk),
  ),
)

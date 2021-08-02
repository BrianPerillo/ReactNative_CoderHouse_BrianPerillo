import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import AuthReducer from './reducers/auth.reducer';
import CartReducer from './reducers/cart.reducer';
import ProductReducer from './reducers/ProductReducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  auth: AuthReducer,
})

export default createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk),
  ),
)

import { applyMiddleware, combineReducers, createStore } from 'redux';

import ProductReducer from './reducers/product_reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  products: ProductReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))
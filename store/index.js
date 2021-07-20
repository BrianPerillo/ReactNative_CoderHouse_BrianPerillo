import { applyMiddleware, combineReducers, createStore } from 'redux';

import ProductFilteredReducer from './reducers/product_filter_reducer';
import ProductReducer from './reducers/product_reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  product: ProductReducer,
  filtered_products_by_name: ProductFilteredReducer,
  
})

export default createStore(RootReducer, applyMiddleware(thunk))
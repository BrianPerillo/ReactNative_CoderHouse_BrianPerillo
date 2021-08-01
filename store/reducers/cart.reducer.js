import { ADD_ITEM, CONFIRM_CART, DELETE_ITEM } from "../actions/cart.action";

import { ActionSheetIOS } from "react-native";

const INITIAL_STATE = {
  items: [],
  total: 0,
  confirm: false,
};

const sumTotal = (list) => list.map(item => item.quantity * item.price)
                .reduce((a, b) => a + b, 0)

const CartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case ADD_ITEM:
      const itemExist = state.items.findIndex(item => item.id === action.item.id);

      if (itemExist === -1) { //Sería que no existe, entonces: 
        const item = { ...action.item, quantity: 1 };
        const updated = state.items.concat(item);
        return {
          ...state,
          items: updated,
          total: sumTotal(updated),
        }
      }

      const updated = state.items.map(item => {
        if (item.id === action.item.id) item.quantity++;
        return item;
      })

      return {
        ...state,
        items: updated,
        total: sumTotal(updated),
      };
      
    case DELETE_ITEM:
      console.log("llega reducer");
      const cleanCart = state.items.filter(item => item.id !== action.itemID);
      return {
        ...state,
        items: cleanCart,
        total: sumTotal(cleanCart),
      };

    default:
      return state;
  }
}

export default CartReducer;
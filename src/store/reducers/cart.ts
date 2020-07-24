import { CartState, CartActionTypes } from "custom-types";

import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from "../actions/actionTypes";
import { addItemToCart } from "../utils/utils";

const initState: CartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initState, action: CartActionTypes) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_CART_ITEM:
      return (
        action.payload && {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload),
        }
      );
    default:
      return state;
  }
};

export default cartReducer;

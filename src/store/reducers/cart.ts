import { CartState, CartActionTypes } from "custom-types";

import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_CART_ITEM,
} from "../actions/actionTypes";
import { addItemToCart, removeItemFromCart } from "../utils/utils";

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
    case REMOVE_CART_ITEM:
      return (
        action.payload && {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload),
        }
      );
    case CLEAR_ITEM_FROM_CART:
      return (
        action.payload && {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload?.id
          ),
        }
      );
    default:
      return state;
  }
};

export default cartReducer;

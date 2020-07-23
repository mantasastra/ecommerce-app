import { CartState, CartActionTypes } from "custom-types";
import { TOGGLE_CART_HIDDEN } from "../actions/actionTypes";

const initState: CartState = {
  hidden: true,
};

const cartReducer = (state = initState, action: CartActionTypes) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

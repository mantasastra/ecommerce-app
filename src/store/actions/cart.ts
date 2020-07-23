import { CartActionTypes } from "custom-types";
import { TOGGLE_CART_HIDDEN } from "./actionTypes";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN,
});

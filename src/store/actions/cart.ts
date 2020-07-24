import { CartActionTypes, ShopItem } from "custom-types";
import { ADD_CART_ITEM, TOGGLE_CART_HIDDEN } from "./actionTypes";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item: ShopItem): CartActionTypes => ({
  type: ADD_CART_ITEM,
  payload: item,
});

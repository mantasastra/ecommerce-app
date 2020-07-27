import { CartActionTypes, ShopItem } from "custom-types";
import {
  ADD_CART_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_HIDDEN,
} from "./actionTypes";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item: ShopItem): CartActionTypes => ({
  type: ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item: ShopItem): CartActionTypes => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: ShopItem): CartActionTypes => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

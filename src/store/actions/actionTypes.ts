import {
  SetCurrentUserType,
  ToggleCartHiddenType,
  AddCartItemType,
  RemoveCartItemType,
  ClearItemFromCart,
} from "custom-types";

export const SET_CURRENT_USER: SetCurrentUserType = "SET_CURRENT_USER";

export const TOGGLE_CART_HIDDEN: ToggleCartHiddenType = "TOGGLE_CART_HIDDEN";
export const ADD_CART_ITEM: AddCartItemType = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM: RemoveCartItemType = "REMOVE_CART_ITEM";
export const CLEAR_ITEM_FROM_CART: ClearItemFromCart = "CLEAR_ITEM_FROM_CART";

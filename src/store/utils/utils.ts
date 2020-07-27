import { ShopItem } from "custom-types";

export const addItemToCart = (
  cartItems: ShopItem[],
  cartItemToAdd: ShopItem
): ShopItem[] => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: ShopItem[],
  cartItemToRemove: ShopItem
): ShopItem[] => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : item
  );
};

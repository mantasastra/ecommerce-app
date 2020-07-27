import { createSelector } from "reselect";
import { RootState } from "custom-types";

const selectCart = (state: RootState) => state.cart;
const selectUser = (state: RootState) => state.user;
const selectDirectory = (state: RootState) => state.directory;

export const selectCartItems = createSelector(
  [selectCart],
  ({ cartItems }) => cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  ({ cartItems }) =>
    cartItems.reduce(
      (accumulator, currentItem) => accumulator + currentItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  ({ hidden }) => hidden
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCurrentUser = createSelector(
  [selectUser],
  ({ currentUser }) => currentUser
);

export const selectDirectorySection = createSelector(
  [selectDirectory],
  ({ sections }) => sections
);

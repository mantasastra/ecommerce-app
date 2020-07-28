import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import { RootState, Collection } from "custom-types";

const selectCart = (state: RootState) => state.cart;
const selectUser = (state: RootState) => state.user;
const selectDirectory = (state: RootState) => state.directory;
const selectShop = (state: RootState) => state.shop;

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

export const selectShopCollections = createSelector(
  [selectShop],
  ({ collections }) => collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    Object.keys(collections).map((key) => collections[key as Collection])
);

export const selectCollection = memoize((collectionUrlParam: Collection) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);

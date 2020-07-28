declare module "custom-types" {
  export type DirectoryState = { sections: Sections };

  export type Sections = Section[];

  type Section = {
    id: number;
    title: string;
    imageUrl: string;
    linkUrl: string;
    size?: string;
  };

  export type ShopItem = {
    id?: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };

  export type ShopCollections = {
    id?: number;
    key?: number;
    title: string;
    routeName: string;
    items: ShopItem[];
  };

  type Collections = {
    hats: ShopCollections;
    sneakers: ShopCollections;
    jackets: ShopCollections;
    womens: ShopCollections;
    mens: ShopCollections;
  };

  export type ShopState = { collections: Collections };

  export type ThemeProps = {
    theme: {
      colors: {
        mainColor: string;
        backgroundColor: string;
        subColor: string;
        buttonColor: string;
        buttonTextColor: string;
        buttonBackgroundColor: string;
        buttonHoverTextColor: string;
      };
    };
  };

  // REDUX USER TYPES
  export type SetCurrentUserType = "SET_CURRENT_USER";

  export type User = Object | null;

  export interface UserState {
    currentUser: User;
  }

  interface SetCurrentUser {
    type: SetCurrentUserType;
    payload: User;
  }

  export type UserActionTypes = SetCurrentUser;

  // REDUX CART TYPES
  export type ToggleCartHiddenType = "TOGGLE_CART_HIDDEN";
  export type AddCartItemType = "ADD_CART_ITEM";
  export type RemoveCartItemType = "REMOVE_CART_ITEM";
  export type ClearItemFromCart = "CLEAR_ITEM_FROM_CART";

  export interface CartState {
    hidden: boolean;
    cartItems: Array<ShopItem>;
  }

  export type CartActionTypes = {
    type:
      | ToggleCartHiddenType
      | AddCartItemType
      | RemoveCartItemType
      | ClearItemFromCart;
    payload?: ShopItem;
  };

  // REDUX DIRECTORY TYPES
  export type DirectoryActionTypes = {
    type: string;
    payload?: Sections;
  };

  // REDUX COLLECTION TYPES
  export type Collection = "hats" | "sneakers" | "jackets" | "womens" | "mens";

  export type CollectionActionTypes = {
    type: string;
    payload?: ShopCollection;
  };

  export interface RootState {
    user: UserState;
    cart: CartState;
    directory: DirectoryState;
    shop: ShopState;
  }
}

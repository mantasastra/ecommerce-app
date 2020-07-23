declare module "custom-types" {
  export type DirectoryProps = any;

  export type DirectoryState = { sections: Sections };

  export type Sections = Section[];

  type Section = {
    id: number;
    title: string;
    imageUrl: string;
    linkUrl: string;
    size?: string;
  };

  export type ShopProps = any;

  export type ShopItem = {
    id?: number;
    key: number;
    name: string;
    imageUrl: string;
    price: number;
  };

  export type ShopCollection = {
    id?: number;
    key: number;
    title: string;
    routeName: string;
    items: ShopItem[];
  };

  export type ShopCollections = ShopCollection[];

  export type ShopState = { collections: ShopCollections };

  export type ThemeProps = {
    theme: {
      colors: {
        mainColor: string;
        subColor: string;
        buttonColor: string;
        buttonTextColor: string;
        buttonBackgroundColor: string;
        buttonHoverTextColor: string;
      };
    };
  };
}

declare module "custom-types" {
  type Section = {
    id: number;
    title: string;
    imageUrl: string;
    linkUrl: string;
    size?: string;
  };

  export type Sections = Section[];

  export type DirectoryProps = any;

  export type DirectoryState = { sections: Sections };

  export type ShopProps = any;

  type ShopItem = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  };

  type ShopCollection = {
    id: number;
    title: string;
    routeName: string;
    items: ShopItem[];
  };

  export type ShopCollections = ShopCollection[];

  export type ShopState = { collections: ShopCollections };
}

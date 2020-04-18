declare module "custom-types" {
  type Section = {
    id: number;
    title: String;
    imageUrl: String;
    size?: String;
  };

  export type Sections = Section[];

  export type DirectoryProps = any;

  export type DirectoryState = { sections: Sections };

  export type MenuItemProps = {
    key: number;
    title: String;
    imageUrl: String;
    size?: String;
  };
}

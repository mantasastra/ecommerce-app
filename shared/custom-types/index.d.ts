declare module "custom-types" {
  export type MenuItemProps = {
    title: String;
  };

  type MenuItemTitle = String;

  export type MenuItemTitles = Array<MenuItemTitle>;
}

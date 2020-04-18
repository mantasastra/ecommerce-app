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
}

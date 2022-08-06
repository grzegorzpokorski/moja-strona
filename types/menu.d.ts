export type MenuItem = {
  label: string;
  href: string;
};

export type MainMenuItem = {
  button?: boolean;
  childrens?: MenuItem[];
} & MenuItem;

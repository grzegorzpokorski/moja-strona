export type MenuItemType = {
  label: string;
  href: string;
};

export type MainMenuItemType = {
  button?: boolean;
  childrens?: MenuItemType[];
} & MenuItemType;

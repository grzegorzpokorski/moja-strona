export type MenuItemType = {
  label: string;
  href: string;
};

export type SocialMenuItemType = {
  icon: JSX.Element;
} & MenuItemType;

import { memo } from "react";
import { MenuItemType } from "./MenuItem";
import MenuItem from "./MenuItem";

type MenuProps = {
  menuItems: MenuItemType[];
};

export const Menu = memo(({ menuItems }: MenuProps) => {
  return <>{menuItems && menuItems.map((item) => <MenuItem key={item.href} {...item} />)}</>;
});

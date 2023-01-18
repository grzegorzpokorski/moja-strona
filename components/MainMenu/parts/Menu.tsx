import { memo } from "react";
import { MenuItemType } from "./MenuItem";
import { MenuItem } from "./MenuItem";

type MenuProps = {
  menuItems: MenuItemType[];
  closeMobileMenu: () => void;
};

export const Menu = memo(({ menuItems, closeMobileMenu }: MenuProps) => {
  return (
    <>
      {menuItems &&
        menuItems.map((item) => (
          <MenuItem key={item.href} item={item} closeMobileMenu={closeMobileMenu} />
        ))}
    </>
  );
});

Menu.displayName = "Menu";

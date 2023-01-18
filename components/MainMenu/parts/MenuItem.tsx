import { Link } from "../../Link/Link";
import { Button } from "../../Button/Button";
import { Dropdown } from "./Dropdown";
import { useRouter } from "next/router";

import styles from "../mainMenu.module.scss";

export type MenuItemType = {
  label: string;
  href: string;
  button?: boolean;
  childrens?: {
    label: string;
    href: string;
  }[];
};

type MenuItemProps = {
  item: MenuItemType;
  closeMobileMenu: () => void;
};

export const MenuItem = ({ item, closeMobileMenu }: MenuItemProps) => {
  const currentPath = useRouter().asPath.split("#")[0];

  return item.button ? (
    <li className={item.childrens ? `relative ${styles["navbar-dropdown"]}` : ``}>
      <Button label={item.label} href={item.href} onClick={closeMobileMenu} />
    </li>
  ) : (
    <li className={item.childrens ? `relative ${styles["navbar-dropdown"]}` : ``}>
      <Link
        href={item.href}
        className={`transition-all ${item.childrens ? styles.toggle : ""} ${
          item.href === currentPath
            ? "text-green"
            : "text-gray-100 lg:text-zinc-600 hover:text-gray-300 lg:hover:text-green"
        }`}
        onClick={closeMobileMenu}
      >
        {item.label}
      </Link>
      {item.childrens && (
        <Dropdown
          items={item.childrens}
          currentPath={currentPath}
          closeMobileMenu={closeMobileMenu}
        />
      )}
    </li>
  );
};

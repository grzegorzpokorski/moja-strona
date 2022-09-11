import { Link } from "../../Link/Link";
import { Button } from "../../Button/Button";
import { Dropdown } from "./Dropdown";
import { useRouter } from "next/router";

export type MenuItemType = {
  label: string;
  href: string;
  button?: boolean;
  childrens?: {
    label: string;
    href: string;
  }[];
};

export const MenuItem = (item: MenuItemType) => {
  const currentPath = useRouter().asPath.split("#")[0];

  return item.button ? (
    <li className={item.childrens ? `relative navbar-dropdown` : ``}>
      <Button label={item.label} href={item.href} />
    </li>
  ) : (
    <li className={item.childrens ? `relative navbar-dropdown` : ``}>
      <Link
        href={item.href}
        className={`transition-all ${item.childrens ? "navbar-dropdown__toggle" : ""} ${
          item.href === currentPath
            ? "text-green"
            : "text-gray-100 lg:text-zinc-600 hover:text-gray-300 lg:hover:text-green"
        }`}
      >
        {item.label}
      </Link>
      {item.childrens && <Dropdown items={item.childrens} currentPath={currentPath} />}
    </li>
  );
};

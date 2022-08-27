import { MenuItemType } from "./MenuItem";
import Link from "../../Link";

type DropdownProps = {
  items: MenuItemType[];
  currentPath: string;
};

const Dropdown = ({ items, currentPath }: DropdownProps) => {
  return (
    <ul
      className={`relative lg:absolute mt-6 lg:mt-0 flex flex-col gap-4 border-l-2 lg:border-none border-l-green lg:rounded pl-4 lg:p-6 lg:bg-white lg:shadow-md lg:w-64 transition-opacity navbar-dropdown__menu`}
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`transition-all ${
              item.href === currentPath
                ? "text-green"
                : "text-gray-100 lg:text-zinc-600 hover:text-gray-300 lg:hover:text-green"
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;

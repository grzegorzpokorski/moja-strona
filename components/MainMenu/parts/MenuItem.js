import Link from "../../Link";
import Button from "../../Button";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";

const MenuItem = (item) => {
  const currentPath = useRouter().asPath.split("#")[0];

  return item.button ? (
    <li className={item.childrens ? `relative dropdown` : ``}>
      <Button label={item.label} href={item.href} />
    </li>
  ) : (
    <li className={item.childrens ? `relative dropdown` : ``}>
      <Link
        href={item.href}
        className={`transition-all ${
          item.childrens ? "dropdown__toggle" : ""
        } ${
          item.href === currentPath
            ? "text-green"
            : "text-gray-100 lg:text-zinc-600 hover:text-gray-300 lg:hover:text-green"
        }`}
      >
        {item.label}
      </Link>
      {item.childrens && (
        <Dropdown items={item.childrens} currentPath={currentPath} />
      )}
    </li>
  );
};

export default MenuItem;

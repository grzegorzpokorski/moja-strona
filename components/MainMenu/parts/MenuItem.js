import Link from "../../Link";
import Button from "../../Button";
import Dropdown from "./Dropdown";

const MenuItem = (item) => {
  return item.button ? (
    <li className={item.childrens ? `relative dropdown` : ``}>
      <Button label={item.label} href={item.href} />
    </li>
  ) : (
    <li className={item.childrens ? `relative dropdown` : ``}>
      <Link
        href={item.href}
        className={`text-gray-100 lg:text-zinc-600 hover:text-gray-300 lg:hover:text-green transition-all ${
          item.childrens && "dropdown__toggle"
        }`}
      >
        {item.label}
      </Link>
      {item.childrens && <Dropdown items={item.childrens} />}
    </li>
  );
};

export default MenuItem;

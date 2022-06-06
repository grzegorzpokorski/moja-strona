import Link from "../../Link";
import Dropdown from "./Dropdown";

const MenuItem = (item) => {
  return (
    <li className={item.childrens ? `relative dropdown` : ``}>
      <Link
        href={item.href}
        className={
          item.button
            ? `inline-block bg-green hover:bg-greenHover text-white px-6 py-3
                transition-all`
            : `text-gray-100 lg:text-zinc-600 hover:text-gray-300 lg:hover:text-green transition-all ${
                item.childrens && "dropdown__toggle"
              }`
        }
      >
        {item.label}
      </Link>
      {item.childrens && <Dropdown items={item.childrens} />}
    </li>
  );
};

export default MenuItem;

import Link from "../Link";
import mainMenu from "./../../data/menu/mainMenu";
import DropdownMenu from "./parts/DropdownMenu";

const MainMenu = ({ isVisible }) => {
  return (
    <nav
      id="menu"
      className={`w-full lg:w-auto pt-8 lg:pt-0 lg:inline ${
        !isVisible && "hidden"
      }`}
    >
      <ul className="flex flex-col lg:flex-row gap-6 lg:items-center">
        {mainMenu &&
          mainMenu.map((item, i) => (
            <li
              key={`main-menu-item-${i}`}
              className={`${item.childrens && "relative dropdown-wrapper"}`}
            >
              {item.button ? (
                <Link
                  href={item.href}
                  className={`inline-block bg-green hover:bg-greenHover text-white px-6 py-3
                transition-all ${item.childrens && "dropdown-toggle"}`}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className={`text-gray-500 hover:text-gray-800 transition-all ${
                    item.childrens && "dropdown-toggle"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {item.childrens && <DropdownMenu items={item.childrens} />}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default MainMenu;

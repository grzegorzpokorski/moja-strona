import MenuItem from "./parts/MenuItem";

import mainMenu from "./../../data/menu/mainMenu";

const MainMenu = ({ mobileMenuIsOpen }) => {
  return (
    <ul
      id="menu"
      className={`fixed lg:relative top-20 lg:top-0 right-0 bottom-0 z-10 w-80 lg:w-auto p-8 lg:p-0 flex flex-col lg:flex-row gap-6 lg:items-center overflow-y-auto lg:overflow-y-visible bg-zinc-800 lg:bg-transparent shadow-md lg:shadow-none transition duration-300 ease-in-out ${
        mobileMenuIsOpen
          ? "translate-x-0 lg:translate-x-0"
          : "translate-x-full lg:translate-x-0"
      }`}
    >
      {mainMenu &&
        mainMenu.map((item) => <MenuItem key={item.href} {...item} />)}
    </ul>
  );
};

export default MainMenu;

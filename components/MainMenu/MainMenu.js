import MenuItem from "./parts/MenuItem";

import mainMenu from "./../../data/menu/mainMenu";

const MainMenu = ({ mobileMenuIsOpen, isSticky }) => {
  return (
    <ul
      id="menu"
      className={`fixed lg:relative right-0 bottom-0 z-10 max-w-xs lg:max-w-none w-full lg:w-auto p-8 lg:p-0 flex flex-col lg:flex-row gap-6 lg:items-center overflow-y-auto lg:overflow-y-visible bg-zinc-800 lg:bg-transparent shadow-md lg:shadow-none transition transition-[top] duration-[350ms] ease-in-out ${
        mobileMenuIsOpen
          ? "translate-x-0 lg:translate-x-0"
          : "translate-x-full lg:translate-x-0"
      } ${isSticky ? "top-16 lg:top-0" : "top-20 lg:top-0"}`}
    >
      {mainMenu &&
        mainMenu.map((item) => <MenuItem key={item.href} {...item} />)}
    </ul>
  );
};

export default MainMenu;

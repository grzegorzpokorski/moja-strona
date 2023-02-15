import { SocialMenu } from "../Footer/parts/SocialMenu";
import mainMenu from "./../../data/menu/mainMenu";
import { Menu } from "./parts/Menu";
import socialMenu from "./../../data/menu/socialMenu";

type MainMenuProps = {
  isMobileMenuOpen: boolean;
  isSticky: boolean;
  closeMobileMenu: () => void;
};

export const MainMenu = ({ isMobileMenuOpen, isSticky, closeMobileMenu }: MainMenuProps) => {
  return (
    <ul
      id="menu"
      className={`fixed lg:relative right-0 bottom-0 z-10 max-w-xs lg:max-w-none w-full lg:w-auto p-10 lg:p-0 flex flex-col lg:flex-row gap-6 lg:items-center overflow-y-auto lg:overflow-y-visible bg-zinc-800 lg:bg-transparent shadow-md lg:shadow-none transition duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0 lg:translate-x-0" : "translate-x-full lg:translate-x-0"
      } ${isSticky ? "top-16 lg:top-0" : "top-20 lg:top-0"}`}
    >
      <Menu menuItems={mainMenu} closeMobileMenu={closeMobileMenu} />
      <ul className="flex flex-row gap-6 text-white lg:text-customGray pt-4 lg:pt-0 lg:pl-6 lg:border-l-2 lg:border-green">
        <SocialMenu items={socialMenu} />
      </ul>
    </ul>
  );
};

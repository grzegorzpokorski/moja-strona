import { useState } from "react";

import useStickyElement from "../../hooks/useStickyElement";

import Logo from "../Logo";
import Hamburger from "../Hamburger";
import MainMenu from "../MainMenu";

const Header = ({ isHome, logoAsTitle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky] = useStickyElement();

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="relative">
      <div
        id="navbar"
        className={`fixed top-0 py-5 lg:py-12 w-full z-10 bg-white transition-all duration-300 ${
          isSticky && "py-5 lg:py-8 drop-shadow-md"
        } ${mobileMenuOpen && "drop-shadow-md"}`}
      >
        <div className="container mx-auto px-3">
          <div className="flex flex-col lg:flex-row gap-3 items-center lg:justify-between">
            <div className="flex flex-row justify-between items-center w-full lg:w-auto">
              <Logo isHome={isHome} isTitle={logoAsTitle} />
              <Hamburger
                handleMobileMenu={handleMobileMenu}
                isOpen={mobileMenuOpen}
              />
            </div>
            <MainMenu isVisible={mobileMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

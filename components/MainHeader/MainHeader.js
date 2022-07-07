import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useStickyElement from "../../hooks/useStickyElement";

import ClickAwayListener from "../ClickAwayListener";
import Logo from "../Logo";
import Hamburger from "../Hamburger";
import MainMenu from "../MainMenu";

const MainHeader = ({ children }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const handleMobileMenuIsOpen = () => setMobileMenuIsOpen(!mobileMenuIsOpen);
  const handleClickOffTheMenu = () => {
    if (mobileMenuIsOpen) setMobileMenuIsOpen(false);
  };

  const [isSticky] = useStickyElement();

  const [isHome, setIsHome] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  return (
    <header>
      <nav
        className={`fixed top-0 z-50 w-full bg-white transition ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <section className="container mx-auto px-3 h-20 lg:h-28 flex flex-row justify-between items-center">
          <Logo isHome={isHome} isTitle={isHome} />
          <ClickAwayListener onClickAway={handleClickOffTheMenu}>
            <Hamburger
              mobileMenuIsOpen={mobileMenuIsOpen}
              handleMobileMenuIsOpen={handleMobileMenuIsOpen}
            />
            <MainMenu mobileMenuIsOpen={mobileMenuIsOpen} />
          </ClickAwayListener>
        </section>
      </nav>
      {children}
    </header>
  );
};

export default MainHeader;

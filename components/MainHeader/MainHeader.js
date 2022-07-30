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
        className={`fixed top-0 z-50 w-full bg-white transition-shadow duration-[350ms] ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <section
          className={`container mx-auto px-3 flex flex-row justify-between items-center transition-[height] duration-[350ms] ${
            isSticky ? "h-16 lg:h-20" : "h-20 lg:h-28"
          }`}
        >
          <Logo isHome={isHome} isTitle={isHome} />
          <ClickAwayListener
            onClickAway={() => mobileMenuIsOpen && setMobileMenuIsOpen(false)}
          >
            <Hamburger
              mobileMenuIsOpen={mobileMenuIsOpen}
              handleMobileMenuIsOpen={handleMobileMenuIsOpen}
            />
            <MainMenu mobileMenuIsOpen={mobileMenuIsOpen} isSticky={isSticky} />
          </ClickAwayListener>
        </section>
      </nav>
      {children}
    </header>
  );
};

export default MainHeader;

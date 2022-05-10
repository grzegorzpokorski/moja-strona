import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useStickyElement from "../../hooks/useStickyElement";

import Logo from "../Logo";
import Hamburger from "../Hamburger";
import MainMenu from "../MainMenu";

const MainHeader = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky] = useStickyElement();

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [isHome, setIsHome] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleEscapeKey = ({ key }) => {
      key && key === "Escape" && setMobileMenuOpen(false);
    };

    const handleClick = ({ target }) => {
      const navbar = document.getElementById("navbar");

      do {
        if (target == navbar) return;
        target = target.parentNode;
      } while (target != null);

      setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleEscapeKey);
      window.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header className="relative">
      <div
        id="navbar"
        className={`fixed top-0 py-5 lg:py-12 w-full z-10 bg-white transition-all duration-300 ${
          isSticky ? "py-5 lg:py-8 drop-shadow-md" : ""
        } ${mobileMenuOpen ? "drop-shadow-md" : ""}`}
      >
        <div className="container mx-auto px-3">
          <div className="flex flex-col lg:flex-row gap-3 items-center lg:justify-between">
            <div className="flex flex-row justify-between items-center w-full lg:w-auto">
              <Logo isHome={isHome} isTitle={isHome} />
              <Hamburger
                handleMobileMenu={handleMobileMenu}
                isOpen={mobileMenuOpen}
              />
            </div>
            <MainMenu isVisible={mobileMenuOpen} />
          </div>
        </div>
      </div>
      {children && <div className="mt-[4.375rem] lg:mt-36">{children}</div>}
    </header>
  );
};

export default MainHeader;

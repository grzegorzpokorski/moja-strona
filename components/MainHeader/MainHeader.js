import { useState, useEffect } from "react";

import Logo from "../Logo";
import Hamburger from "../Hamburger";
import MainMenu from "../MainMenu";

const MainHeader = ({ children }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const handleMobileMenuIsOpen = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

  useEffect(() => {
    const handleEscapeKey = ({ key }) => {
      key && key === "Escape" && setMobileMenuIsOpen(false);
    };

    const handleClickOffTheMenu = ({ target }) => {
      const menu = document.getElementById("menu");
      const hamburger = document.getElementById("hamburger");

      do {
        if (target === menu || target === hamburger) return;
        target = target.parentNode;
      } while (target != null);

      setMobileMenuIsOpen(false);
    };

    if (mobileMenuIsOpen) {
      window.addEventListener("keydown", handleEscapeKey);
      window.addEventListener("click", handleClickOffTheMenu);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleClickOffTheMenu);
    };
  }, [mobileMenuIsOpen]);

  return (
    <header>
      <nav className="fixed top-0 z-10 w-full bg-white shadow-lg">
        <section className="container mx-auto px-3 h-20 lg:h-28 flex flex-row justify-between items-center">
          <Logo isHome={true} isTitle={true} />
          <Hamburger
            mobileMenuIsOpen={mobileMenuIsOpen}
            handleMobileMenuIsOpen={handleMobileMenuIsOpen}
          />
          <MainMenu mobileMenuIsOpen={mobileMenuIsOpen} />
        </section>
      </nav>
      {children}
    </header>
  );
};

export default MainHeader;

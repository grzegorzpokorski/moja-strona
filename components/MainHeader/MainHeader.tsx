import { ReactNode, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import useStickyElement from "../../hooks/useStickyElement";
import useOnClickAway from "../../hooks/useOnClickAway";

import Logo from "../Logo";
import Hamburger from "../Hamburger";
import MainMenu from "../MainMenu";

type MainHeaderProps = {
  children?: ReactNode;
};

const MainHeader = ({ children }: MainHeaderProps) => {
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

  const menuContainerRef = useRef<HTMLDivElement>(null);
  useOnClickAway(
    menuContainerRef,
    () => mobileMenuIsOpen && setMobileMenuIsOpen(false),
  );

  return (
    <header>
      <nav
        className={`fixed top-0 z-50 w-full bg-white transition-shadow duration-300 ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <section
          className={`container mx-auto px-3 flex flex-row justify-between items-center transition-[height] duration-300 ${
            isSticky ? "h-16 lg:h-20" : "h-20 lg:h-28"
          }`}
        >
          <Logo isHome={isHome} isTitle={isHome} />
          <div ref={menuContainerRef}>
            <Hamburger
              mobileMenuIsOpen={mobileMenuIsOpen}
              handleMobileMenuIsOpen={handleMobileMenuIsOpen}
            />
            <MainMenu mobileMenuIsOpen={mobileMenuIsOpen} isSticky={isSticky} />
          </div>
        </section>
      </nav>
      {children}
    </header>
  );
};

export default MainHeader;

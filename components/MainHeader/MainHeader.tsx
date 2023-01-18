import { ReactNode, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

import useStickyElement from "../../hooks/useStickyElement";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { Logo } from "../Logo/Logo";
import { Hamburger } from "..//Hamburger/Hamburger";
import { MainMenu } from "../MainMenu/MainMenu";

type MainHeaderProps = {
  children?: ReactNode;
};

export const MainHeader = ({ children }: MainHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenu = () => {
    if (isMobileMenuOpen) {
      document.body.classList.remove("overflow-hidden", "lg:overflow-y-auto");
      setIsMobileMenuOpen(false);
    } else {
      document.body.classList.add("overflow-hidden", "lg:overflow-y-auto");
      setIsMobileMenuOpen(true);
    }
  };

  const [isSticky] = useStickyElement();

  const [isHome, setIsHome] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  const menuContainerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuContainerRef, () => isMobileMenuOpen && handleMobileMenu());

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
            <Hamburger isMobileMenuOpen={isMobileMenuOpen} onClick={handleMobileMenu} />
            <MainMenu isMobileMenuOpen={isMobileMenuOpen} isSticky={isSticky} />
          </div>
        </section>
      </nav>
      {children}
    </header>
  );
};

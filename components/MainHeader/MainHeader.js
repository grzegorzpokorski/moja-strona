import { useState } from "react";

import Logo from "../Logo";
import Hamburger from "../Hamburger";
import MainMenu from "../MainMenu";

const MainHeader = ({ children }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleMobileMenuIsOpen = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

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

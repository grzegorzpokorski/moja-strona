import footerMenu from "./../../data/menu/footerMenu";
import socialMenu from "./../../data/menu/socialMenu";

import Logo from "./../Logo";
import FooterMenu from "./parts/FooterMenu";
import SocialMenu from "./parts/SocialMenu";

type FooterProps = {
  isHome?: boolean;
};

const Footer = ({ isHome }: FooterProps) => {
  return (
    <footer className="py-20 bg-white border-t-2 border-greenLight">
      <div className="container mx-auto px-3 flex flex-wrap flex-col md:flex-row justify-between items-center gap-6">
        <span className="md:order-2 hover:underline">
          <Logo isHome={isHome} />
        </span>
        <nav className="md:order-1 grow basis-0">
          <FooterMenu items={footerMenu} />
        </nav>
        <p className="basis-full text-center text-gray-500 md:order-4">
          Grzegorz Pokorski © 2022. Doodles by doodleipsum.com. Created by
          Grzegorz Pokorski.
        </p>
        <ul className="flex flex-row grow basis-0 gap-3 text-green md:justify-end md:order-3">
          <SocialMenu items={socialMenu} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

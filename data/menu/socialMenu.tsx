import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { SocialMenuItemType } from "../../components/Footer/parts/SocialMenu";

const socialMenu: SocialMenuItemType[] = [
  {
    href: "https://linkedin.com/in/grzegorz-pokorski",
    label: "linkedin",
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
  {
    href: "https://github.com/grzegorzpokorski",
    label: "github",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    href: "https://behance.net/grzegorzpokorski",
    label: "behance",
    icon: <FontAwesomeIcon icon={faBehance} />,
  },
  {
    href: "https://facebook.com/grzegorzpokorski.software",
    label: "facebook",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
];

export default socialMenu;

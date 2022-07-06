import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const socialMenu = [
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
  {
    href: "https://linkedin.com/in/grzegorz-pokorski",
    label: "linkedin",
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
];

export default socialMenu;

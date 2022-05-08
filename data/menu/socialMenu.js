import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const socialMenu = [
  {
    href: "https://behance.net/grzegorzpokorski",
    label: "behance",
    icon: <FontAwesomeIcon icon={faBehance} />,
  },
  {
    href: "https://instagram.com/grzegorz_pokorski",
    label: "instagram",
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    href: "https://linkedin.com/in/grzegorz-pokorski",
    label: "linkedin",
    icon: <FontAwesomeIcon icon={faLinkedinIn} />,
  },
];

export default socialMenu;

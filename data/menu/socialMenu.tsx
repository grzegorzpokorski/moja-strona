import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faFacebook,
  faGithub,
  faLinkedinIn,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

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
    href: "https://discordapp.com/users/399347095716495360",
    label: "discord",
    icon: <FontAwesomeIcon icon={faDiscord} />,
  },
  {
    href: "https://behance.net/grzegorzpokorski",
    label: "behance",
    icon: <FontAwesomeIcon icon={faBehance} />,
  },
];

export default socialMenu;

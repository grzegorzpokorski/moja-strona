import { MainMenuItemType } from "../../types/menu";

const mainMenu: MainMenuItemType[] = [
  {
    href: "/o-mnie",
    label: "O mnie",
    button: false,
  },
  {
    href: "/oferta",
    label: "Oferta",
    button: false,
    childrens: [
      {
        href: "/oferta/tworzenie-stron-internetowych",
        label: "Tworzenie stron internetowych",
      },
      {
        href: "/oferta/kodowanie-projektow-graficznych",
        label: "Kodowanie projektów graficznych",
      },
      {
        href: "/oferta/projektowanie-stron",
        label: "Projektowanie stron",
      },
    ],
  },
  {
    href: "https://behance.net/grzegorzpokorski",
    label: "Realizacje",
    button: false,
  },
  {
    href: "/blog",
    label: "Blog",
    button: false,
  },
  {
    href: "/czesto-zadawane-pytania",
    label: "FAQ",
    button: false,
  },
  {
    href: "/cennik",
    label: "Cennik",
    button: false,
  },
  {
    href: "/kontakt",
    label: "Kontakt",
    button: true,
  },
];

export default mainMenu;

const mainMenu = [
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
        href: "/oferta/kodowanie-szablonow-graficznych",
        label: "Kodowanie szablonów graficznych",
      },
      {
        href: "/oferta/projektowanie-graficzne",
        label: "Projektowanie graficzne",
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
    href: "/kontakt",
    label: "Kontakt",
    button: true,
  },
];

export default mainMenu;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faImages } from "@fortawesome/free-solid-svg-icons";

export const offerList = [
  {
    icon: <FontAwesomeIcon icon={faDesktop} />,
    title: "Kompleksowe tworzenie stron internetowych",
    description:
      "Oferuję wykonanie strony internetowej od A do Z zaczynając od projektu graficznego po wdrożenie go do systemu zażądania treścią WordPress.",
    href: "/oferta/tworzenie-stron-internetowych",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Kodowanie projektów graficznych do HTML",
    description:
      "Potrzebujesz profesjonalnie zakodowanego szablonu? A może nie potrzebujesz często edytować treści na swojej witrynie? Chętnie zakoduję go dla Ciebie.",
    href: "/oferta/kodownie",
  },
  {
    icon: <FontAwesomeIcon icon={faImages} />,
    title: "Projektowanie graficzne",
    description:
      "Chodzi Ci po głowie nowy projekt? A może nudzi Cię twoja stara strona internetowa i chcesz ją dostosować do panujących trendów? Zapraszam, zaprojektuję Twoją nową stronę.",
    href: "/oferta/projektowanie-graficzne",
  },
];

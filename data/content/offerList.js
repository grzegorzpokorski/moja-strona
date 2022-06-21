import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faImages } from "@fortawesome/free-solid-svg-icons";

export const offerList = [
  {
    icon: <FontAwesomeIcon icon={faDesktop} />,
    title: "Kompleksowe tworzenie stron internetowych",
    description: (
      <p>
        Oferuję wykonanie strony internetowej od A do Z zaczynając od projektu
        graficznego po wdrożenie go do systemu zażądania treścią WordPress.
      </p>
    ),
    href: "/oferta/tworzenie-stron-internetowych",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Kodowanie statyczne stron internetowe",
    description: (
      <p>
        Jeśli nie potrzebujesz aktualizować treści na strony lub masz do
        zakodowania projekt graficzny, chętnie zakoduję dla Ciebie statyczną
        stronę internetową.
      </p>
    ),
    href: "/oferta/kodownie",
  },
  {
    icon: <FontAwesomeIcon icon={faImages} />,
    title: "Projektowanie graficzne",
    description: (
      <p>
        Chodzi Ci po głowie nowy projekt? A może nudzi Cię twoja stara strona
        internetowa i chcesz ją dostosować do panujących trendów? Zapraszam,
        zaprojektuję Twoją nową stronę.
      </p>
    ),
    href: "/oferta/projektowanie-graficzne",
  },
];

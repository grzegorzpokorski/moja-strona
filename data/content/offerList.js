import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode, faImages } from "@fortawesome/free-solid-svg-icons";

export const offerList = [
  {
    icon: <FontAwesomeIcon icon={faDesktop} />,
    title: "Kompleksowe tworzenie stron internetowych",
    description: (
      <p>
        Oferuję wykonanie strony internetowej od A do Z zaczynając od projektu
        graficznego po wdrożenie go do systemu zarządzania treścią WordPress.
      </p>
    ),
    href: "/oferta/tworzenie-stron-internetowych",
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: "Kodowanie statycznych stron internetowych",
    description: (
      <p>
        Jeśli nie potrzebujesz aktualizować treści na stronie lub masz do
        zakodowania projekt graficzny, chętnie zakoduję dla Ciebie statyczną
        stronę internetową.
      </p>
    ),
    href: "/oferta/kodownie-projektow-graficznych",
  },
  {
    icon: <FontAwesomeIcon icon={faImages} />,
    title: "Projektowanie graficzne",
    description: (
      <p>
        Chodzi Ci po głowie nowy projekt? A może nudzi Cię twoja stara strona
        internetowa i chcesz ją dostosować do panujących trendów? Zapraszam,
        zaprojektuję Twoją nową stronę internetową.
      </p>
    ),
    href: "/oferta/projektowanie-graficzne",
  },
];

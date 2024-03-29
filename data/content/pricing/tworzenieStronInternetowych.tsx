import { Link } from "../../../components/Link/Link";
import { PricingListItemType } from "../../../components/PricingList/parts/ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faHandshake, faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const tworzenieStronInternetowychPricing: PricingListItemType[] = [
  {
    icon: <FontAwesomeIcon icon={faGem} className="font-bold text-white text-2xl icon-in-box" />,
    title: "Statyczna strona internetowa",
    price: "999 pln",
    features: [
      <>Indywidualny projekt</>,
      <>Pełna responsywność — dostosowanie do urządzeń mobilnych</>,
      <>
        Wykonanie zgodne z{" "}
        <Link href="/oferta/tworzenie-stron-internetowych#zalety">najlepszymi standardami</Link>
      </>,
      <>Optymalizacja szybkości ładowania się strony</>,
      <>Wynik w PageSpeed powyżej 85/100 (desktop)</>,
      <>Wynik w GTmetrix powyżej 90%</>,
      <>Wdrożenie na serwer</>,
    ],
    href: "/kontakt",
  },
  {
    icon: (
      <FontAwesomeIcon icon={faHandshake} className="font-bold text-white text-2xl icon-in-box" />
    ),
    title: "Landing page z WordPress CMS",
    price: "1499 pln",
    features: [
      <>Indywidualny projekt</>,
      <>Indywidualny szablon WordPress</>,
      <>Możliwość prostej edycji treści i układu elementów na stronie</>,
      <>Formularz kontaktowy</>,
      <>Strona błędu 404</>,
      <>Optymalizacja SEO</>,
      <>Optymalizacja szybkości ładowania się strony</>,
      <>
        Wykonanie zgodne z{" "}
        <Link href="/oferta/tworzenie-stron-internetowych#zalety">najlepszymi praktykami</Link>
      </>,
      <>Wynik w PageSpeed powyżej 85/100 (desktop)</>,
      <>Ocena w GTmetrix powyżej 90%</>,
    ],
    href: "/kontakt",
  },
  {
    icon: (
      <FontAwesomeIcon icon={faBriefcase} className="font-bold text-white text-2xl icon-in-box" />
    ),
    title: "Strona internetowa z WordPress CMS",
    price: "1999 pln",
    features: [
      <>Indywidualny projekt</>,
      <>Indywidualny szablon WordPress</>,
      <>Możliwość prostej edycji treści i układu elementów na stronie</>,
      <>Formularz kontaktowy</>,
      <>Strona błędu 404</>,
      <>Optymalizacja SEO</>,
      <>Optymalizacja szybkości ładowania się strony</>,
      <>
        Wykonanie zgodne z{" "}
        <Link href="/oferta/tworzenie-stron-internetowych#zalety">najlepszymi praktykami</Link>
      </>,
      <>Wynik w PageSpeed powyżej 85/100 (desktop)</>,
      <>Ocena w GTmetrix powyżej 90%</>,
      <>Predefiniowane style elementów</>,
    ],
    href: "/kontakt",
  },
];

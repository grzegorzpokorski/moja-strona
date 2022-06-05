import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faCheckDouble,
  faCode,
  faDesktop,
  faMobileAlt,
  faPalette,
  faRocket,
  faSpellCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

export const pageFeatures = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faMobileAlt}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Zakodowana mobile first, pełna responsywnośc",
    description:
      "Większość użytkowników internetu używa z urządzeń mobilnych. Wychodząc temu naprzeciw, wykonywane przeze mnie strony cechują się doskonałym dostosowaniem do każdego rodzaju urządzeń — począwszy od smartfonów, przez tablety, na dużych ekranach monitorów kończąc.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faCode}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Semantyczny kod źródłowy",
    description:
      "Kod strony odpowiada zamieszczanej na niej treści, a odpowiednio dobrane znaczniki prawidłowo nakreślają jej strukturę, czyniąc ją dostępną również dla użytkowników korzystających z urządzeń wspomagających jej przeglądanie takich jak czytniki ekranowe.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faSpellCheck}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Zgodność z zasadami SEO",
    description:
      "Bardzo ważne jest, aby strona dobrze indeksowała się w wyszukiwarkach internetowych. Rozumiejąc tę potrzebę, dlatego dbam, aby wykonanie strony oraz stosowane technologie wspomagały osiągnięcie wysokich pozycji w najpopularniejszych wyszukiwarkach takich jak Google.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faBoxes}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Możliwość rozbudowy",
    description:
      "Modułowa budowa wykonywanych projektów pozwala na rozbudowywanie witryny w przyszłości, jeśli zaszłaby potrzeba dodania dodatkowych funkcjonalności czy elementów struktury.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faCheckDouble}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Prostota zarządzania treścią",
    description:
      "Indywidualne podejście do wykonywanych witryn pozwala doskonale dopasować panel zażądania treścią strony, aby praktycznie każdy bez znajomości programowania mógł z przyjemnością nią zarządzać.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faRocket}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Szybkie ładowanie",
    description:
      "Stosuję nowoczesne formaty grafik oraz techniki pozwalające zoptymalizować czas ładowania się strony w przeglądarce. Każda witryna jest testowana pod tym kątem narzędziami takimi jak PageSpeed Insights czy GTmetrix.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faHtml5}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Zgondość z najnowszymi standardami",
    description:
      "Podążając za zmianami, w swoich projektach wykorzystuję najnowsze technologie takie jak: HTML5, SCSS, JS ES6, MySQL, WEBP i najlepsze praktyki jak: BEM, Moblie First, aby finalnie wyróżniać się solidnym wykonaniem oraz wydajnością.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faDesktop}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Kompatybilność z najnowszymi przeglądarkami",
    description:
      "Gwarantuję pełną funkcjonalność wykonywanej strony na najpopularniejszych przeglądarkach internetowych: Mozilla Firefox (3 ostanie wersje), Google Chrome (3 ostatnie wersje), Safari (1 ostatnia wersja).",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faPalette}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Nowoczesny design",
    description:
      "Wykonuję strony internetowe, które cieszą oko swoim wyglądem oraz działaniem. Śledzę aktualne oraz dopiero pojawiające się światowe trendy w zakresie projektowania stron i staram się przekładać zdobywaną wiedzę na swoje prace.",
  },
];

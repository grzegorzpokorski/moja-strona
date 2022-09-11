import { Link } from "../../components/Link/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDesktop,
  faFileCircleCheck,
  faMobileAlt,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

import { BoxesListItem } from "../../types/types";

export const codingFeatures: BoxesListItem[] = [
  {
    icon: (
      <FontAwesomeIcon icon={faMobileAlt} className="font-bold text-white text-2xl icon-in-box" />
    ),
    title: "Zakodowana mobile first, pełna responsywnośc",
    description: (
      <p>
        Większość użytkowników internetu korzysta z urządzeń mobilnych. Wykonywane przeze mnie
        strony cechują się doskonałym dostosowaniem do każdego rodzaju urządzeń — począwszy od
        smartfonów, przez tablety, na dużych ekranach monitorów kończąc.
      </p>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faCode} className="font-bold text-white text-2xl icon-in-box" />,
    title: "Semantyczny kod źródłowy",
    description: (
      <p>
        Kod strony odpowiada zamieszczanej na niej treści. Odpowiednio dobrane znaczniki prawidłowo
        nakreślają strukturę strony, czyniąc ją dostępną również dla użytkowników korzystających z
        urządzeń wspomagających jej przeglądanie takich jak czytniki ekranowe.
      </p>
    ),
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faFileCircleCheck}
        className="font-bold text-white text-2xl icon-in-box"
      />
    ),
    title: "Modułowy, dobrze opisany kod",
    description: (
      <p>
        Rozumiem potrzebę, aby strona była wysoko w wyszukiwarkach. Wysokiej jakości wykonanie
        strony oraz stosowane technologie wspomagają osiągnięcie wysokich pozycji w
        najpopularniejszych wyszukiwarkach takich jak Google.
      </p>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faRocket} className="font-bold text-white text-2xl icon-in-box" />,
    title: "Szybkie ładowanie",
    description: (
      <p>
        Stosuję nowoczesne formaty grafik oraz techniki pozwalające zoptymalizować czas ładowania
        się strony w przeglądarce. Każda witryna jest testowana pod tym kątem narzędziami takimi jak{" "}
        <Link href="https://pagespeed.web.dev/">PageSpeed Insights </Link>
        czy <Link href="https://gtmetrix.com/">GTmetrix</Link>.
      </p>
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faHtml5} className="font-bold text-white text-2xl icon-in-box" />,
    title: "Zgondość z najnowszymi standardami",
    description: (
      <p>
        Podążając za zmianami, w swoich projektach wykorzystuję najnowsze technologie takie jak:
        HTML5, SCSS, JS ES6, MySQL, WEBP i najlepsze praktyki jak: BEM, Moblie First, aby finalnie
        wyróżniać się solidnym wykonaniem oraz wydajnością.
      </p>
    ),
  },
  {
    icon: (
      <FontAwesomeIcon icon={faDesktop} className="font-bold text-white text-2xl icon-in-box" />
    ),
    title: "Kompatybilność z najnowszymi przeglądarkami",
    description: (
      <p>
        Oferuję pełną funkcjonalność wykonywanej strony na najpopularniejszych przeglądarkach
        internetowych, jak: Mozilla Firefox, Google Chrome, Safari. Pod uwagę brane są 3 najnowsze
        wersje przeglądarek.
      </p>
    ),
  },
];

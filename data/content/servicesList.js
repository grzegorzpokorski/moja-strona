import codeImage from "../../public/images/code.webp";
import designImage from "../../public/images/design.webp";
import pagesImage from "../../public/images/pages.webp";

export const servicesList = [
  {
    subtitle: "Strony internetowe",
    title: "Programowanie stron internetowych",
    content: (
      <>
        <p>
          Wykonuję 'szyte na miarę’ strony internetowe dostosowane do konkretnej
          grupy docelowej oraz pomagające realizować założone cele.
        </p>
        <p>
          Moją specjalnością są strony dla małych oraz średnich firm oparte na
          autorskim motywie.
          <strong>
            Każda strona internetowa przygotowywana jest indywidualnie
          </strong>
          , aby zapewnić jak najlepsze wrażenia z użytkowania zarówno dla
          odbiorców jak i dla administratorów.
        </p>
        <p>
          Rozszerz zasięg swojej firmy dzięki mojej profesjonalnie przygotowanej
          stronie internetowej.
        </p>
      </>
    ),
    href: "/tworzenie-stron-internetowych",
    image: {
      src: pagesImage,
      alt: "człowiek programuje stronę w biurze",
    },
  },
  {
    subtitle: "Kodowanie szablonów",
    title: "Kodowanie gotowych projektów graficznych do HTML",
    content: (
      <>
        <p>
          Jeśli poszukujesz programisty do zakodowania Twojego szablonu
          graficznego? Dobrze trafiłeś! Oferuję wysokiej jakości, wolne od
          błędów i dostosowane do potrzeb usługę kodowania szablonów stron
          internetowych. Wykorzystuje najnowsze technologie, abyś mógł się
          cieszyć, w pełni kompatybilną z najnowszymi przeglądarkami, stroną
          internetową.
        </p>
      </>
    ),
    href: "/kodowanie",
    image: {
      src: codeImage,
      alt: "szczęśliwy człowiek koduje na sofie",
    },
  },
  {
    subtitle: "Projektowanie graficzne",
    title: "Potrzebujesz projektu graficznego?",
    content: (
      <>
        <p>
          Chodzi Ci po głowie nowy projekt? A może nudzi Cię wygląd twojej
          strony internetowej? Chętnie przygotują dla Ciebie kompleksowy projekt
          graficzny witryny, odpowiadający Twojej wizji. Na bieżąco monitoruję
          zmieniające się trendy w dziedzinie projektowania graficznego i
          wykorzystuję je w swoich pracach.
        </p>
        <p>
          Projekty wykonuję w&nbsp;<strong>Figmie</strong>&nbsp;oraz&nbsp;
          <strong>Adobe Photoshop</strong>.
        </p>
      </>
    ),
    href: "/projektowanie-graficzne",
    image: {
      src: designImage,
      alt: "człowiek biegnie z ołówkiem projektować nową stronę interneową",
    },
  },
];

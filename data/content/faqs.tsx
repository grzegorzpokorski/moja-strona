import { AccordionItemType } from "../../components/Accordion/Accordion";
import { Link } from "../../components/Link/Link";

export const faqs: AccordionItemType[] = [
  {
    heading: "Jakiego rodzaju strony wykonujesz?",
    content: (
      <p>
        Specjalizuje się z realizacji stron firmowych, wizytówkowych, blogach osobistych oraz
        witrynach typu landing page.
      </p>
    ),
  },
  {
    heading: "Co zawiera wykonana przez Ciebie strona?",
    content: (
      <>
        <p>
          Finalnie efektem mojej pracy jest produkt zgodny z ustaleniami poczynionymi z klientem.
          Standardem jest strona główna oraz elementy / bloki potrzebne do jej zbudowania, strona
          obsługująca błąd 404, strona kontaktowa z formularzem kontaktowym.
        </p>
        <p>
          Niektóre elementy mogące znaleźć się na stronie to: galeria typu lightbox, slider z
          referencjami, moduł bloga, mapa dojazdu, banery, sekcja z rozwijanymi elementami typu
          akordeon itd. — wszystko zależy od potrzeb i ustaleń.
        </p>
      </>
    ),
  },
  {
    heading: "Jak długo trwa wykonanie strony internetowej?",
    content: (
      <p>
        Zazwyczaj wykonanie strony internetowej zajmuje do dwóch do czterech tygodni. W tym czasie
        wykonywane są niezbędne prace takie jak projekt graficzny, kodowanie strony, wdrożenie do
        systemu cms Wordpress i wiele innych zadań koniecznych do zrealizowania projektu. Zbierane
        oraz dostarczane są również niezbędne materiały do wykonania zlecenia. Jeśli nie masz tyle
        czasu, zachęcam do <Link href="/kontakt">kontaktu</Link> - postaram się znaleźć optymalne
        rozwiązanie.
      </p>
    ),
  },
  {
    heading: "Ile kosztuje wykonanie strony internetowej?",
    content: (
      <>
        <p>
          Koszt realizacji strony internetowej uzależniony jest od kilku czynników: rodzaju strony,
          stopnia skomplikowania, konieczności wykonania projektu graficznego, migracji istniejącej
          treści i wielu innych. W celu poznania dokładnej ceny zachęcam do{" "}
          <Link href="/kontakt">kontaktu</Link> wraz z informacjami o planowanym projekcie, abym
          mógł go wstępnie wycenić.
        </p>
        <p>Pomocne może okazać się wypełnienie i przesłanie briefu wraz z wiadomością do mnie.</p>
      </>
    ),
  },
  {
    heading: "Co to jest CMS?",
    content: (
      <p>
        Akronim od angielskiego określenia: content management system, oznaczającego system
        zarządzania treścią. Jest to oprogramowanie pozwalające edytować zawartość stron
        internetowej, dodawać oraz zarządzać multimediami takimi jak zdjęcia bez konieczności
        posiadania umiejętności programowania. Edycja treści z wykorzystaniem CMS odbywa się za
        pomocą formularzy oraz innych elementów niewymagających specjalistycznej wiedzy.
      </p>
    ),
  },
  {
    heading: "Czy konieczne jest osobiste spotkanie, aby zrealizować projekt?",
    content: (
      <>
        <p>Nie. Realizacja zlecenia jest możliwa bez konieczności osobistych spotkań.</p>

        <p>
          Wszelkie ustalenia możemy poczynić na odległość np. mailowo, czy poprzez komunikator wideo
          (Zoom, MS Teams).
        </p>
        <p>
          Jeśli jednak chciałabyś / chciałbyś spotkać się ze mną osobiście by omówić projekt, możemy
          umówić się na spotkanie w regionie łódzkim. Często przebywam w okolicach następujących
          miejscowości: Bełchatów, Wieluń, Łask, Szczerców, Kleszczów, Pajęczno, Zelów, Piotrków
          Trybunalski.
        </p>
      </>
    ),
  },
  {
    heading: "W jaki sposób mogę rozliczyć się za projekt?",
    content: (
      <p>
        Realizowane projekty rozliczam poprzez umowę o dzieło lub umowę zlecenie. Istnieje możliwość
        wystawienia faktury przez za pośrednictwem serwisu useme.eu.
      </p>
    ),
  },
];

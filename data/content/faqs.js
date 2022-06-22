import Link from "../../components/Link";

export const faqs = [
  {
    question: "Jakie typy stron wykonujesz?",
    answer: (
      <p>
        Specjalizuje się z realizacji stron firmowych, wizytówkowych, blogach
        osobistych oraz witrynach typu landing page.
      </p>
    ),
    open: true,
  },
  {
    question: "Co zawiera wykonana przez Ciebie strona?",
    answer: (
      <>
        <p>
          Finalnie efektem mojej pracy jest produkt zgodny z ustaleniami
          poczynionymi z klientem. Standardem jest strona główna oraz elementy /
          bloki potrzebne do jej zbudowania, strona obsługująca błąd 404, strona
          kontaktowa z formularzem kontaktowym.
        </p>
        <p>
          Niektóre elementy mogące znaleźć się na stronie to: galeria typu
          lightbox, slider z referencjami, moduł bloga, mapa dojazdu, banery,
          sekcja z rozwijanymi elementami typu akordeon itd — wszystko zależy od
          potrzeb i ustaleń.
        </p>
      </>
    ),
    open: false,
  },
  {
    question: "Jak długo trwa wykonanie stron internetowej?",
    answer: (
      <p>
        Zazwyczaj wykonanie strony internetowej zajmuje dwóch do czterech
        tygodni. W tym czasie wykonywane są niezbędne prace takie jak projekt
        graficzny, kodowanie strony, wdrożenie do systemu cms Wordpress i wiele
        innych zadań koniecznych do zrealizowania projektu. Zbierane oraz
        dostaarczane są również niezbędne materiały do wykonania zlecenia. Jeśli
        nie masz tyle czasu zachęcam do <Link href="/kontakt">kontaktu</Link> -
        postaram się znaleźć najbardziej optymalne rozwiązanie.
      </p>
    ),
    open: false,
  },
  {
    question: "Ile kosztuje wykonanie strony internetowej?",
    answer: (
      <>
        <p>
          Koszt realizacji strony internetowej uzależniony jest od kilku
          czynników: rodzaju strony, stopnia skomplikowania, konieczności
          wykonania projektu graficznego, migracji istniejącej treści i wielu
          innych. W celu poznania dokładnej ceny zachęcam do{" "}
          <Link href="/kontakt">kontaktu</Link> wraz z informacjami o planowanym
          projekcie, abym mógł go wstępnie wycenić.
        </p>
        <p>
          Pomocne może okazać się wypełnienie i przesłanie briefu wraz z
          wiadomością do mnie.
        </p>
      </>
    ),
    open: false,
  },
  {
    question: "Co to jest CMS?",
    answer: (
      <p>
        Akronim od angielskiego określenia: content management system,
        oznaczającego system zarządzania treścią. Jest to oprogramowanie
        pozwalające edytować zawartość stron internetowej, dodawać oraz
        zarządzać multimediami takimi jak zdjęcia bez konieczności posiadania
        umiejętności programowania. Edycja treści z wykorzystaniem CMS odbywa
        się za pomocą formularzy oraz innych elementów nie wymagających
        specjalistycznej wiedzy.
      </p>
    ),
    open: false,
  },
  {
    question: "Czy wystawiasz fakturę?",
    answer: (
      <p>
        Realizowane projekty rozliczam poprzez umowę o dzieło lub umowę
        zlecenie. Istnieje możliwość wystawienia faktury przez za pośrednictwem
        serwisu useme.
      </p>
    ),
    open: false,
  },
];

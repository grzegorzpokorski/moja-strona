import Head from "../../components/Head";
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import MainHeader from "../../components/MainHeader";
import Banner from "../../components/Banner";
import ContentWithImage from "../../components/ContentWithImage";
import Section from "../../components/Section";
import Header from "../../components/Header";
import BoxesList from "../../components/BoxesList";
import Process from "../../components/Process";
import Content from "../../components/Content";
import Link from "../../components/Link";

import heroImage from "../../public/images/pages.webp";
import logosImage from "../../public/images/logos.webp";
import { pageFeatures } from "../../data/content/pageFeatures";

import addressSeparator from "../../data/seo/addressSeparator";
import siteName from "../../data/seo/siteName";

const Offer = () => {
  return (
    <>
      <Head
        title={`Tworzenie stron internetowych ${addressSeparator} ${siteName}`}
        description={`Tworzenie stron internetowych ładujących się poniżej jedenej sekundy wykorzystując najnowsze technologie.`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Tworzenie stron internetowych w oparciu o WordPress ✨"
          description={
            <>
              <p>
                Niepowtarzalne, indywidualnie przygotowywane, ultra szybkie
                strony internetowe z najpopularniejszym systemem zarządzania
                treścią.
              </p>
            </>
          }
          image={{
            alt: "tworzenie strony na kanapie",
            src: heroImage,
          }}
          buttons={[
            {
              label: "Rozpocznijmy współpracę",
              href: "/kontakt",
            },
            {
              label: "Dowiedz się więcej",
              href: "#tresc",
              style: "transparentGreen",
            },
          ]}
          withMarginOnTop
          titleAsH1
        />
      </MainHeader>
      <Main>
        <Section bgColor="bg-whiteGreen">
          <Header
            subtitle="System zarządzania treścią"
            title="Dlaczego warto korzystać z WordPresa?"
          />
          <Content
            columns={2}
            withSpaceAbove
            content={
              <>
                <p>
                  W przypadku kiedy zależy nam na możliwości dodawanie oraz
                  edytowania treści oferuję indywidualny projekt oparty na
                  najpopularniejszym systemie zarządzania treścią (CMS)
                  WordPress.
                </p>
                <h3>Zalety stosowania WordPressa.</h3>
                <p>
                  Poniżej wymieniam niektóre powody, dlaczego wybranie
                  WordPressa do utworzenia Twojej strony internetowej to dobry
                  pomysł:
                </p>
                <ol>
                  <li>
                    Otwarty kod źródłowy oraz wsparcie przez twórców
                    aktualizacjami pozwalają spać spokojnie bez obaw o
                    bezpieczeństwo naszej strony.
                  </li>
                  <li>
                    Możliwość elastycznego dostosowania do wymagań — zbudujemy
                    na nim zarówno małą stronę lokalnej firmy czy blog
                    tematyczny, jak i ogromny serwis informacyjny.
                  </li>
                  <li>
                    Pomimo ponad 15-letniej obecności na rynku jego popularność
                    nie słabnie i jego udział w światowym rynku nadal deklasuje
                    konkurencję.
                  </li>
                  <li>
                    Popularność tego rozwiązania sprawia, że możemy liczyć na
                    łatwe wsparcie ze strony dużej rzeszy programistów.
                  </li>
                  <li>
                    Umożliwia proste zarządzanie zdjęciami oraz innymi plikami
                    witryny.
                  </li>
                </ol>
                <h3>Dlaczego warto wybrać moje usługi?</h3>
                <p>
                  Pomimo obecności tysięcy gotowych szablonów, nie jednokrotnie
                  znalezienie idealnego rozwiązania dla naszych potrzeb nie
                  zawsze jest możliwe. Sama konfiguracja takich motywów często
                  jest przytłaczająca, a konieczność stosowania zewnętrznych
                  wtyczek sprawia, że wydajność takiej witryny nie jest
                  zadowalająca.
                </p>
                <p>
                  Rozwiązuję powyższe problemy, oferując&nbsp;
                  <strong>indywidualny, ‘szyty na miarę’ projekt</strong> oparty
                  na autorskim motywie budowanym od podstaw. Cała witryna jest
                  dostosowana do treści, jaka finalnie ma się na niej znaleźć.
                  Użytkownik ma do wyboru unikalne bloki, z których może
                  zbudować swoją własną wersję strony, zachowując przy tym
                  właściwą strukturę dokumentu{" "}
                  <strong>bez nadmiarowego i zbędnego kodu źródłowego</strong>.
                  Administracja taką stroną przypomina układanie klocków i
                  sprawia wiele przyjemności.
                </p>
                <p>
                  Jeśli zastanawiasz się, czy moje usługi będą odpowiednie dla
                  Twojego projektu, serdecznie zapraszam do{" "}
                  <Link href="/kontakt">kontaktu</Link>!
                </p>
              </>
            }
          />
        </Section>
        <Section bgColor="bg-green-100">
          <Header
            subtitle="Zalety"
            title="Czym wyróżniają się moje strony?"
            description={
              <p>
                Każda wykonana przeze mnie strona wyróżnia się na tle
                konkurencyjncyh rozwiązań jakością wykonania i dbałością o
                detale. Poznaj czym wygrywam na starcie z wieloma agencjami
                reklamowymi, które często bardziej cenią ilość, a nie jakość
                wykonywanych zleceń.
              </p>
            }
            centered
          />
          <BoxesList items={pageFeatures} withMarginTop />
        </Section>

        <ContentWithImage
          subtitle="Nowoczesne technologie"
          title="Technologie, z których korzystam"
          content={
            <>
              <p>
                Do wykonania szczegółowych projektów graficznych witryn
                internetowych wykorzystuję&nbsp;<strong>Figmę</strong>
                &nbsp;oraz&nbsp;<strong>Adobe Phtoshop</strong>. Po zakończeniu
                projektowania makiet witryny, wykorzystuje najnowsze,&nbsp;
                <strong>niezawodne dostępne narządzia oraz technologię</strong>
                &nbsp;do przekształcenia jej w&nbsp;
                <strong>
                  funkcjonalną, wolną od błędów i responsywną stronę internetową
                </strong>
                .
              </p>
              <p>
                Do zaprogramowania oraz wdrożenia projektu wykorzystuję
                technologie takie jak:{" "}
                <strong>HTML5, CSS3, PHP7, Java Script ES6+</strong>, oraz
                praktyki:&nbsp;<strong>Mobile First, BEM</strong>. Wszystko to
                aby dostarczyć jak najlepszy jakościowo produkt.
              </p>
            </>
          }
          image={{
            src: logosImage,
            alt: "loga wykorzystywanych przez mnie technologii",
          }}
          reverse
          bgColor="bg-whiteGreen"
        />
        <Process
          bgColor="bg-white"
          header={{
            title: "Jak przebiega współpraca?",
            subtitle: "Współpraca",
            description: (
              <p>
                Dobra komunikacja od samego początku pozwala nawet przy bardzo
                skomplikowanych projektach osiągnąć sukces. Poznaj poszczególne
                etapy współpracy.
              </p>
            ),
          }}
          steps={[
            {
              title: "Brief",
              content: (
                <p>
                  Każdą współpracę zaczynam od szczegółowego zbadania potrzeb.
                  Uważam, że w dużej mierze pomyślna realizacja projektu musi
                  zostać poprzedzona wnikliwą analizą wielu aspektów takich jak:
                  cel witryny, stylistyka, grupa odbiorców, zakładane rezultaty
                  czy cele biznesowe.
                </p>
              ),
            },
            {
              title: "Formalności",
              content: (
                <p>
                  Po zbadaniu potrzeb następuje wstępna wycena projektu. Po
                  nakreśleniu ram czasowych, realizacji zlecenia oraz akceptacji
                  tych warunków, przychodzi pora na formalne rozpoczęcie
                  realizacji projektu oraz podpisanie umowy.
                </p>
              ),
            },
            {
              title: "Projekt graficzny",
              content: (
                <p>
                  Biorąc pod uwagę ustalenia dotyczące zakładanego efektu
                  finalnego realizowanej witryny, wykonuję i przedstawiam
                  projekt graficzny witryny do akceptacji oraz ewentualnych
                  poprawek, tak aby finalny produkt trafiał w oczekiwania
                  klienta.
                </p>
              ),
            },
            {
              title: "Programowanie",
              content: (
                <p>
                  Najbardziej czasochłonnym etapem tworzenia, każdej strony
                  internetowej jest etap wdrożenia zaakceptowanego projektu
                  graficznego. W pierwszej fazie koduję stronę do szablonu HTML,
                  a następnie integruję go z panelem zarządzania WordPress.
                </p>
              ),
            },
            {
              title: "Wdrożenie",
              content: (
                <p>
                  Po zakończeniu prac związanych z projektowaniem i
                  programowaniem witryny przychodzi czas na wgranie gotowej
                  witryny na serwer wskazany przez klienta.
                </p>
              ),
            },
            {
              title: "Finalizacja",
              content: (
                <p>
                  Na zakończenie realizacji projektu przekazuję gotową witrynę
                  oraz objaśniam w razie potrzeby, jak można nią zarządzać. W
                  razie konieczności dokonuję niezbędnych poprawek.
                </p>
              ),
            },
          ]}
        />
        <Banner
          title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
          description="Chętnie pomogę zrealizować Twój projekt."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              style: "white",
            },
            {
              label: "Poczytaj mój blog",
              href: "/blog",
              style: "transparentWhite",
            },
          ]}
        />
      </Main>
    </>
  );
};

export default Offer;

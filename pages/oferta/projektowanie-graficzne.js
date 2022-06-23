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

import heroImage from "../../public/images/code.webp";
import logosImage from "../../public/images/logos-graphics.webp";

import addressSeparator from "../../data/seo/addressSeparator";
import siteName from "../../data/seo/siteName";

import { codingFeatures } from "../../data/content/codingFeatures";

const Offer = () => {
  return (
    <>
      <Head
        title={`Projektowanie graficzne ${addressSeparator} ${siteName}`}
        description={`Projektowanie graficzne stron internetowych oraz grafiki użytkowej takiej jak ulotki, banery, wizytówki.`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Projektowanie graficzne stron internetowych oraz grafik użytkowych 🎨"
          description={
            <>
              <p>
                Przygotuję dla Ciebie projekt graficzny Twojej{" "}
                <Link href="/oferta/tworzenie-stron-internetowych">
                  strony internetowej
                </Link>
                , zaskoczę Twoją konkurencje przyciągającym wzrok banerem
                reklamowym.
              </p>
              <p>
                Oferuję profesjonalne projekty ulotek oraz wizytówek dla Twojej
                działalności.
              </p>
            </>
          }
          image={{
            alt: "szczęśliwy człowiek koduje na sofie",
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
            subtitle="Projektowanie graficzne"
            title="Szeroka oferta usług związnych z grafiką użytkową: ulotki, banery, makiety stron internetowych."
          />
          <Content
            columns={2}
            withSpaceAbove
            content={
              <>
                <p>
                  Posiadasz gotowy projekt graficzny twojej przyszłej strony
                  internetowej? Kodowanie stron wymaga wiedzy technicznej,
                  której nie zdobędziesz w kilka dni. Powierz zakodowanie strony
                  profesjonaliście. Zachęcam do skorzystania z mojej
                  profesjonalnej usługi konwersji projektów graficznych do w
                  pełni funkcjonalnej strony internetowej — zaoszczędź czas i
                  skup się na tym, co lubisz, a ja zajmę się twoją stroną.
                </p>
                <h3>Dlaczego wybrać moje usługi?</h3>
                <p>
                  Wysokie noty osiągane przez moje strony w benchmarkach Google
                  PageSpeed, GTmetrix czy Pingdom mogą Cię utwierdzić w
                  przekonaniu, że wybierając moją usługę kodowanie szablonów
                  graficznych, możesz liczyć na produkt z najwyższej półki{" "}
                  <strong>
                    wykonany przy użyciu najnowszych technologi i bibliotek
                  </strong>
                  .
                </p>
                <p>
                  Istnieje wiele agencji, które oferują usługi PSD do HTML, ale
                  większość z nich używa przestarzałych technologii i
                  niechlujnych praktyk kodowania do kodowania Twojej witryny.
                  Jestem inny, mój{" "}
                  <strong>
                    kod przygotowuję z myślą o kliencie i jego potrzebach
                  </strong>
                  . Posiadam szeroką wiedzę z zakresu HTML i CSS oraz
                  frameworków takich jak Bootstrap czy Tailwind. Co więcej, wiem
                  jak dostosować kod strony do potrzeb konkretnego projektu, aby
                  klient otrzymał dokładnie to, czego potrzebuje.
                </p>
                <p>Wspieram następujące formaty plików graficznych:</p>
                <ul>
                  <li>
                    <strong>psd</strong> — pliki graficzne Adobe Photoshop,
                  </li>
                  <li>
                    <strong>figma</strong> — pliki graficzne Figma.
                  </li>
                </ul>
                <p>
                  Moje finalne produkty są łatwe do wdrożenia. Modułowość
                  poszczególnych elementów, szczegółowe opisanie plików
                  źródłowych znacznie przyspieszy pełne wdrożenie twojej strony
                  internetowej oraz jej późniejsze utrzymanie.
                </p>
              </>
            }
          />
        </Section>
        <ContentWithImage
          subtitle="Nowoczesne technologie"
          title="Technologie oraz narzędzia, z których korzystam"
          content={
            <>
              <p>
                Mając do dyspozycji projekt graficzny oraz dobrze przygotowaną
                specyfikację, wykorzystuje najnowsze,&nbsp;
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
          bgColor="bg-white"
        />
        <Process
          bgColor="bg-whiteGreen"
          header={{
            title: "Jak przebiega proces realizacji zlecenia?",
            subtitle: "Realizacja zlecenia",
            description: (
              <p>
                Projektowanie graficzne składa się przede wszystkim z pracy
                kreatywnej. Warto jednak uporządkować i usystematyzować pewne
                procesy, aby wiedzieć, na jakim etapie realizacji jest nasze
                dzieło.
              </p>
            ),
          }}
          steps={[
            {
              title: "Omówienie projektu do zakodowania",
              content: (
                <p>
                  Początkowo najważniejsze jest dobre zrozumienie potrzeb i
                  oczekiwań klienta. Na tym etapie omawiamy projekt graficzny
                  oraz ustalamy szczegóły, jak ma wyglądać finalna zakodowana
                  strona — upewniam się, że wszystkie szczegóły zostały
                  dopracowane przez przystąpieniem do kodowania.
                </p>
              ),
            },
            {
              title: "Kodowanie",
              content: (
                <p>
                  Mając dokładną specyfikację projektu, dokładnie krok po kroku
                  konwertuję projekt graficzny, pamiętając, aby szczegółowo
                  opisywać tworzony kod. Takie podejście gwarantuje realizacje
                  zleconych prac w sposób systematyczny i uporządkowany oraz co
                  ważne terminowo. Finalny kod sam się tłumaczy, pozwalając na
                  przyjemne i nieproblematyczne wdrożenie i zarządzanie w
                  późniejszym czasie.
                </p>
              ),
            },
            {
              title: "Testowanie i optymalizacja",
              content: (
                <p>
                  Po zakończeniu prac związanych z kodowaniem strony przechodzę
                  do etapu testowania oraz końcowych optymalizacji. Strona
                  internetowa testowana jest pod kątem szybkości, wydajności,
                  poprawności zastosowanych znaczników. Prawidłowa prezentacja
                  strony we wszystkich popularnych przeglądarkach jest brana na
                  poważnie. Pocięte grafiki konwertowane są do nowoczesnych
                  formatów oferujących wysoką wydajność, nie pomniejszając przy
                  tym ich jakości.
                </p>
              ),
            },
            {
              title: "Dostarczenie finalnych plików",
              content: (
                <p>
                  Dzięki metodycznemu podejściu do realizacji zleceń oraz
                  dokładnej specyfikacji skomplikowany proces konwersji projektu
                  graficznego do statycznej strony internetowej w HTML musi
                  okazać się sukcesem! Teraz możesz cieszyć się doskonale
                  zakodowaną stroną internetową, mając wszystkie potrzebne pliki
                  HTML, CSS oraz grafiki.
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
          ]}
        />
      </Main>
    </>
  );
};

export default Offer;

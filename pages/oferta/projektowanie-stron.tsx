import Head from "../../components/Head";
import Hero from "../../components/Hero";
import Main from "../../components/Main";
import MainHeader from "../../components/MainHeader";
import Banner from "../../components/Banner";
import ContentWithImage from "../../components/ContentWithImage";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Process from "../../components/Process";
import Content from "../../components/Content";
import Link from "../../components/Link";

import heroImage from "../../public/images/design.webp";
import logosImage from "../../public/images/logos-graphics.webp";

import addressSeparator from "../../data/seo/addressSeparator";
import siteName from "../../data/seo/siteName";

const Offer = () => {
  return (
    <>
      <Head
        title={`Projektowanie stron ${addressSeparator} ${siteName}`}
        description={`Projektowanie stron internetowych z intuicyjnym interfejsem użytkownika.`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Projektowanie stron internetowych 💎"
          description={
            <>
              <p>
                Zaprojektuję dla Ciebie stronę internetową z intuicyjnym i
                prostym w obsłudze interfejsem, dostarczając indywidualną
                makietę Twojej witryny.
              </p>
              <p>
                Pomagam dostosować twoją stronę do panujących trendów w
                projektowaniu stron internetowych.
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
        <Section bgColor="bg-whiteGreen" customClasses="dark:bg-zinc-700">
          <Header
            subtitle="Projektowanie graficzne"
            title="Zaprojektuję dla Ciebie piekną, nowoczesną stronę internetową."
          />
          <Content
            columns={2}
            withSpaceAbove
            content={
              <>
                <h3>
                  Dlaczego dobry interfejs użytkownika oraz wrażenia z
                  użytkowania są tak ważne?
                </h3>
                <p>
                  Jeśli chcesz zdobyć nowych użytkowników oraz zachęcić obecnych
                  do korzystania z twojej strony internetowej musisz posiadać
                  dopracowany interfejs użytkownika.
                </p>
                <p>
                  Dobrze zaprojektowana strona internetowa nie tylko przyciąga
                  swym wyglądem, lecz pomaga użytkownikom{" "}
                  <strong>
                    w pełni korzystać z oferowanych funkcjonalności
                  </strong>
                  , które posiada. Odpowiedni układ i wyeksponowanie treści
                  sprawia, że odwiedzający Twoją stronę{" "}
                  <strong>
                    chętniej ją odwiedzają i mają o niej pozytywne zdanie
                  </strong>
                  .
                </p>
                <p>
                  Poprawne funkcjonowanie serwisu internetowego nie jest i nie
                  powinno zależeć od wyglądu jej interfejsu. Warto jednak
                  poważnie podejść do projektu graficznego strony internetowej.
                  Istnieją bardzo konkurencyjne branże, gdzie{" "}
                  <strong>o sukcesie mogą decydować szczegóły</strong>, dlatego
                  warto wyróżnić się z tłumu, oferując jak najlepsze wrażenia z
                  korzystania z witryny internetowej.
                </p>
                <p>
                  Dobry interfejs użytkownika powinien uwzgledniać miedzy
                  innymi:
                </p>
                <ul>
                  <li>
                    właściwie dobraną, czytelną czcionkę, aby zapoznawanie się z
                    treścią strony było przyjemnie,
                  </li>
                  <li>
                    oferować unikalny design, nie zmieniając przy tym
                    przyzwyczajeń użytkowników internetu. Oznacza to, że
                    elementy takie jak nawigacja czy guziki powinny znajdować
                    się w intuicyjnych miejscach. Frustracja wynikająca z
                    poszukiwania np. elementów nawigacyjnych to coś, czego
                    chcemy uniknąć,
                  </li>
                  <li>
                    design strony powinien podkreślać oraz uwydatniać jej treść,
                    nie dominować i odwracać uwagę.
                  </li>
                </ul>
                <p>
                  Powyższe punkty to tylko niektóre z bardzo istotnych aspektów,
                  które należy brać pod uwagę przy projektowaniu interfesu
                  użytkownika witryny internetowej.
                </p>
                <p>
                  Posiadam kilu letnie doświadczenie oraz wiedzę z zakresu
                  projektowania stron internetowych. Chętnie pomogę Ci zadbać o
                  szczegóły twojej strony internetowej.
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
                Chcąc uzyskać jak najlepszy rezultat działań związanych z
                projektowaniem stron internetowych, konieczne jest korzystanie z
                <strong> nowoczesnych narzędzi</strong>.
              </p>
              <p>
                Do przygotowania Twojego indywidualnego oraz dopracowanego
                projektu strony internetowej wykorzystuje zaawansowane
                narzędzie, jakim jest program <strong>Figma</strong>. Pieknie
                wyglądające, dopasowane do tematyki strony, ilustracje czerpię
                ze <strong>sprawdzonych banków fotografii oraz grafik</strong>{" "}
                jak <Link href="https://unsplash.com">Unsplash</Link>,{" "}
                <Link href="https://pixabay.com">Pixabay</Link>. W zależności od
                projektu sam przygotowuje potrzebne materiały. Pomaga mi w tym
                program do obróbki grafiki <strong>Abobe Photoshop</strong>.
              </p>
              <p>
                Inspiracje i pomysły zbieram, wzorując się na najlepszych,
                starając się dostrzec pozytywne trendy kształtujące się w
                branży, aby znaleźć dla nich zastosowanie w moich pracach.
              </p>
            </>
          }
          image={{
            src: logosImage,
            alt: "loga wykorzystywanych przez mnie technologii",
          }}
          reverse
          bgColor="bg-white"
          customClasses="dark:bg-zinc-800"
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
              title: "Zapoznanie się z projektem",
              content: (
                <p>
                  Pierwszą sprawą, która trzeba się zająć przed projektowaniem,
                  jest wzajemne zrozumienie Twoich potrzeb i oczekiwań. Wszelkie
                  sporne aspekty projektu powinny być na tym etapie dokładnie
                  omówione, aby finalnie wypracować jasno określony zakres
                  działań pozwalający dostarczyć dokładnie to, czego oczekujesz.
                </p>
              ),
            },
            {
              title: "Produkcja",
              content: (
                <p>
                  Na tym etapie staram się wykorzystać całą moją wiedzę oraz
                  umiejętności, wspomagająć się nowoczesnymi narzędziami oraz
                  profesjonalnymi materiałami, aby dostarczyć niepowtarzalny
                  projekt o doskonałej strukturze i intuicyjnym układzie, który
                  cieszy oko swymi kolorami. Na tym etapie staram się
                  wykorzystać całą moją wiedzę oraz umiejętności, wspomagając
                  się nowoczesnymi narzędziami oraz profesjonalnymi materiałami,
                  aby dostarczyć niepowtarzalny projekt o doskonałej strukturze,
                  intuicyjnym układzie, który cieszy oko swymi kolorami.
                </p>
              ),
            },
            {
              title: "Dostarczenie projektu",
              content: (
                <p>
                  Dostarczam projekt, zgodny z ustaleniami oraz wymaganiami. Po
                  ostatecznej akceptacji rezlizacja projektu Twojej strony
                  internetowej zostaje zakończona.
                </p>
              ),
            },
          ]}
        />
        <Banner
          title="Potrzebujesz niepowtarzalnego, pięknego projektu strony internetowej?"
          description="Chętnie zaprojektuję dla Ciebie Twoją nową stronę internetową."
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

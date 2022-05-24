import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ContentWithImage from "../components/ContentWithImage";
import Section from "../components/Section";
import Header from "../components/Header";

import BoxesList from "../components/BoxesList";

import { offerList } from "../data/content/offerList";
import { servicesList } from "../data/content/servicesList";
import heroImage from "../public/images/hero.webp";

const Home = () => {
  return (
    <>
      <MainHeader>
        <Hero
          title="Projekuję oraz tworzę nowoczesne strony internetowe"
          description={
            <p>
              Zachęcam do zapoznania się z moją ofertą oraz do kontaktu. Zróbmy
              razem coś niesamowitego!
            </p>
          }
          buttons={[
            {
              label: "Zobacz ofertę",
              href: "/oferta",
              customClasses: "bg-green hover:bg-greenHover text-white",
            },
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              customClasses:
                "bg-transparent hover:bg-greenHover text-green hover:text-white border-2 border-green",
            },
          ]}
          image={{
            alt: "zadowoleni klienci przeglądają otrzymany produkt",
            src: heroImage,
          }}
          isHome
          withMarginOnTop
        />
      </MainHeader>
      <Main>
        <Section bgColor="bg-whiteGreen">
          <Header
            subtitle="Oferta"
            title="W czym się specjalizuje?"
            description="Gdyby zachodziła konieczność przeprowadzenia zabiegu na otwartym sercu, powierzyłbyś swoje zdrowie i życie mechanikowi? Między innymi dlatego warto korzystać z usług specjalisty."
            centered
          />
          <BoxesList items={offerList} withMarginTop />
        </Section>
        {servicesList &&
          servicesList.map((item, i) =>
            i % 2 ? (
              <ContentWithImage
                key={item.title}
                {...item}
                bgColor="bg-whiteGreen"
              />
            ) : (
              <ContentWithImage key={item.title} {...item} reverse />
            )
          )}
        <Banner
          title="Zbuduj swoją wysokiej klasy stronę internetową ze mną!"
          description="Chętnie pomogę zrealizować Twój projekt."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              customClasses: "bg-white hover:bg-whiteGreen text-gray-800",
            },
            {
              label: "Poczytaj mój blog",
              href: "/blog",
              customClasses:
                "bg-transparent hover:bg-whiteGreen text-white hover:text-gray-800 border-2 border-white",
            },
          ]}
        />
      </Main>
    </>
  );
};

export default Home;

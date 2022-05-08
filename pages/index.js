import MainHeader from "../components/MainHeader";
import Main from "../components/Main";
import Hero from "../components/Hero";
import OfferList from "../components/OfferList";
import SectionWithHeader from "../components/SectionWithHeader";

import heroImage from "../public/images/hero.webp";
import { offerList } from "../data/content/offerList";

const Home = () => {
  return (
    <>
      <MainHeader>
        <Hero
          title="Projekuję oraz tworzę nowoczesne strony internetowe"
          description="Zachęcam do zapoznania się z moją ofertą oraz do kontaktu. Zróbmy
              razem coś niesamowitego!"
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
        />
      </MainHeader>
      <Main>
        <SectionWithHeader
          bgColor="bg-black"
          subTitle="Oferta"
          title="W czym się specjalizuje?"
          description="Gdyby zachodziła konieczność przeprowadzenia zabiegu na otwartym sercu, powierzyłbyś swoje zdrowie i życie mechanikowi? Między innymi dlatego warto korzystać z usług specjalisty."
        >
          <OfferList items={offerList} withMarginTop />
        </SectionWithHeader>
      </Main>
    </>
  );
};

export default Home;

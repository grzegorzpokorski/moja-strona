import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import heroImage from "./../public/images/hero.webp";

const Home = () => {
  return (
    <>
      <Header>
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
      </Header>
      <main id="tresc" className="mt-[4.375rem] lg:mt-36"></main>
      <Footer />
    </>
  );
};

export default Home;

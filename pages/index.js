import Header from "../components/Header";
import Main from "../components/Main";
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
      <Main>
        <p>home</p>
      </Main>
    </>
  );
};

export default Home;

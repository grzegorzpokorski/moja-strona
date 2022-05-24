import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";

import heroImage from "../public/images/about.png";

const About = () => {
  return (
    <>
      <MainHeader>
        <Hero
          title="Cześć, jestem Grzegorz!"
          description={
            <>
              <p>
                Działam jako freelancer, pomagając tworzyć dobrze wyglądające i
                realizujące cele biznesowe strony internetowe.
              </p>
              <p>
                Moją specjalnością są strony typu wizytówka pozwalające firmom
                przedstawić swoją działalność szerszej grupie odbiorców w
                Internecie. Chętnie pomagam również osoba prowadzącym blogi lub
                chcącym zacząć swoją przygodę z tym związaną, ale potrzebują
                dedykowanego rozwiązania.
              </p>
              <p>
                W wolnej chwili staram się dzielić swoją wiedzą na łamach
                artykułów na moim{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://localhost/www/2022-kwiecien/blog/"
                >
                  blogu
                </a>
                . Jeśli interesuje Cię współpraca lub po prostu chcesz pogadać
                śmiało{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://localhost/www/2022-kwiecien/kontakt/"
                >
                  kontaktuj się ze mną
                </a>
                .
              </p>
            </>
          }
          buttons={[
            {
              label: "Poznaj czym się zajmuje",
              href: "/oferta",
              customClasses: "bg-green hover:bg-greenHover text-white",
            },
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              customClasses:
                "bg-white text-green hover:bg-greenHover hover:text-white border-2 border-green",
            },
          ]}
          image={{
            alt: "człowiek zadowolony z pracy",
            src: heroImage,
          }}
          isHome
          withMarginOnTop
        />
      </MainHeader>
      <Main></Main>
    </>
  );
};

export default About;

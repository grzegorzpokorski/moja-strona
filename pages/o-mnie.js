import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";
import Link from "../components/Link";
import Banner from "../components/Banner";

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
                artykułów na moim <Link href="/blog">blogu</Link>. Jeśli
                interesuje Cię współpraca lub po prostu chcesz pogadać śmiało{" "}
                <Link href="/kontakt">kontaktuj się ze mną</Link>.
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
      <Main>
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

export default About;

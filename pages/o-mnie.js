import MainHeader from "../components/MainHeader";
import Main from "../components/Main";
import Hero from "../components/Hero";
import Link from "../components/Link";

import heroImage from "../public/images/me.png";

const Page = () => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
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
                <Link href="http://localhost/www/2022-kwiecien/blog/">
                  blogu
                </Link>
                . Jeśli interesuje Cię współpraca lub po prostu chcesz pogadać
                śmiało{" "}
                <Link href="http://localhost/www/2022-kwiecien/kontakt/">
                  kontaktuj się ze mną
                </Link>
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
          image={{ src: heroImage, alt: "człowieczek koduje na sofie" }}
        />
      </Main>
    </>
  );
};

export default Page;

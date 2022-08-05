import Head from "../components/Head";
import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";

import heroImage from "../public/images/404.webp";

const NotFound = () => {
  return (
    <>
      <Head
        title={`404 ${addressSeparator} ${siteName}`}
        description={`Strona, której szukasz, nie istnieje (błąd 404)`}
        featuredImage={heroImage.src}
      />
      <MainHeader></MainHeader>
      <Main withMarginOnTop>
        <Hero
          title="Ta przestrzeń jest pusta"
          description={<p>Strona, której szukasz, nie istnieje (błąd 404)</p>}
          buttons={[
            {
              label: "Zabierz mnie na stronę główną",
              href: "/",
            },
          ]}
          image={{
            alt: "Zagubiony człowek czeka przed zanakiem 'stop'",
            src: heroImage,
          }}
          titleAsH1
          withMarginOnTop
        />
      </Main>
    </>
  );
};

export default NotFound;

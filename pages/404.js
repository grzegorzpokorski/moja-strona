import Head from "../components/Head";
import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";

import heroImage from "../public/images/404.png";

const NotFound = () => {
  return (
    <>
      <Head title={`404 ${addressSeparator} ${siteName}`} />
      <MainHeader></MainHeader>
      <Main withMarginOnTop>
        <Hero
          title="Ta przestrzeń jest pusta"
          description={<p>Strona, której szukasz, nie istnieje (błąd 404)</p>}
          buttons={[
            {
              label: "Zabierz mnie na stronę główną",
              href: "/",
              customClasses: "bg-green hover:bg-greenHover text-white",
            },
          ]}
          image={{
            alt: "Zagubiony człowek czeka przed zanakiem 'stop'",
            src: heroImage,
          }}
          titleAsH1
          withMarginOnTop
        />
        {/* <Banner
          title="Niestety coś poszło nie tak"
          description="trona, której szukasz, nie istnieje (błąd 404)"
          buttons={[
            {
              label: "Zabierz mnie na stronę główną",
              href: "/",
              customClasses: "bg-white hover:bg-whiteGreen text-gray-800",
            },
          ]}
        /> */}
      </Main>
    </>
  );
};

export default NotFound;

import MainHeader from "../components/MainHeader";
import Main from "../components/Main";
import Hero from "../components/Hero";
import Banner from "../components/Banner/Banner";
import ContentWithImage from "../components/ContentWithImage/ContentWithImage";
import Section from "../components/Section";
import Header from "../components/Header";
import BoxesList from "../components/BoxesList";
import PostsGrid from "../components/PostsGrid";

import heroImage from "../public/images/hero.webp";
import placeholderImage from "../public/images/people.webp";
import { offerList } from "../data/content/offerList";
import { servicesList } from "../data/content/servicesList";

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
        />
      </MainHeader>
      <Main>
        <Section bgColor="bg-whiteGreen">
          <Header title="Artykuły, ciekawostki z świata stron internetowych i nie tylko" />
          <PostsGrid
            posts={[
              {
                featureImage: {
                  src: placeholderImage,
                  alt: "hello image",
                },
                title: "Czy w dzisiejszych czasach",
                excerpt:
                  "Excerpt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque molestie ligula, quis ultrices mauris vestibulum vel. Maecenas sit amet leo scelerisque, sagittis odio eu, malesuada arcu. ",
                category: "Marketing",
                date: "2022.05.09",
                slug: "czy-warto-prowadzic-bloga",
              },
              {
                featureImage: {
                  src: placeholderImage,
                  alt: "hello image",
                },
                title: "Wspaniały tytuł do testowego posta",
                excerpt:
                  "Excerpt2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque molestie ligula, quis ultrices mauris vestibulum vel. Maecenas sit amet leo scelerisque, sagittis odio eu, malesuada arcu. ",
                category: "Programowanie",
                date: "2022.04.20",
                slug: "test",
              },
            ]}
            withMarginTop
          />
        </Section>
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

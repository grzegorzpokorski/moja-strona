import Head from "../components/Head";
import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Section from "../components/Section";
import Header from "../components/Header";
import BoxesList from "../components/BoxesList";
import PostsExcerpt from "../components/PostsExcerpt";
import Services from "../components/Services";

import { offerList } from "../data/content/offerList";
import { servicesList } from "../data/content/servicesList";
import heroImage from "../public/images/hero.webp";

import siteName from "../data/seo/siteName";
import addressSeparator from "../data/seo/addressSeparator";
import slogan from "../data/seo/slogan";

import { getPublishedPostsOrderByDate } from "../provider/posts";

const Home = ({ newestPosts }) => {
  return (
    <>
      <Head
        title={`${siteName} ${addressSeparator} ${slogan}`}
        description={`Tworzę nowoczesne strony internetowe oraz staram się dzielić zdobywaną wiedzą z innymi na blogu.`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Projekuję oraz tworzę nowoczesne strony internetowe"
          description={
            <p>
              Zaistniej w internecie i zrealizuj swoje cele z
              <strong>ultra szybką</strong> 🚀 stroną internetową osiągającą
              <strong>najwyższe noty</strong> 🥇 w Google PageSpeed benchmark.
            </p>
          }
          buttons={[
            {
              label: "Zobacz ofertę",
              href: "/oferta",
            },
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              style: "transparentGreen",
            },
          ]}
          image={{
            alt: "zadowoleni klienci przeglądają otrzymany produkt",
            src: heroImage,
          }}
          withMarginOnTop
        />
      </MainHeader>
      <Main>
        <Section bgColor="bg-whiteGreen">
          <Header
            subtitle="Oferta"
            title="W czym mogę Ci pomóc?"
            description="Potrzebujesz nowoczesnej, ultra szybkiej strony strony internetowej aby zaistnieć w internecie? A może gotowy projekt graficzny czeka na zakodowanie? Oferuję profesjonalne usługi, które pomogą Ci wkroczyć na szerokie wody internetu."
            centered
          />
          <BoxesList items={offerList} withMarginTop />
        </Section>
        <Services services={servicesList} />
        <PostsExcerpt
          title="Najnowsze aktykuły na blogu"
          subtitle="blog"
          posts={newestPosts}
          button={{ label: "Zobacz wszystkie wpisy", href: "/blog" }}
        />
        <Banner
          title="Zbuduj swoją wysokiej klasy stronę internetową ze mną!"
          description="Chętnie pomogę zrealizować Twój projekt."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              style: "white",
            },
            {
              label: "Poczytaj mój blog",
              href: "/blog",
              style: "transparentWhite",
            },
          ]}
        />
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getPublishedPostsOrderByDate();
  const newestPosts = posts.slice(0, 3);

  return {
    props: {
      newestPosts: newestPosts,
    },
  };
};

export default Home;

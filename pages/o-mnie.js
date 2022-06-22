import Head from "../components/Head";
import Main from "../components/Main";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";
import Link from "../components/Link";
import Banner from "../components/Banner";
import PostsExcerpt from "../components/PostsExcerpt";

import heroImage from "../public/images/about.png";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";
import { getPublishedPostsOrderByDate } from "../provider/posts";

const About = ({ newestPosts }) => {
  return (
    <>
      <Head
        title={`O mnie ${addressSeparator} ${siteName}`}
        description={`Działam jako freelancer, pomagając tworzyć dobrze wyglądające i realizujące cele biznesowe strony internetowe. Poznaj mnie lepiej!`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Cześć, jestem Grzegorz 👋"
          description={
            <>
              <p>
                Działam jako freelancer, pomagając tworzyć dobrze wyglądające i
                realizujące cele biznesowe strony internetowe.
              </p>
              <p>
                W wolnej chwili staram się dzielić swoją wiedzą na łamach
                artykułów na moim <Link href="/blog">blogu</Link>.
              </p>
              <p>
                Jeśli interesuje Cię współpraca lub po prostu chcesz zadać
                pytanie śmiało <Link href="/kontakt">kontaktuj się ze mną</Link>
                .
              </p>
            </>
          }
          buttons={[
            {
              label: "Poznaj czym się zajmuje",
              href: "/oferta",
            },
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              style: "transparentGreen",
            },
          ]}
          image={{
            alt: "człowiek zadowolony z pracy",
            src: heroImage,
          }}
          titleAsH1
          withMarginOnTop
        />
      </MainHeader>
      <Main>
        <PostsExcerpt
          title="Najnowsze aktykuły na blogu 🔥"
          subtitle="blog"
          posts={newestPosts}
          button={{ label: "Zobacz wszystkie wpisy", href: "/blog" }}
        />
        <Banner
          title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
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

export default About;

import { Head } from "../components/Head/Head";
import { Main } from "../components/Main/Main";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { Hero } from "../components/Hero/Hero";
import { Link } from "../components/Link/Link";
import { Banner } from "../components/Banner/Banner";
import { PostsExcerpt } from "../components/PostsExcerpt/PostsExcerpt";

import heroImage from "../public/images/about.png";

import addressSeparator from "../data/seo/addressSeparator";
import siteName from "../data/seo/siteName";
import { getPublishedPosts, PostWithRawSource, sortPostsByPublishedDate } from "../utils/posts";

type AboutProps = {
  newestPosts: PostWithRawSource[];
};

const About = ({ newestPosts }: AboutProps) => {
  return (
    <>
      <Head
        title={`O mnie ${addressSeparator} ${siteName}`}
        description={`Działam jako freelancer, pomagając tworzyć dobrze wyglądające i realizujące cele biznesowe strony internetowe. Poznaj mnie lepiej!`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Cześć, jestem Grzegorz!"
          description={
            <>
              <p>
                Jak można się domyśleć jestem frontend developerem. Uwielbiam tworzyć dobrze
                wyglądające oraz realizujące cele biznesowe strony internetowe. Dobra strona to
                również ta strona, która jest wydajna oraz dostępna. Dlatego nieustannie uczę sie
                najnowszych technologi takich jak React, czy Next.js, które pozwalają na osięgnięcie
                niesamowitych wyników.
              </p>
              <p>
                W wolnej chwili staram się dzielić zdobytą wiedzą oraz przemyśleniami na łamach
                artykułów na moim <Link href="/blog">blogu</Link>, do którego odwiedzenia gorąco Cię
                zachęcam 🙂
              </p>
              <p>
                Jeśli interesuje Cię współpraca lub po prostu chcesz porozmawiać na różne tematy,
                nie tylko programistyczne, śmiało <Link href="/kontakt">kontaktuj się ze mną</Link>!
              </p>
              <p>PS. Poniżej znajdziesz linki, gdzie możesz mnie znaleźć 👇</p>
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
              label: "Odwiedź mój blog",
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
  const posts = await getPublishedPosts();
  const sortedPosts = sortPostsByPublishedDate(posts);
  const newestPosts = sortedPosts.slice(0, 3);

  return {
    props: {
      newestPosts: newestPosts,
    },
  };
};

export default About;

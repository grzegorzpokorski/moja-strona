import { GetStaticProps } from "next";
import { Head } from "../components/Head/Head";
import { Main } from "../components/Main/Main";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { Hero } from "../components/Hero/Hero";
import { Banner } from "../components/Banner/Banner";
import { PostsExcerpt } from "../components/PostsExcerpt/PostsExcerpt";
import { Link } from "../components/Link/Link";
import heroImage from "../public/images/hero.webp";
import slogan from "../data/seo/slogan";

import { getPublishedPosts, PostWithRawSource, sortPostsByPublishedDate } from "../utils/posts";

type HomeProps = {
  newestPosts: PostWithRawSource[];
};

const Home = ({ newestPosts }: HomeProps) => {
  return (
    <>
      <Head
        title={`${slogan}`}
        description={`Tworzę nowoczesne strony internetowe oraz staram się dzielić zdobywaną wiedzą z innymi na blogu.`}
        contentType="website"
      />
      <MainHeader>
        <Hero
          title="Cześć, jestem Grzegorz!"
          description={
            <p>
              Jestem Frontend Developerem z wyboru oraz pasji. Nieustannie rozwijam umiejętności
              programistyczne, aby dostarczać nowoczesne oraz wydajne strony internetowe. Zdobywaną
              wiedzą oraz przemyśleniami staram się dzielić z innymi tutaj na moim{" "}
              <Link href="/blog">blogu</Link>.
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
        <PostsExcerpt
          title="Najnowsze aktykuły na blogu 🔥"
          subtitle="blog"
          posts={newestPosts}
          button={{ label: "Zobacz wszystkie wpisy", href: "/blog" }}
        />
        {/* <Section bgColor="bg-whiteGreen" id="oferta">
          <Header
            subtitle="Oferta"
            title="W czym mogę Ci pomóc?"
            description={
              <p>
                Potrzebujesz nowoczesnej, ultra szybkiej strony strony internetowej aby zaistnieć w
                internecie? A może gotowy projekt graficzny czeka na zakodowanie? Oferuję{" "}
                <Link href={`/oferta`}>profesjonalne usługi</Link>, które pomogą Ci wkroczyć na
                szerokie wody internetu.
              </p>
            }
            centered
          />
          <BoxesList items={offerList} withMarginOnTop />
        </Section> */}
        {/* <Services services={servicesList} /> */}
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
              label: "Zobacz ofertę",
              href: "/oferta",
              style: "transparentWhite",
            },
          ]}
        />
      </Main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPublishedPosts();
  const sortedPosts = sortPostsByPublishedDate(posts);
  const newestPosts = sortedPosts.slice(0, 3);

  return {
    props: {
      newestPosts: newestPosts,
    },
  };
};

export default Home;

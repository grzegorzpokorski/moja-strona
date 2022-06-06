import Head from "../../components/Head";
import MainHeader from "../../components/MainHeader";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Main from "../../components/Main";
import PostsList from "../../components/PostsList";
import Banner from "../../components/Banner";
import { getPublishedPostsOrderByDate } from "../../provider/posts";
import addressSeparator from "../../data/seo/addressSeparator";
import siteName from "../../data/seo/siteName";

const Blog = ({ posts }) => {
  return (
    <>
      <Head
        title={`Blog ${addressSeparator} ${siteName}`}
        description={`Wszystkie artykuły, które pojawiły się na blogu. Przeważa tematyka związana z tworzeniem stron internetowych, ale znajdzie się coś również z mniej technicznych zagadnień.`}
        contentType="website"
      />
      <MainHeader />
      <Main>
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <Header
            title="Artykuły, ciekawostki z świata stron internetowych i nie tylko"
            titleAsH1
          />
          <PostsList posts={posts} withMarginOnTop />
        </Section>
        <Banner
          title="Zbuduj swoją wysokiej klasy stronę internetową ze mną!"
          description="Chętnie pomogę zrealizować Twój projekt i porzegonić konkurencję."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              customClasses: "bg-white hover:bg-whiteGreen text-gray-800",
            },
          ]}
        />
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getPublishedPostsOrderByDate();

  return {
    props: {
      posts: posts,
    },
  };
};

export default Blog;

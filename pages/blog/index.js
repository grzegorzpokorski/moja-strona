import Head from "../../components/Head";
import MainHeader from "../../components/MainHeader";
import Section from "../../components/Section";
import HeaderWithDropdown from "../../components/HeaderWithDropdown";
import Main from "../../components/Main";
import PostsList from "../../components/PostsList";
import Banner from "../../components/Banner";
import {
  getCategories,
  getPublishedPostsOrderByDate,
} from "../../provider/posts";
import addressSeparator from "../../data/seo/addressSeparator";
import siteName from "../../data/seo/siteName";

const Blog = ({ posts, categories }) => {
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
          <HeaderWithDropdown
            title="Artykuły, ciekawostki z świata stron internetowych i nie tylko 🔥"
            description={
              <p>
                Wszystkie artykuły, które pojawiły się na blogu. Przeważa
                tematyka związana z tworzeniem stron internetowych, ale znajdzie
                się coś również z mniej technicznych zagadnień.
              </p>
            }
            titleAsH1
            categories={categories}
            initialDropdownValue="Kategorie"
          />
          <PostsList posts={posts} withMarginOnTop />
        </Section>
        <Banner
          title="Zbuduj swoją ultra szybką stronę internetową ze mną!"
          description="Chętnie pomogę zrealizować Twój projekt."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              style: "white",
            },
          ]}
        />
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getPublishedPostsOrderByDate();
  const categories = getCategories();

  return {
    props: {
      posts: posts,
      categories: categories,
    },
  };
};

export default Blog;

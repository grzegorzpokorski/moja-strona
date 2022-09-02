import Head from "../../components/Head";
import MainHeader from "../../components/MainHeader";
import Section from "../../components/Section";
import HeaderWithDropdown from "../../components/HeaderWithDropdown";
import Main from "../../components/Main";
import PostsList from "../../components/PostsList";
import Banner from "../../components/Banner";
import { getCategories, getPublishedPosts, PostWithRawSource, sortPostsByPublishedDate } from "../../utils/posts";
import addressSeparator from "../../data/seo/addressSeparator";
import siteName from "../../data/seo/siteName";
import Header from "../../components/Header";

type BlogProps = {
  posts: PostWithRawSource[];
  categories: string[];
};

const Blog = ({ posts, categories }: BlogProps) => {
  return (
    <>
      <Head
        title={`Blog ${addressSeparator} ${siteName}`}
        description={`Wszystkie artykuły, które pojawiły się na blogu. Przeważa tematyka związana z tworzeniem stron internetowych, ale znajdzie się coś również z mniej technicznych zagadnień.`}
        contentType="website"
      />
      <MainHeader>
        <h1 className="sr-only">Blog</h1>
      </MainHeader>
      <Main>
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <HeaderWithDropdown
            title="Artykuły, ciekawostki z świata stron internetowych i nie tylko 🔥"
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
  const posts = await getPublishedPosts();
  const categories = await getCategories();

  return {
    props: {
      posts: sortPostsByPublishedDate(posts),
      categories: categories,
    },
  };
};

export default Blog;

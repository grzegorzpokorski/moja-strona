import Head from "../../../components/Head";
import MainHeader from "../../../components/MainHeader";
import Section from "../../../components/Section";
import HeaderWithDropdown from "../../../components/HeaderWithDropdown";
import Main from "../../../components/Main";
import PostsList from "../../../components/PostsList";
import Banner from "../../../components/Banner";
import {
  getPublishedPostsOrderByDate,
  getCategories,
} from "../../../provider/posts";
import siteName from "./../../../data/seo/siteName";
import addressSeparator from "../../../data/seo/addressSeparator";

const Blog = ({ posts, slug, categories }) => {
  return (
    <>
      <Head
        title={`${slug} ${addressSeparator} ${siteName}`}
        description={`Wszytkie artykuły, które pojawiły się na blogu w ramach kategorii "${slug.toLowerCase()}".`}
        contentType="website"
      />
      <MainHeader />
      <Main>
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <HeaderWithDropdown
            title={`Kategoria: ${slug}`}
            titleAsH1
            categories={categories}
            initialDropdownValue={slug}
          />
          <PostsList posts={posts} withMarginOnTop />
        </Section>
        <Banner
          title="Zbuduj swoją wysokiej klasy stronę internetową ze mną!"
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

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getPublishedPostsOrderByDate().filter(
    (post) => post.frontmatter.category == slug
  );
  const categories = getCategories();

  return {
    props: {
      posts: posts,
      categories: categories,
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const categories = getCategories();
  const paths = categories.map((cat) => ({ params: { slug: cat } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default Blog;

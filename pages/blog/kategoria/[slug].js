import Head from "../../../components/Head";
import MainHeader from "../../../components/MainHeader";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import Main from "../../../components/Main";
import PostsList from "../../../components/PostsList/PostsList";
import {
  getPublishedPostsOrderByDate,
  getCategories,
} from "../../../provider/posts";
import siteName from "./../../../data/seo/siteName";
import addressSeparator from "../../../data/seo/addressSeparator";

const Blog = ({ posts, slug }) => {
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
          <Header title={`Kategoria: ${slug}`} titleAsH1 />
          <PostsList posts={posts} withMarginOnTop />
        </Section>
      </Main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getPublishedPostsOrderByDate().filter(
    (post) => post.frontmatter.category == slug
  );

  return {
    props: {
      posts: posts,
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

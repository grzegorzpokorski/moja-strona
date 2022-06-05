import MainHeader from "../../../components/MainHeader";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import Main from "../../../components/Main";
import PostsList from "../../../components/PostsList/PostsList";
import { getAllPosts, getCategories } from "../../../provider/posts";

const Blog = ({ posts, slug }) => {
  return (
    <>
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
  const posts = getAllPosts().filter(
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

  console.log(categories.map((cat) => ({ params: { slug: cat } })));

  return {
    paths: categories.map((cat) => ({ params: { slug: cat } })),
    fallback: false,
  };
};

export default Blog;

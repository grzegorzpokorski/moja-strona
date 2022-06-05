import MainHeader from "../../../components/MainHeader";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import Main from "../../../components/Main";
import PostsList from "../../../components/PostsList/PostsList";
import { getAllPosts, getTags } from "../../../provider/posts";

const Blog = ({ posts, slug }) => {
  return (
    <>
      <MainHeader />
      <Main>
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <Header title={`Tag: ${slug}`} titleAsH1 />
          <PostsList posts={posts} withMarginOnTop />
        </Section>
      </Main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getAllPosts().filter((post) =>
    post.frontmatter.tags.includes(slug)
  );

  return {
    props: {
      posts: posts,
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const tags = getTags();

  console.log(tags.map((tag) => ({ params: { slug: tag } })));

  return {
    paths: tags.map((tag) => ({ params: { slug: tag } })),
    fallback: false,
  };
};

export default Blog;

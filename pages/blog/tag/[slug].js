import MainHeader from "../../../components/MainHeader";
import Main from "../../../components/Main";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import PostsGrid from "../../../components/PostsGrid";
import { getPosts } from "../../../provider/posts";

const Tag = ({ posts, slug }) => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <Section bgColor="bg-whiteGreen">
          <Header title={`Wpisy z tagiem: ${slug}`} titleAsH1 />
          <PostsGrid posts={posts} withMarginTop />
        </Section>
      </Main>
    </>
  );
};

export default Tag;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      posts,
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};

import { useRouter } from "next/router";
import MainHeader from "./../../components/MainHeader";
import Main from "./../../components/Main";

import { getPostBySlug, getSlugs } from "../../provider/posts";

const Blog = ({ post }) => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <p>{post.meta.title}</p>
      </Main>
    </>
  );
};

export default Blog;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta } = getPostBySlug(slug);

  return {
    props: {
      post: { content, meta },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

import { serialize } from "next-mdx-remote/serialize";

import MainHeader from "./../../components/MainHeader";
import Main from "./../../components/Main";
import Post from "./../../components/Post";

import { getPostBySlug, getSlugs } from "../../provider/posts";

const Blog = ({ post }) => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <Post {...post} />
      </Main>
    </>
  );
};

export default Blog;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { content, meta, featuredImage } = getPostBySlug(slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      post: { mdxSource, meta, featuredImage },
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

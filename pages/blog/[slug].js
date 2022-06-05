import MainHeader from "../../components/MainHeader";
import Main from "../../components/Main";
import Post from "../../components/Post";
import Head from "../../components/Head";

import { siteName } from "./../../data/seo/siteName";

import { getPostBySlug, getPostsPaths } from "../../provider/posts";
import { serialize } from "next-mdx-remote/serialize";

const BlogPost = ({ post }) => {
  return (
    <>
      <Head
        title={`${post.frontmatter.title} | ${siteName}`}
        description={post.frontmatter.excerpt}
      />
      <MainHeader></MainHeader>
      <Main withMarginOnTop>
        <Post post={post} />
      </Main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { frontmatter, source } = getPostBySlug(slug);
  const mdxSource = await serialize(source);

  return {
    props: {
      post: { frontmatter, source: mdxSource },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostsPaths();
  return {
    paths: paths,
    fallback: false,
  };
};

export default BlogPost;

import MainHeader from "../../components/MainHeader";
import Main from "../../components/Main";
import Post from "../../components/Post";
import Head from "../../components/Head";
import Banner from "../../components/Banner";

import {
  getPostBySlug,
  getPostsPaths,
  getPublishedPostsOrderByDate,
  PostWithCompiledSource,
  PostWithRawSource,
} from "../../provider/posts";
import { serialize } from "next-mdx-remote/serialize";

import siteName from "./../../data/seo/siteName";
import addressSeparator from "../../data/seo/addressSeparator";
import PostsExcerpt from "../../components/PostsExcerpt";

type BlogPostProps = {
  post: PostWithCompiledSource;
  relatedPosts: PostWithRawSource[];
};

const BlogPost = ({ post, relatedPosts }: BlogPostProps) => {
  return (
    <>
      <Head
        title={`${post.frontmatter.title} ${addressSeparator} ${siteName}`}
        description={post.frontmatter.excerpt}
        contentType="article"
        publicationDate={post.frontmatter.date}
        featuredImage={post.frontmatter.featuredImage}
      />
      <MainHeader></MainHeader>
      <Main withMarginOnTop>
        <Post post={post} />
        {relatedPosts.length > 0 && (
          <PostsExcerpt
            subtitle="Posty o podobnej tematyce"
            title="Mogą Cię zainteresować:"
            posts={relatedPosts}
          />
        )}
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

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { frontmatter, source } = getPostBySlug(slug);
  const mdxSource = await serialize(source);
  const relatedPosts = getPublishedPostsOrderByDate().filter(
    (post) =>
      post.frontmatter.category === frontmatter.category &&
      post.frontmatter.slug != slug,
  );

  return {
    props: {
      post: { frontmatter, source: mdxSource },
      relatedPosts: relatedPosts,
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

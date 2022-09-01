import MainHeader from "../../components/MainHeader";
import Main from "../../components/Main";
import Post from "../../components/Post";
import Head from "../../components/Head";
import Banner from "../../components/Banner";

import {
  PostWithCompiledSource,
  PostWithRawSource,
  getSlugsOfPublishedPosts,
  getPostBySlug,
  sortPostsByPublishedDate,
  getRelatedPosts,
} from "../../utils/posts";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "@mapbox/rehype-prism";

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
          <PostsExcerpt subtitle="Posty o podobnej tematyce" title="Mogą Cię zainteresować:" posts={relatedPosts} />
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

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { frontmatter, source } = await getPostBySlug(slug);
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });

  const relatedPosts = await getRelatedPosts(slug, frontmatter.category, frontmatter.tags);

  return {
    props: {
      post: { frontmatter, source: mdxSource },
      relatedPosts: relatedPosts,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getSlugsOfPublishedPosts();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default BlogPost;

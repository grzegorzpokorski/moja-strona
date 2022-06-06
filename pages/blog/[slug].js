import MainHeader from "../../components/MainHeader";
import Main from "../../components/Main";
import Post from "../../components/Post";
import Head from "../../components/Head";
import Banner from "../../components/Banner";

import {
  getPostBySlug,
  getPostsPaths,
  getPublishedPostsOrderByDate,
} from "../../provider/posts";
import { serialize } from "next-mdx-remote/serialize";

import siteName from "./../../data/seo/siteName";
import addressSeparator from "../../data/seo/addressSeparator";
import PostsExcerpt from "../../components/PostsExcerpt";

const BlogPost = ({ post, relatedPosts }) => {
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
          title="Zbuduj swoją wysokiej klasy stronę internetową ze mną!"
          description="Chętnie pomogę zrealizować Twój projekt i porzegonić konkurencję."
          buttons={[
            {
              label: "Skontaktuj się ze mną",
              href: "/kontakt",
              customClasses: "bg-white hover:bg-whiteGreen text-gray-800",
            },
          ]}
        />
      </Main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { frontmatter, source } = getPostBySlug(slug);
  const mdxSource = await serialize(source);
  const relatedPosts = getPublishedPostsOrderByDate().filter(
    (post) =>
      post.frontmatter.category === frontmatter.category &&
      post.frontmatter.slug != slug
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

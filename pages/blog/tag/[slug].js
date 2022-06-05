import Head from "../../../components/Head";
import MainHeader from "../../../components/MainHeader";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import Main from "../../../components/Main";
import PostsList from "../../../components/PostsList/PostsList";
import { getPublishedPostsOrderByDate, getTags } from "../../../provider/posts";

import addressSeparator from "../../../data/seo/addressSeparator";
import siteName from "../../../data/seo/siteName";

const Blog = ({ posts, slug }) => {
  return (
    <>
      <Head
        title={`${slug} ${addressSeparator} ${siteName}`}
        description={`Wszytkie artykuły, które pojawiły się na blogu w ramach tagu "${slug.toLowerCase()}".`}
        contentType="website"
      />
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
  const posts = getPublishedPostsOrderByDate().filter((post) =>
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
  const paths = tags.map((tag) => ({ params: { slug: tag } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default Blog;

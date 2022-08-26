import Head from "../../../components/Head";
import MainHeader from "../../../components/MainHeader";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import Main from "../../../components/Main";
import PostsList from "../../../components/PostsList";
import Banner from "../../../components/Banner";
import { getPublishedPosts, getTags, PostWithRawSource, sortPostsByPublishedDate } from "../../../utils/posts";
import slugify from "slugify";

import addressSeparator from "../../../data/seo/addressSeparator";
import siteName from "../../../data/seo/siteName";

type BlogProps = {
  posts: PostWithRawSource[];
  fullTagNameToPass: string;
};

const Blog = ({ posts, fullTagNameToPass }: BlogProps) => {
  return (
    <>
      <Head
        title={`${fullTagNameToPass} ${addressSeparator} ${siteName}`}
        description={`Wszytkie artykuły, które pojawiły się na blogu w ramach tagu "${fullTagNameToPass}".`}
        contentType="website"
      />
      <MainHeader />
      <Main>
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <Header title={`Tag: ${fullTagNameToPass}`} titleAsH1 />
          <PostsList posts={posts} withMarginOnTop />
        </Section>
        <Banner
          title="Zbuduj swoją wysokiej klasy stronę internetową ze mną!"
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
  const posts = (await getPublishedPosts()).filter((post) =>
    post.frontmatter.tags.map((tag) => slugify(tag, { replacement: "-", lower: true })).includes(slug),
  );
  const tags = await getTags();

  const fullTagNameToPass = tags.filter((tag) => slugify(tag, { replacement: "-", lower: true }) === slug)[0];

  return {
    props: {
      posts: sortPostsByPublishedDate(posts),
      fullTagNameToPass,
    },
  };
};

export const getStaticPaths = async () => {
  const tags = await getTags();
  const paths = tags.map((tag) => ({
    params: { slug: slugify(tag, { replacement: "-", lower: true }) },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default Blog;

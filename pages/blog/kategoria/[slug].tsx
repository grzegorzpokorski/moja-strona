import Head from "../../../components/Head";
import MainHeader from "../../../components/MainHeader";
import Section from "../../../components/Section";
import HeaderWithDropdown from "../../../components/HeaderWithDropdown";
import Main from "../../../components/Main";
import PostsList from "../../../components/PostsList";
import Banner from "../../../components/Banner";
import {
  getPublishedPostsOrderByDate,
  getCategories,
  PostWithRawSource,
} from "../../../provider/posts";
import siteName from "./../../../data/seo/siteName";
import addressSeparator from "../../../data/seo/addressSeparator";
import slugify from "slugify";

type BlogProps = {
  posts: PostWithRawSource[];
  fullCategoryNameToPass: string;
  categories: string[];
};

const Blog = ({ posts, fullCategoryNameToPass, categories }: BlogProps) => {
  return (
    <>
      <Head
        title={`${fullCategoryNameToPass} ${addressSeparator} ${siteName}`}
        description={`Wszytkie artykuły, które pojawiły się na blogu w ramach kategorii "${fullCategoryNameToPass}".`}
        contentType="website"
      />
      <MainHeader />
      <Main>
        <Section
          bgColor="bg-whiteGreen"
          withMarginOnTop
          customClasses="dark:bg-zinc-900"
        >
          <HeaderWithDropdown
            title={`Kategoria: ${fullCategoryNameToPass}`}
            titleAsH1
            categories={categories}
            initialDropdownValue={fullCategoryNameToPass}
          />
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

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const posts = getPublishedPostsOrderByDate().filter(
    (post) =>
      slugify(post.frontmatter.category, {
        replacement: "-",
        lower: true,
      }) == slug,
  );
  const categories = getCategories();

  const fullCategoryNameToPass = categories.filter(
    (cat) => slugify(cat, { replacement: "-", lower: true }) === slug,
  )[0];

  return {
    props: {
      posts,
      categories,
      fullCategoryNameToPass,
    },
  };
};

export const getStaticPaths = async () => {
  const categories = getCategories();
  const paths = categories.map((cat) => ({
    params: { slug: slugify(cat, { replacement: "-", lower: true }) },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default Blog;

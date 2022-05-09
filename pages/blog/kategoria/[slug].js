import { useRouter } from "next/router";
import MainHeader from "../../../components/MainHeader";
import Main from "../../../components/Main";
import Section from "../../../components/Section";
import Header from "../../../components/Header";
import PostsGrid from "../../../components/PostsGrid";

import { getPosts } from "../../../provider/posts";

const Category = ({ posts, slug }) => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <Section bgColor="bg-whiteGreen">
          <Header title={`Wpisy z kategorii: ${slug}`} titleAsH1 />
          <PostsGrid posts={posts} withMarginTop />
        </Section>
      </Main>
    </>
  );
};

export default Category;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const posts = getPosts().filter((post) => post.meta.category.includes(slug));

  return {
    props: {
      posts,
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getPosts();
  const categories = new Set(posts.map((posts) => posts.meta.category).flat());
  const paths = Array.from(categories).map((category) => ({
    params: { slug: category },
  }));

  return {
    paths,
    fallback: false,
  };
};

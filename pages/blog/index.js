import MainHeader from "./../../components/MainHeader";
import Main from "./../../components/Main";
import Section from "../../components/Section";
import Header from "../../components/Header";
import PostsGrid from "../../components/PostsGrid";

import { getPosts, getSlugs } from "../../provider/posts";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <Section bgColor="bg-whiteGreen">
          <Header
            title="Artykuły, ciekawostki z świata stron internetowych i nie tylko"
            titleAsH1
          />
          <PostsGrid posts={posts} withMarginTop />
        </Section>
      </Main>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

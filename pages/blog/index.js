import MainHeader from "../../components/MainHeader";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Main from "../../components/Main";
import PostsList from "../../components/PostsList/PostsList";
import { getAllPosts, getTags } from "../../provider/posts";

const Blog = ({ posts }) => {
  return (
    <>
      <MainHeader />
      <Main>
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <Header
            title="Artykuły, ciekawostki z świata stron internetowych i nie tylko"
            titleAsH1
          />
          <PostsList posts={posts} withMarginOnTop />
        </Section>
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
};

export default Blog;

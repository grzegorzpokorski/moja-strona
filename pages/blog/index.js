import MainHeader from "../../components/MainHeader";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { getAllPosts } from "../../provider/posts";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <MainHeader>
        <Section bgColor="bg-whiteGreen" withMarginOnTop>
          <Header
            title="Artykuły, ciekawostki z świata stron internetowych i nie tylko"
            titleAsH1
          />
        </Section>
      </MainHeader>
      <Main>
        <Section bgColor="bg-whiteGreen"></Section>
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

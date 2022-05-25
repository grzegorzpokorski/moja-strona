import MainHeader from "../../components/MainHeader";
import Section from "../../components/Section";
import Header from "../../components/Header";
import Main from "../../components/Main";

const Blog = () => {
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

export default Blog;

import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Main from "./../../components/Main";

const Blog = () => {
  return (
    <>
      <Header />
      <Main withMarginTop>
        <p>blog page depends on slug</p>
      </Main>
      <Footer />
    </>
  );
};

export default Blog;

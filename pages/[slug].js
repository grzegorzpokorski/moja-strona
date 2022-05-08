import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

const Page = () => {
  return (
    <>
      <Header />
      <Main withMarginTop>
        <p>page depends on slug</p>
      </Main>
      <Footer />
    </>
  );
};

export default Page;

import Header from "../components/Header";
import Main from "../components/Main";

const Page = () => {
  return (
    <>
      <Header />
      <Main withMarginTop>
        <p>page depends on slug</p>
      </Main>
    </>
  );
};

export default Page;

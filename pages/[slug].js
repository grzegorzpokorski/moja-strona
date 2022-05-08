import MainHeader from "../components/MainHeader";
import Main from "../components/Main";

const Page = () => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <p>page depends on slug</p>
      </Main>
    </>
  );
};

export default Page;

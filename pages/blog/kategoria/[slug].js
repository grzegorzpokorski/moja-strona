import { useRouter } from "next/router";
import MainHeader from "../../../components/MainHeader";
import Main from "../../../components/Main";

const Category = () => {
  const { query } = useRouter();
  const slug = Object.values(query).length > 0 ? query.slug : "/";

  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <p>{slug}</p>
      </Main>
    </>
  );
};

export default Category;

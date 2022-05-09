import MainHeader from "./../../components/MainHeader";
import Main from "./../../components/Main";
import Section from "../../components/Section";
import Header from "../../components/Header";
import PostsGrid from "../../components/PostsGrid";

const Blog = () => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <Section bgColor="bg-whiteGreen">
          <Header
            title="Artykuły, ciekawostki z świata stron internetowych i nie tylko"
            titleAsH1
          />
          <PostsGrid
            // posts={posts} //allPosts
            // posts={[
            //   {
            //     featureImage: {
            //       src: placeholderImage,
            //       alt: "hello image",
            //     },
            //     title: "Czy w dzisiejszych czasach",
            //     excerpt:
            //       "Excerpt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque molestie ligula, quis ultrices mauris vestibulum vel. Maecenas sit amet leo scelerisque, sagittis odio eu, malesuada arcu. ",
            //     category: "Marketing",
            //     date: "2022.05.09",
            //     slug: "czy-warto-prowadzic-bloga",
            //   },
            //   {
            //     featureImage: {
            //       src: placeholderImage,
            //       alt: "hello image",
            //     },
            //     title: "Wspaniały tytuł do testowego posta",
            //     excerpt:
            //       "Excerpt2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque molestie ligula, quis ultrices mauris vestibulum vel. Maecenas sit amet leo scelerisque, sagittis odio eu, malesuada arcu. ",
            //     category: "Programowanie",
            //     date: "2022.04.20",
            //     slug: "test",
            //   },
            // ]}
            withMarginTop
          />
        </Section>
      </Main>
    </>
  );
};

export default Blog;

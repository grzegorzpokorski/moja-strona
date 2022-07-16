import Header from "./parts/Header";
import Article from "./parts/Article";

const Post = ({ post: { frontmatter, source, slug } }) => {
  return (
    <>
      <Header {...frontmatter} />
      <Article
        source={source}
        tags={frontmatter.tags}
        slug={slug}
        title={frontmatter.title}
      />
    </>
  );
};

export default Post;

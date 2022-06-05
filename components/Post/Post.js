import Header from "./parts/Header";
import Article from "./parts/Article";

const Post = ({ post: { frontmatter, source } }) => {
  return (
    <>
      <Header {...frontmatter} />
      <Article source={source} tags={frontmatter.tags} />
    </>
  );
};

export default Post;

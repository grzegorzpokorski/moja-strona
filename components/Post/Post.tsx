import Header from "./parts/Header";
import Article from "./parts/Article";
import { PostWithCompiledSource } from "../../utils/posts";

type PostProps = {
  post: PostWithCompiledSource;
};

const Post = ({ post: { frontmatter, source } }: PostProps) => {
  return (
    <>
      <Header {...frontmatter} />
      <Article
        source={source}
        slug={frontmatter.slug}
        title={frontmatter.title}
      />
    </>
  );
};

export default Post;

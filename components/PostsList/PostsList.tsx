import { PostWithRawSource } from "../../utils/posts";
import PostItem from "./parts/PostItem";

type PostListProps = {
  posts: PostWithRawSource[];
  withMarginOnTop?: boolean;
};

const PostsList = ({ posts, withMarginOnTop }: PostListProps) => {
  return (
    <ul
      className={`flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 ${withMarginOnTop ? "mt-12 md:mt-24" : ""}`}
    >
      {posts.map((post) => (
        <PostItem key={post.frontmatter.slug} {...post.frontmatter} />
      ))}
    </ul>
  );
};

export default PostsList;

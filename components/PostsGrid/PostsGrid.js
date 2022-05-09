import Post from "./parts/Post";

const PostsGrid = ({ posts, withMarginTop }) => {
  return (
    <ul
      className={`flex flex-col lg:grid md:grid-cols-2 xl:grid-cols-3 gap-6 ${
        withMarginTop && "mt-12 md:mt-24"
      }`}
    >
      {posts &&
        posts.map((post, i) => <Post key={`list-item-${i}`} {...post} />)}
    </ul>
  );
};

export default PostsGrid;

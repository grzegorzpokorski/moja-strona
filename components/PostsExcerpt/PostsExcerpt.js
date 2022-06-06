import Section from "../Section";
import Header from "../Header";
import PostsList from "../PostsList";
import Button from "../Button";

const PostsExcerpt = ({ subtitle, title, posts, button }) => {
  return (
    <Section bgColor="bg-whiteGreen">
      <Header title={title} subtitle={subtitle} />
      <PostsList posts={posts} withMarginOnTop />
      {button && (
        <footer className="mt-12 text-center">
          <Button label={button.label} href={button.href} />
        </footer>
      )}
    </Section>
  );
};

export default PostsExcerpt;

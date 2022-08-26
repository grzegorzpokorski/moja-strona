import Section from "../Section";
import Header from "../Header";
import PostsList from "../PostsList";
import Button from "../Button";
import { PostWithRawSource } from "../../utils/posts";
import { ButtonProps } from "../Button/Button";

type PostExcerptProps = {
  subtitle?: string;
  title: string;
  posts: PostWithRawSource[];
  button?: ButtonProps;
};

const PostsExcerpt = ({ subtitle, title, posts, button }: PostExcerptProps) => {
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

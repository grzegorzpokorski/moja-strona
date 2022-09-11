import { Section } from "../Section/Section";
import { Header } from "../Header/Header";
import { PostsList } from "../PostsList/PostsList";
import { Button } from "../Button/Button";
import { PostWithRawSource } from "../../utils/posts";
import { ButtonProps } from "../Button/Button";
import { getIdFromString } from "../../helpers/functions/getIdFromString";

type PostExcerptProps = {
  subtitle?: string;
  title: string;
  posts: PostWithRawSource[];
  button?: ButtonProps;
};

export const PostsExcerpt = ({ subtitle, title, posts, button }: PostExcerptProps) => {
  return (
    <Section bgColor="bg-whiteGreen" id={getIdFromString(title)}>
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

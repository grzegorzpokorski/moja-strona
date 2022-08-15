import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "../../Link";
import SharePostLinks from "./SharePostLinks";
import Img from "./../../mdx/Img";
import Pre from "./../../mdx/Pre";

type ArticleProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  slug: string;
  title: string;
};

const Article = ({ source, slug, title }: ArticleProps) => {
  const customMdxComponents = {
    a: Link,
    img: Img,
    pre: Pre,
  } as import("mdx/types").MDXComponents;

  return (
    <article className="pb-16 dark:bg-zinc-800">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-7/12 prose dark:prose-invert max-w-none mx-auto">
          <MDXRemote {...source} components={customMdxComponents} />
        </div>
        <footer className="w-full lg:w-7/12 mx-auto mt-16 pt-8 border-t-2 border-greenWhite flex flex-col lg:flex-row gap-6 items-center">
          <p className={`font-bold text-customGray dark:text-zinc-200`}>
            Udostępnij artykuł
          </p>
          <SharePostLinks slug={slug} title={title} />
        </footer>
      </div>
    </article>
  );
};

export default Article;

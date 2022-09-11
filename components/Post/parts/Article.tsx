import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Link } from "../../Link/Link";
import { SharePostLinks } from "./SharePostLinks";
import { Image as MdxImage } from "./../../mdx/Img/Img";
import { Pre as MdxPre } from "./../../mdx/Pre/Pre";

type ArticleProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  slug: string;
  title: string;
};

export const Article = ({ source, slug, title }: ArticleProps) => {
  const customMdxComponents = {
    a: Link,
    img: MdxImage,
    pre: MdxPre,
  } as import("mdx/types").MDXComponents;

  return (
    <article className="pb-16">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-7/12 prose max-w-none mx-auto">
          <MDXRemote {...source} components={customMdxComponents} />
        </div>
        <footer className="w-full lg:w-7/12 mx-auto mt-16 pt-8 border-t-2 border-greenWhite flex flex-col lg:flex-row gap-6 items-center">
          <p className={`font-bold text-customGray`}>Udostępnij artykuł</p>
          <SharePostLinks slug={slug} title={title} />
        </footer>
      </div>
    </article>
  );
};

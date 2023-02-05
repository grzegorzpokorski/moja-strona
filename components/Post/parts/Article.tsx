import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Link } from "../../Link/Link";
import { SharePostLinks } from "./SharePostLinks";
// import { Image as MdxImage } from "./../../mdx/Img/Img";
import Image, { ImageProps } from "next/image";
import { Pre as MdxPre } from "./../../mdx/Pre/Pre";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type ArticleProps = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  slug: string;
  title: string;
};

export const Article = ({ source, slug, title }: ArticleProps) => {
  const customMdxComponents = {
    a: Link,
    img: (props: ImageProps) => (
      <Image
        {...props}
        alt={props.alt}
        sizes="(max-width: 720px) 100vw, (max-width: 1140px) 50vw, 33vw"
      />
    ),
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

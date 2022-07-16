import { MDXRemote } from "next-mdx-remote";
import Link from "../../Link";
import Image from "next/image";
import SharePostLinks from "./SharePostLinks";

const Article = ({ source, tags, slug, title }) => {
  const components = {
    a: Link,
    img: (props) => <Image {...props} layout="responsive" loading="lazy" />,
  };

  return (
    <article className="pb-16">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-7/12 prose max-w-none mx-auto">
          <MDXRemote {...source} components={components} />
        </div>
        <footer className="w-full lg:w-7/12 mx-auto mt-16 pt-8 border-t-2 border-greenWhite flex flex-col lg:flex-row gap-6 items-center">
          <p className={`font-bold`}>Udostępnij artykuł</p>
          <SharePostLinks slug={slug} title={title} />
        </footer>
      </div>
    </article>
  );
};

export default Article;

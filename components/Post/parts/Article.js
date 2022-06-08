import { MDXRemote } from "next-mdx-remote";
import Link from "../../Link";
import Image from "next/image";

const Article = ({ source, tags }) => {
  const components = {
    a: Link,
    img: (props) => <Image {...props} layout="responsive" loading="lazy" />,
  };

  return (
    <article className="pb-16 md:pb-24">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-7/12 prose max-w-none mx-auto">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </article>
  );
};

export default Article;

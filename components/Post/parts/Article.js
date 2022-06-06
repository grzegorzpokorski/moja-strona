import { MDXRemote } from "next-mdx-remote";
import Link from "../../Link";
import Image from "../../mdx/Image";

const Article = ({ source, tags }) => {
  const components = {
    a: Link,
    img: (props) => <Image {...props} />,
  };

  return (
    <article className="pb-16 md:pb-24">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-7/12 prose max-w-none mx-auto">
          <MDXRemote {...source} components={components} />
        </div>
        {tags && (
          <footer className="container mx-auto px-3">
            <ul className="w-full lg:w-7/12 mx-auto flex flex-row flex-wrap gap-2 mt-8">
              {tags.map((tag) => (
                <li key={tag}>
                  <Link
                    href={`/blog/tag/${tag}`}
                    className="py-2 px-4 bg-whiteGreen text-sm border-2 border-green"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </footer>
        )}
      </div>
    </article>
  );
};

export default Article;

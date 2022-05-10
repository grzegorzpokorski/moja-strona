import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "../Link";

import MainHeader from "../MainHeader";
import Main from "../Main";
import Footer from "./parts/Footer";

const Post = ({ mdxSource, meta, featuredImage }) => {
  console.log(featuredImage);
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <header className="py-16 md:py-24">
          <div className="container px-3 mx-auto w-full md:w-8/12">
            <span className="flex flex-row items-center mb-4 gap-3">
              <Link
                href={`/blog/kategoria/${meta.category}`}
                className="text-green hover:underline"
              >
                {meta.category}
              </Link>
              <span
                className="inline-block w-12 h-0.5 bg-customGray text-separator"
                aria-hidden="true"
              ></span>
              <time dateTime={`${meta.date}`}>{meta.date}</time>
            </span>
            <h1 className="font-bold text-3xl md:text-4xl">{meta.title}</h1>
            <figure className="w-full h-[30rem] max-h-[60vh] overflow-hidden relative block mt-12">
              <Image
                src={featuredImage}
                alt="człowiek pracuje przy biurku"
                className="object-cover object-center w-full h-full"
                layout="fill"
                priority
              />
            </figure>
          </div>
        </header>
        <article className="pb-16 md:pb-24">
          <div className="container px-3 mx-auto w-full md:w-6/12 prose max-w-none">
            <MDXRemote
              {...mdxSource}
              components={{
                img: Image,
                a: Link,
              }}
            />
          </div>

          {meta.tags && <Footer tags={meta.tags} />}
        </article>
      </Main>
    </>
  );
};

export default Post;

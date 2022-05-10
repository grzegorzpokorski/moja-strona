import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Link from "../Link";

import MainHeader from "../MainHeader";
import Main from "../Main";
import Footer from "./parts/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ mdxSource, meta, featuredImage }) => {
  return (
    <>
      <MainHeader />
      <Main withMarginTop>
        <header className="py-16 md:py-24">
          <div className="container px-3 mx-auto w-full md:w-8/12">
            <span className="flex flex-row items-center mb-6 gap-6 text-green">
              <span className="flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faLayerGroup} />
                <Link
                  href={`/blog/kategoria/${meta.category}`}
                  className="text-gray-500 hover:underline"
                >
                  {meta.category}
                </Link>
              </span>
              <span className="flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faCalendarDays} />
                <time dateTime={`${meta.date}`} className="text-gray-500">
                  {meta.date}
                </time>
              </span>
            </span>
            <h1 className="font-bold text-3xl md:text-4xl">{meta.title}</h1>
            <figure className="w-full h-[30rem] max-h-[60vh] overflow-hidden relative block mt-12">
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
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

import Link from "../../Link";
import Image from "next/image";
import TagsList from "./TagsList";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import "dayjs/locale/pl";
dayjs.locale("pl");

import slugify from "slugify";
import { PostFrontmatter } from "../../../provider/posts";

const Header = ({
  category,
  date,
  title,
  tags,
  featuredImage,
}: PostFrontmatter) => {
  return (
    <header className="pt-16 pb-8 md:pt-24 md:pb-12 dark:bg-zinc-800">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-8/12 mx-auto flex flex-col gap-4">
          <span className="flex flex-row items-center gap-3">
            <Link
              href={`/blog/kategoria/${slugify(category, {
                replacement: "-",
                lower: true,
              })}`}
              className="text-green hover:underline"
            >
              {category}
            </Link>
            <span
              className="inline-block w-12 h-0.5 bg-customGray dark:bg-zinc-200 text-separator"
              aria-hidden="true"
            ></span>
            <time
              dateTime={dayjs(date, "YYYY.MM.DD").format("YYYY-MM-DD")}
              className="dark:text-zinc-200"
            >
              {dayjs(date, "YYYY.MM.DD").locale("pl").format("DD MMMM YYYY")}
            </time>
          </span>
          <h1 className="font-bold text-3xl md:text-4xl dark:text-zinc-200">
            {title}
          </h1>
          <TagsList tags={tags} withMarginOnTop />
          <figure className="w-full h-60 md:h-80 lg:h-[30rem] overflow-hidden relative block mt-4">
            <Image
              src={featuredImage}
              alt=""
              className="object-cover object-center w-full h-full"
              layout="fill"
              priority
            />
          </figure>
        </div>
      </div>
    </header>
  );
};
export default Header;

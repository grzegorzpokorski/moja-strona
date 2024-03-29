import { Link } from "../../Link/Link";
import Image from "next/image";
import { TagsList } from "./TagsList";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import "dayjs/locale/pl";
dayjs.locale("pl");

import slugify from "slugify";
import { PostFrontmatter } from "../../../utils/posts";

export const Header = ({ category, date, title, tags, featuredImage }: PostFrontmatter) => {
  return (
    <header className="pt-16 pb-8 md:pt-24 md:pb-12">
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
              className="inline-block w-12 h-0.5 bg-customGray text-separator"
              aria-hidden="true"
            ></span>
            <time dateTime={dayjs(date, "YYYY.MM.DD").format("YYYY-MM-DD")}>
              {dayjs(date, "YYYY.MM.DD").locale("pl").format("DD MMMM YYYY")}
            </time>
          </span>
          <h1 className="font-bold text-3xl md:text-4xl">{title}</h1>
          <TagsList tags={tags} withMarginOnTop />
          <figure className="w-full h-60 md:h-80 lg:h-[30rem] overflow-hidden relative block mt-4 rounded-md shadow-md">
            <Image
              src={featuredImage}
              width={featuredImage.width}
              height={featuredImage.height}
              alt={featuredImage.alt}
              className="object-cover object-center w-full h-full"
              sizes="(max-width: 720px) 100vw, (max-width: 1140px) 50vw, 33vw"
              // placeholder="blur"
              // blurDataURL={featuredImage.base64}
              priority
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

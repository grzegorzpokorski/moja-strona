import Link from "../../Link";
import Image from "next/image";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import "dayjs/locale/pl";
dayjs.locale("pl");

import slugify from "slugify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faTag } from "@fortawesome/free-solid-svg-icons";
import { PostFrontmatter } from "../../../utils/posts";

const PostItem = ({ slug, featuredImage, category, date, title, excerpt }: PostFrontmatter) => {
  return (
    <li className="bg-white drop-shadow-xl border-2 border-greenLight rounded-md">
      <article>
        <Link href={`/blog/${slug}`} aria-hidden={true} tabIndex={-1}>
          <figure className="w-full h-72 max-h-72 overflow-hidden relative block rounded-t-md">
            <Image
              src={featuredImage}
              layout="fill"
              className="object-cover object-center w-full h-full hover:scale-105 transition-all duration-300"
              alt=""
            />
          </figure>
        </Link>
        <header className="p-8 pb-0 flex flex-col gap-3">
          <div className="flex flex-row gap-4 text-sm">
            <Link
              href={`/blog/kategoria/${slugify(category, {
                replacement: "-",
                lower: true,
              })}`}
              className="hover:underline"
            >
              <FontAwesomeIcon icon={faTag} className="mr-2 text-green" />
              {category}
            </Link>
            <time dateTime={dayjs(date, "YYYY.MM.DD").format("YYYY-MM-DD")}>
              <FontAwesomeIcon icon={faCalendarDays} className="mr-2 text-green" />
              {dayjs(date, "YYYY.MM.DD").format("DD MMMM YYYY")}
            </time>
          </div>
          <Link href={`/blog/${slug}`} className="text-customGray hover:text-green transition">
            <h3 className="font-bold text-lg">{title}</h3>
          </Link>
        </header>
        <div className="p-8 pt-3 flex flex-col gap-3">
          <p>{excerpt}</p>
          {/* <p>{post.excerpt.split(" ").splice(0, 20).join(" ")} [...]</p> */}
        </div>
      </article>
    </li>
  );
};

export default PostItem;

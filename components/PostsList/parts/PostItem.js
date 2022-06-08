import Link from "../../Link";
import Image from "next/image";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import locale_pl from "dayjs/locale/pl";
dayjs.locale("pl");

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faTag } from "@fortawesome/free-solid-svg-icons";

const PostItem = (post) => {
  return (
    <li className="bg-white drop-shadow-xl border-2 border-greenLight">
      <article>
        <Link href={`/blog/${post.slug}`}>
          <figure className="w-full h-72 max-h-72 overflow-hidden relative block">
            <Image
              src={post.featuredImage}
              layout="fill"
              className="object-cover object-center w-full h-full hover:scale-105 transition-all duration-300"
              alt=""
            />
          </figure>
        </Link>
        <header className="p-8 pb-0 flex flex-col gap-3">
          <div className="flex flex-row gap-4 text-sm">
            <Link
              href={`/blog/kategoria/${post.category}`}
              className="hover:underline"
            >
              <FontAwesomeIcon icon={faTag} className="mr-2 text-green" />
              {post.category}
            </Link>
            <time
              dateTime={dayjs(post.date, "DD.MM.YYYY").format("YYYY-MM-DD")}
            >
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="mr-2 text-green"
              />
              {dayjs(post.date).format("DD MMMM YYYY")}
            </time>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-green transition"
          >
            <h3 className="font-bold text-lg">{post.title}</h3>
          </Link>
        </header>
        <div className="p-8 pt-3 flex flex-col gap-3">
          <p>{post.excerpt.split(" ").splice(0, 20).join(" ")} [...]</p>
        </div>
      </article>
    </li>
  );
};

export default PostItem;

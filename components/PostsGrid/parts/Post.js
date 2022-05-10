import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "../../Link";

const Post = ({ content, meta, featuredImage }) => {
  return (
    <li className="bg-white drop-shadow-xl border-2 border-greenLight">
      <article>
        <Link href={`/blog/${meta.slug}`}>
          <picture className="w-full h-72 max-h-72 overflow-hidden relative block">
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              layout="fill"
              priority
              className="object-cover object-center w-full h-full hover:scale-105 transition-all duration-300"
            />
          </picture>
        </Link>
        <header className="p-8 flex flex-col gap-3">
          <span className="flex flex-row items-center gap-6 text-green text-sm">
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
              <time dateTime="2022.05.02" className="text-gray-500">
                2022.05.02
              </time>
            </span>
          </span>
          <Link href={`/blog/${meta.slug}`} className="hover:underline">
            <h3 className="font-bold text-lg">{meta.title}</h3>
          </Link>
          <p>{meta.excerpt}</p>
        </header>
      </article>
    </li>
  );
};

export default Post;

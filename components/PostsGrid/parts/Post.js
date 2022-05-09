import Image from "next/image";
import Link from "../../Link";

const Post = ({ featureImage, title, excerpt, date, category, slug }) => {
  return (
    <li className="bg-white drop-shadow-xl border-2 border-greenLight">
      <article>
        <Link href="/blog/${slug}">
          <picture className="w-full h-72 max-h-72 overflow-hidden relative block">
            <Image
              src={featureImage.src}
              alt={featureImage.alt}
              className="object-cover object-center w-full h-full hover:scale-105 transition-all duration-300"
            />
          </picture>
        </Link>
        <header className="p-8 flex flex-col gap-3">
          <span className="flex flex-row items-center gap-3">
            <Link
              href={`/blog/category/${category}`}
              className="text-green hover:underline"
            >
              {category}
            </Link>
            {/* <span
              className="w-8 h-[0.0625rem] bg-gray-500"
              aria-hidden="true"
            ></span>
            <time datetime="2022.05.02" className="text-gray-500 text-md">
              2022.05.02
            </time> */}
          </span>
          <Link href={`/blog/${slug}`} className="hover:underline">
            <h3 className="font-bold text-lg">{title}</h3>
          </Link>
          <p>{excerpt}</p>
        </header>
      </article>
    </li>
  );
};

export default Post;

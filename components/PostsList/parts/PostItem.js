import Link from "../../Link";
import Image from "next/image";

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
            />
          </figure>
        </Link>
        <header className="p-8 flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <Link
              href={`/blog/kategoria/${post.category}`}
              className="text-green hover:underline"
            >
              {post.category}
            </Link>
          </div>
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            <h3 className="font-bold text-lg">{post.title}</h3>
          </Link>
          <p>{post.excerpt.split(" ").splice(0, 20).join(" ")} [...]</p>
        </header>
      </article>
    </li>
  );
};

export default PostItem;

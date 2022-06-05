import Link from "../../Link";
import Image from "next/image";

const Header = (props) => {
  return (
    <header className="mt-12 md:mt-0 pb-16 md:py-24">
      <div className="container px-3 mx-auto w-full md:w-8/12">
        <span className="flex flex-row items-center mb-4 gap-3">
          <Link
            href={`/blog/kategoria/${props.category}`}
            className="text-green hover:underline"
          >
            {props.category}
          </Link>
          <span
            className="inline-block w-12 h-0.5 bg-customGray text-separator"
            aria-hidden="true"
          ></span>
          <time dateTime={props.date.replaceAll(".", "-")}>{props.date}</time>
        </span>
        <h1 className="font-bold text-3xl md:text-4xl">{props.title}</h1>
        <figure className="w-full h-96 max-h-96 overflow-hidden relative block mt-12">
          <Image
            src={props.featuredImage}
            className="object-cover object-center w-full h-full"
            layout="fill"
            priority
          />
        </figure>
      </div>
    </header>
  );
};
export default Header;

import Link from "../../Link";
import Image from "next/image";

const Header = (props) => {
  return (
    <header className="pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="container px-3 mx-auto">
        <div className="w-full lg:w-8/12 mx-auto">
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
            <span>{props.date}</span>
          </span>
          <h1 className="font-bold text-3xl md:text-4xl">{props.title}</h1>
          <figure className="w-full h-60 lg:h-96 max-h-96 overflow-hidden relative block mt-8">
            {/* <figure className="w-full h-96 max-h-96 overflow-hidden relative block mt-12"> */}
            <Image
              src={props.featuredImage}
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

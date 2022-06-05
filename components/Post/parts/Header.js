import Link from "../../Link";
import Image from "next/image";

const Header = (props) => {
  return (
    <header className="mt-12 md:mt-0 pb-16 md:py-24">
      <div className="container px-3 mx-auto w-full md:w-8/12">
        <span className="flex flex-row items-center mb-4 gap-3">
          <Link
            href={`/blog/karegoria/${props.category}`}
            className="text-green hover:underline"
          >
            {props.category}
          </Link>
          <span
            className="inline-block w-12 h-0.5 bg-customGray text-separator"
            aria-hidden="true"
          ></span>
          <time dateTime="2022.05.02">{props.date}</time>
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
        {/* <figure className="w-full h-96 max-h-96 overflow-hidden relative block mt-12">
      <source media="(min-width: 576px)" srcset="./dist/img/desk-768w.webp">
      <source media="(min-width: 768px)" srcset="./dist/img/desk-992w.webp">
      <source media="(min-width: 992px)" srcset="./dist/img/desk-1200w.webp">
      <source media="(min-width: 1200px)" srcset="./dist/img/desk-1920w.webp">
      <img width="558" height="500" src="./dist/img/desk-576w.webp" alt="człowiek pracuje przy biurku" loading="lazy" className="object-cover object-center w-full h-full">
    </figure> */}
      </div>
    </header>
  );
};
export default Header;

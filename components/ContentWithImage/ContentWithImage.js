import Image from "next/image";
import Button from "../Button";

const ContentWithImage = ({
  subtitle,
  title,
  content,
  href,
  image,
  reverse,
  bgColor,
}) => {
  return (
    <section className={`py-16 md:py-24 ${bgColor ? bgColor : "bg-white"}`}>
      <div
        className={`container px-3 mx-auto flex flex-col ${
          reverse ? "md:flex-row" : "md:flex-row-reverse"
        } gap-3 items-center`}
      >
        <div className="w-full md:w-1/2">
          <header className="text-left flex flex-col gap-4">
            {subtitle && (
              <span className="text-green uppercase font-bold">{subtitle}</span>
            )}
            <h2 className="font-bold text-3xl md:text-4xl text-customGray">
              {title}
            </h2>
          </header>
          {content && <div className="prose mt-6">{content}</div>}
          {href && (
            <footer className="mt-6">
              <Button
                href={href}
                customClasses="inline-block bg-green hover:bg-greenHover text-white px-4 md:px-6 py-2 md:py-3 transition-all"
                label="Dowiedz się więcej"
              />
            </footer>
          )}
        </div>
        <picture className="w-full w-full md:w-1/2">
          {image && (
            <Image src={image.src} alt={image.alt} placeholder="blur" />
          )}
        </picture>
      </div>
    </section>
  );
};

export default ContentWithImage;

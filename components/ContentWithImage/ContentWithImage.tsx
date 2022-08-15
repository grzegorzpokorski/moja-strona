import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";

type ContentWithImageProps = {
  subtitle: string;
  title: string;
  content?: ReactNode;
  href?: string;
  image: {
    src: StaticImageData | string;
    alt: string;
  };
  reverse?: boolean;
  bgColor?: "bg-white" | "bg-green" | "bg-whiteGreen";
  customClasses?: string;
};

const ContentWithImage = ({
  subtitle,
  title,
  content,
  href,
  image,
  reverse,
  bgColor,
  customClasses,
}: ContentWithImageProps) => {
  return (
    <section
      className={`py-16 md:py-24 ${bgColor ? bgColor : "bg-white"} ${
        customClasses ? customClasses : ""
      }`}
    >
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
            <h2 className="font-bold text-3xl md:text-4xl text-customGray dark:text-zinc-200">
              {title}
            </h2>
          </header>
          {content && (
            <div className="prose dark:prose-invert mt-6">{content}</div>
          )}
          {href && (
            <footer className="mt-6">
              <Button href={href} label="Dowiedz się więcej" />
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

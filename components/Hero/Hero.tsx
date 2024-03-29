import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { ButtonProps } from "../../components/Button/Button";
import { Button } from "./../Button/Button";

type HeroProps = {
  title: string;
  description?: ReactNode;
  buttons?: ButtonProps[];
  image: {
    src: StaticImageData | string;
    alt: string;
  };
  bgColor?: string;
  titleAsH1?: boolean;
  withMarginOnTop?: boolean;
  imageFirst?: boolean;
};

export const Hero = ({
  title,
  description,
  buttons,
  image,
  bgColor,
  titleAsH1,
  withMarginOnTop,
  imageFirst,
}: HeroProps) => {
  return (
    <section
      className={`py-12 md:py-12 ${bgColor ? bgColor : "bg-white"} ${
        withMarginOnTop ? "mt-20 lg:mt-28" : ""
      }`}
      id="hero"
    >
      <div
        className={`container mx-auto px-3 flex flex-col md:flex-row ${
          imageFirst ? "flex-col-reverse md:flex-row-reverse" : ""
        } items-center gap-3`}
      >
        <header className="md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          {titleAsH1 ? (
            <h1 className="text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-[1.2] font-bold text-customGray">
              {title}
            </h1>
          ) : (
            <h2 className="text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-[1.2] font-bold text-customGray">
              {title}
            </h2>
          )}
          <div className="prose max-w-none">{description && description}</div>
          {buttons && (
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center md:justify-start items-center">
              {buttons.map((item, i) => (
                <Button key={`btn-${i}`} {...item} />
              ))}
            </div>
          )}
        </header>
        <picture className="w-full md:w-1/2">
          <Image
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 720px) 100vw, 50vw"
            className="max-w-full h-auto"
            priority
          />
        </picture>
      </div>
    </section>
  );
};

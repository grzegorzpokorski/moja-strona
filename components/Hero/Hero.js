import Image from "next/image";
import Button from "./../Button";

const Hero = ({ title, description, buttons, image, bgColor, isHome }) => {
  return (
    <section className={`py-12 md:py-18 ${bgColor ? bgColor : "bg-white"}`}>
      <div className="container mx-auto px-3 flex flex-col md:flex-row items-center gap-3">
        <header className="md:w-1/2 flex flex-col gap-3 text-center md:text-left items-center md:items-start">
          {isHome ? (
            <h1 className="text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-[1.2] font-bold text-customGray">
              {title}
            </h1>
          ) : (
            <h2 className="text-3xl lg:text-4xl xl:text-[2.5rem] xl:leading-[1.2] font-bold text-customGray">
              {title}
            </h2>
          )}
          {description && <p>{description}</p>}
          {buttons && (
            <div className="flex flex-row flex-wrap gap-2 justify-center md:justify-start">
              {buttons.map((item, i) => (
                <Button key={`btn-${i}`} {...item} />
              ))}
            </div>
          )}
        </header>
        <picture className="w-full md:w-1/2">
          <Image src={image.src} alt={image.alt} objectFit="cover" priority />
        </picture>
      </div>
    </section>
  );
};

export default Hero;

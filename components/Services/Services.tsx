import { ContentWithImage } from "../ContentWithImage/ContentWithImage";
import { StaticImageData } from "next/image";

export type ServicesType = {
  subtitle: string;
  title: string;
  content: JSX.Element;
  href?: string;
  image: {
    src: StaticImageData | string;
    alt: string;
  };
};

type ServicesProps = {
  services: ServicesType[];
};

export const Services = ({ services }: ServicesProps) => {
  return (
    <>
      {services &&
        services.map((item, i) =>
          i % 2 ? (
            <ContentWithImage key={item.title} {...item} bgColor="bg-whiteGreen" />
          ) : (
            <ContentWithImage key={item.title} {...item} reverse />
          ),
        )}
    </>
  );
};

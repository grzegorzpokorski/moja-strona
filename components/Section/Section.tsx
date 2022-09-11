import { ReactNode } from "react";

type SectionProps = {
  bgColor?: "bg-white" | "bg-green" | "bg-whiteGreen";
  children: ReactNode[];
  withMarginOnTop?: boolean;
  customClasses?: string;
  id?: string;
};

export const Section = ({
  bgColor,
  children,
  withMarginOnTop,
  customClasses,
  id,
}: SectionProps) => {
  return (
    <section
      className={`py-16 md:py-24 ${bgColor ? bgColor : "bg-white"} ${
        withMarginOnTop ? "mt-20 lg:mt-28" : ""
      } ${customClasses ? customClasses : ""}`}
      id={id}
    >
      <div className="container px-3 mx-auto">{children}</div>
    </section>
  );
};

import { ReactNode } from "react";

type HeaderProps = {
  subtitle?: string;
  title: string;
  description?: ReactNode;
  centered?: boolean;
  titleAsH1?: boolean;
  children?: ReactNode;
  customClasses?: string;
};

export const Header = ({
  subtitle,
  title,
  description,
  centered,
  titleAsH1,
  children,
  customClasses,
}: HeaderProps) => {
  return (
    <header
      className={`w-full mr-auto flex flex-col gap-4 ${
        centered ? "text-center mx-auto md:w-4/6" : ""
      } ${customClasses ? customClasses : ""}`}
    >
      {subtitle && <span className={`uppercase font-bold text-green`}>{subtitle}</span>}
      {titleAsH1 ? (
        <h1 className={`font-bold text-3xl md:text-4xl text-customGray`}>{title}</h1>
      ) : (
        <h2 className={`font-bold text-2xl md:text-3xl text-customGray`}>{title}</h2>
      )}
      {description && <div className="prose max-w-none">{description}</div>}
      {children}
    </header>
  );
};

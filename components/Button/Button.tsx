import { FC } from "react";
import { ButtonType } from "./../../types/button";
import Link from "../Link";

const Button: FC<ButtonType> = ({
  label,
  href,
  size = "default",
  style = "default",
  customClasses,
}) => {
  return (
    <Link
      href={href}
      className={`inline-flex transition-colors border-2 rounded ${
        size === "small"
          ? "px-2 py-1 text-xs "
          : size === "default"
          ? "px-4 md:px-6 py-2 md:py-3 text-base"
          : size === "social"
          ? "px-3 md:px-4 py-2 md:py-3"
          : ""
      } ${
        style === "default"
          ? "bg-green hover:bg-greenHover text-white border-green"
          : style === "transparentGreen"
          ? "bg-transparent hover:bg-greenHover text-green hover:text-white border-green"
          : style === "white"
          ? "bg-white hover:bg-whiteGreen text-gray-800 border-white"
          : style === "transparentWhite"
          ? "bg-transparent hover:bg-whiteGreen text-white hover:text-gray-800 border-white"
          : style === "tag"
          ? "bg-zinc-200 hover:bg-green text-zinc-500 hover:text-white border-0"
          : style === "whiteZinc"
          ? "bg-white text-zinc-400 hover:text-green border-zinc-400 hover:border-green"
          : ""
      } ${customClasses ? customClasses : ""}`}
    >
      {label}
    </Link>
  );
};

export default Button;

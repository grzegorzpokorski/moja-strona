export type ButtonType = {
  label: string;
  href: string;
  size?: "default" | "small" | "social";
  style?:
    | "default"
    | "transparentGreen"
    | "white"
    | "transparentWhite"
    | "tag"
    | "whiteZinc";
  customClasses?: string;
};

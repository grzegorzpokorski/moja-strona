import Link from "../Link";

const Button = ({ label, href, customClasses, small, gray }) => {
  return (
    <Link
      href={href}
      className={`inline-block transition-all 
      ${
        customClasses
          ? customClasses
          : "bg-green hover:bg-greenHover text-white"
      } 
      ${small ? "px-2 py-1 text-xs" : "px-4 md:px-6 py-2 md:py-3"} 
      ${gray ? "bg-zinc-200 text-zinc-500 hover:text-white" : ""}`}
    >
      {label}
    </Link>
  );
};

export default Button;

import Link from "../Link";

const Button = ({ label, href, customClasses }) => {
  return (
    <Link
      href={href}
      className={`inline-block px-4 md:px-6 py-2 md:py-3 transition-all ${
        customClasses ? customClasses : "bg-green hover:bg-greenHover "
      }`}
    >
      {label}
    </Link>
  );
};

export default Button;

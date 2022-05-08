import Link from "next/link";

const Button = ({ label, href, customClasses }) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  return isInternalLink ? (
    <Link href={href}>
      <a
        className={`inline-block px-4 md:px-6 py-2 md:py-3 transition-all ${
          customClasses ? customClasses : "bg-green hover:bg-greenHover "
        }`}
      >
        {label}
      </a>
    </Link>
  ) : (
    <a
      href={href}
      className={`inline-block px-4 md:px-6 py-2 md:py-3 transition-all ${
        customClasses ? customClasses : "bg-green hover:bg-greenHover "
      }`}
    >
      {label}
    </a>
  );
};

export default Button;

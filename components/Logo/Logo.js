import Link from "next/link";

const Logo = ({ isHome, isTitle }) => {
  return (
    <Link href={`${isHome ? "#" : "/"}`}>
      <a>
        {isTitle ? (
          <h1 className="text-lg font-bold">
            <span className="text-green">Grzegorz </span>
            <span className="text-gray">Pokorski</span>
          </h1>
        ) : (
          <>
            <span className="text-lg font-bold text-green">Grzegorz </span>
            <span className="text-lg font-bold text-gray">Pokorski</span>
          </>
        )}
      </a>
    </Link>
  );
};

export default Logo;

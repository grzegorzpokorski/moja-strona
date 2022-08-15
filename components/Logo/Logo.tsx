import Link from "../Link";

type LogoProps = {
  isHome?: boolean;
  isTitle?: boolean;
};

const Logo = ({ isHome, isTitle }: LogoProps) => {
  return (
    <Link
      href={`${isHome ? "#" : "/"}`}
      className="transition hover:opacity-60"
    >
      {isTitle ? (
        <h1 className="text-lg font-bold">
          <span className="text-green">Grzegorz </span>
          <span className="text-gray dark:text-white">Pokorski</span>
        </h1>
      ) : (
        <>
          <span className="text-lg font-bold text-green">Grzegorz </span>
          <span className="text-lg font-bold text-gray dark:text-white">
            Pokorski
          </span>
        </>
      )}
    </Link>
  );
};

export default Logo;

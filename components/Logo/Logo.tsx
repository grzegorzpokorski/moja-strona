import { Link } from "../Link/Link";

type LogoProps = {
  isHome?: boolean;
  isTitle?: boolean;
};

export const Logo = ({ isHome, isTitle }: LogoProps) => {
  return (
    <Link href={`${isHome ? "#" : "/"}`} className="transition hover:opacity-60">
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
    </Link>
  );
};

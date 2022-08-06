import { FC } from "react";
import Link from "../Link";

type Props = {
  isHome?: boolean;
  isTitle?: boolean;
};

const Logo: FC<Props> = ({ isHome, isTitle }) => {
  return (
    <Link
      href={`${isHome ? "#" : "/"}`}
      className="transition hover:opacity-60"
    >
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

export default Logo;

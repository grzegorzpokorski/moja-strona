import { FC, ReactNode } from "react";

type MainType = {
  children: ReactNode;
  withMarginOnTop?: boolean;
};

const Main: FC<MainType> = ({ children, withMarginOnTop }) => {
  return (
    <main id="tresc" className={`${withMarginOnTop ? "mt-20 lg:mt-28" : ""}`}>
      {children}
    </main>
  );
};

export default Main;

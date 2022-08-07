import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
  withMarginOnTop?: boolean;
};

const Main = ({ children, withMarginOnTop }: MainProps) => {
  return (
    <main id="tresc" className={`${withMarginOnTop ? "mt-20 lg:mt-28" : ""}`}>
      {children}
    </main>
  );
};

export default Main;

import { ReactNode } from "react";
import { Footer } from "../Footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <a href="#tresc" className="fixed py-4 px-8 m-4 bg-gray-500 text-white skip-link">
        Przejdź do treści
      </a>
      {children}
      <Footer />
    </>
  );
};

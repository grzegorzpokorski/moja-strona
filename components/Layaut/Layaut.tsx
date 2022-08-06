import { FC } from "react";
import Footer from "../Footer";

const Layaut: FC = ({ children }) => {
  return (
    <>
      <a
        href="#tresc"
        className="fixed py-4 px-8 m-4 bg-gray-500 text-white skip-link"
      >
        Przejdź do treści
      </a>
      {children}
      <Footer />
    </>
  );
};

export default Layaut;

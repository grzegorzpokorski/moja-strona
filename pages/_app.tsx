import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "./../styles/style.scss";

import Layaut from "../components/Layaut";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layaut>
      <Component {...pageProps} />
    </Layaut>
  );
};

export default MyApp;

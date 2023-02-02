import type { AppProps } from "next/app";
import "./../styles/style.scss";

import { Rubik } from "@next/font/google";
const rubik = Rubik({
  subsets: ["latin", "latin-ext"],
});

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { Layout } from "../components/Layout/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

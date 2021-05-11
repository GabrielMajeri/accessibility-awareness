import Head from "next/head";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import "../styles/global.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Și eu pot să lucrez</title>
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
        rel="stylesheet"
      />
    </Head>

    <NavBar />

    <main>
      <Component {...pageProps} />
    </main>
  </>
);

export default MyApp;

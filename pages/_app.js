import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script strategy="beforeInteractive" src="/script.js" />
    </>
  );
}

export default MyApp;

import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

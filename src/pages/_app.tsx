import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Crisp from "../components/CrispChat";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      {/* <Crisp /> */}
    </>
  );
};

export default MyApp;

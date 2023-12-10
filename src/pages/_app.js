import Head from "next/head";

import { useEffect } from "react";

import Foot from "@/components/footer/footInd";
import Header from "@/components/headerIndex";
import { GlobalStyles } from "@/styles/globalSty"

GlobalStyles();
export default function App({ Component, pageProps }) {
  return(
  <>
    <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>vinspage</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icon512_rounded.png"
          rel="icon"
          type="image/png"
        />
        <link
          href="/icon512_maskable.png"
          rel="icon"
          type="image/png"
        />
        <meta name="theme-color" content="rgba(255,255,255,0.2)" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Foot/>
  </>)
}

import { useEffect } from "react";
import theme, { globalStyles } from "../../styles/theme";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import configuredSanityClient, { previewMode } from "../sanity";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faSnapchatGhost,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

library.add(
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faSnapchatGhost,
  faYoutube,
  faArrowRight
);

import { ThemeProvider, Global } from "@emotion/react";

function MyApp({ Component, pageProps, data }: any) {
  useEffect(() => {
    const WebFont = require("webfontloader");
    if (typeof window !== "undefined") {
      WebFont.load({
        typekit: {
          id: "ygk6hzk",
        },
      });
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo {...SEO} />
      <Global styles={globalStyles} />
      <SWRConfig
        value={{
          refreshInterval: previewMode ? 60000 : 0,
          fetcher: (query: string) => configuredSanityClient.fetch(query),
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;

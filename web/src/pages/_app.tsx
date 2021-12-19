import type { AppProps } from "next/app";
import { useEffect } from "react";
import theme from "../../styles/theme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { normalize } from "polished";
import { SWRConfig } from "swr";
import sanity, { previewMode } from "../sanity";

import { ThemeProvider, Global, css } from "@emotion/react";

const globalStyles = css`
  ${normalize()}

  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body,
  body {
    font-family: proxima-nova, sans-serif;
  }

  p,
  blockquote,
  ul {
    font-size: 1.1rem;
    line-height: 1.75rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  footer {
    flex-shrink: 0;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
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
      <Global styles={globalStyles} />
      <SWRConfig
        value={{
          refreshInterval: previewMode ? 5000 : 0,
          fetcher: (query: string) => sanity.fetch(query),
        }}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
    </ThemeProvider>
  );
}
export default MyApp;

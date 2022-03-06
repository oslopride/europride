import { useEffect } from "react";
import theme from "../../styles/theme";
import { normalize } from "polished";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import configuredSanityClient, { previewMode } from "../sanity";

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

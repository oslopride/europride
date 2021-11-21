import type { AppProps } from "next/app";
import { useEffect } from "react";
import theme from "../styles/theme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { normalize } from "polished";

import { ThemeProvider, Global, css } from "@emotion/react";

const globalStyles = css`
  ${normalize()}

  * {
    box-sizing: border-box;
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

  footer {
    flex-shrink: 0;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  /** SSR rendering requires us to load the font only when client is ready */
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
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </ThemeProvider>
  );
}
export default MyApp;

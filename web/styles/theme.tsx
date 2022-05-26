import { normalize } from "polished";
import { css } from "@emotion/react";

const theme = {
  colors: {
    white: "#FFF",
    black: "#000",
    greenDark: "#049648",
    backgroundGrey: "#F5F5F5",
    purpleDark: "#4E134C",
    purpleLight: "#91288C",
    blueLight: "#2A3B8F",
    blueDark: "#19134B",
    neutralDark: "#221F20",
    neutralGrey: "#464646",
    orangeLight: "#F9A61A",
    orangeDark: "#F27323",
    redLight: "#ED2F25",
    redDark: "#A61E22",
  },
  gradients: {
    purple: `-webkit-linear-gradient(
      top left,
      #4E134C,
      #91288C
    )`,
    orange: `-webkit-linear-gradient(
      45deg,
      #F27323,
      #F9A61A
    )`,
    green: `-webkit-linear-gradient(
      top left,
      #049648,
      #8DC343
    )`,
    greenYellow: `-webkit-linear-gradient(
    340.3deg, #049648 6.27%, #8DC343 29.71%, #FCBB16 50.63%, #91288C 83.27%
    )`,
    red: `-webkit-linear-gradient(
      360deg, #A61E22 0%, #ED2F25 82.17%
    )`,
  },
  breakpoints: {
    mobile: 0,
    tablet: 640,
    laptop: 900,
    desktop: 1000,
  },
};

export const globalStyles = css`
  ${normalize()}

  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    font-family: proxima-nova, sans-serif;
  }

  p {
  }
  li,
  blockquote,
  ul {
    font-size: 1.1rem;
    line-height: 1.75rem;
    color: ${theme.colors.neutralGrey};
  }

  h4,
  h2,
  h3 {
    margin: 15px 0;
    line-height: 1.75rem;
  }

  li {
    line-height: 2rem;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.neutralDark};
  }

  .socials {
    &:hover {
      color: ${theme.colors.purpleLight};
    }
  }

  .colorBlock-arrow {
    font-size: 24px;
    color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s;
    &:hover {
      color: ${theme.colors.orangeLight};
    }
  }
`;

export default theme;

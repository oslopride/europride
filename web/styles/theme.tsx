const theme = {
  colors: {
    white: "#FFF",
    black: "#000",
    greenDark: "#049648",
    neutralGray: "#F5F5F5",
    purpleDark: "#4E134C",
    purpleLight: "#91288C",
    blueLight: "#2A3B8F",
    neutralDark: "#221F20",
    neutralGrey: "#464646",
  },
  gradients: {
    purple: `-webkit-linear-gradient(
      top left,
      #4E134C,
      #91288C
    );`,
    orange: `-webkit-linear-gradient(
      top left,
      #F27323,
      #F9A61A
    );`,
    green: `-webkit-linear-gradient(
      top left,
      #049648,
      #8DC343
    );`,
    greenYellow: `-webkit-linear-gradient(
      320deg,
      #049648,
      #8DC343,
      #FCBB16,
      #91288C

    );`,
  },
  breakpoints: {
    mobile: 0,
    tablet: 640,
    laptop: 900,
    desktop: 1000,
  },
};

export default theme;

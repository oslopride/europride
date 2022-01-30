export interface StyledProps {
  theme?: ITheme;
}

export interface ITheme {
  colors?: IColors;
  breakpoints?: IBreakpoints;
  gradients?: IGradients;
}

interface IColors {
  white: string;
  black: string;
  greenDark: string;
  neutralGray: string;
  purpleDark: string;
  purpleLight: string;
  blueLight: string;
  neutralDark: string;
  neutralGrey: string;
}

interface IGradients {
  purple: string;
  green: string;
  orange: string;
  greenYellow: string;
}

interface IBreakpoints {
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
}

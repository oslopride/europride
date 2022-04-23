export type Gradient = IGradients[keyof IGradients];

export interface ITheme {
  colors?: IColors;
  breakpoints?: IBreakpoints;
  gradients?: IGradients;
}

export interface IColors {
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

export interface IGradients {
  purple: string;
  green: string;
  orange: string;
  greenYellow: string;
}

export interface IBreakpoints {
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
}

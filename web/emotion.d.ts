import '@emotion/react';
import {IColors, IBreakpoints, IGradients} from './src/types/theme';
    
declare module '@emotion/react' {
  export interface Theme {
    colors: IColors;
    breakpoints: IBreakpoints;
    gradients: IGradients;
  }
}

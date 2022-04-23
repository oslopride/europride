import styled from "@emotion/styled";
import { Gradient } from "../../types/theme";
import { Theme } from "@emotion/react";

type ElementStyleProps = {
  theme?: Theme;
  gradient?: Gradient;
};

export const Wrapper = styled.div<ElementStyleProps>`
  display: flex;
  flex-direction: column;
  margin: 0 22px 22px 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0 26px 26px 26px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: 0 80px 80px 80px;
  }
`;

export const Header = styled.h1<ElementStyleProps>`
  font-size: 40px;
  background: ${({ theme, gradient }) =>
    gradient ? gradient : theme?.gradients?.greenYellow};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 60px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 80px;
  }
  margin: 16px 0;
`;

export const Subheader = styled.h2`
  font-size: 16px;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  align-self: center;
`;

export const Anchor = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: blue;
`;

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
  text-align: left;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.neutralGrey};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  align-self: center;
  margin: 48px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 62px 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    font-size: 80px;
  }
`;

export const Anchor = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: blue;
`;

export const Spacer = styled.div`
  margin: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 12px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: 16px;
  }
`;

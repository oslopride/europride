import styled from "@emotion/styled";
import { StyledProps } from "../../types/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px 12px 12px;
  @media (min-width: ${({ theme }: any) => theme.breakpoints.tablet}px) {
    margin: 0 24px 24px 24px;
  }
  @media (min-width: ${({ theme }: any) => theme.breakpoints.desktop}px) {
    margin: 0 80px 80px 80px;
  }
`;

export const Header = styled.h1`
  font-size: 40px;
  background: ${({ theme }: StyledProps) => theme?.gradients?.greenYellow};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.tablet}px) {
    font-size: 60px;
  }
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.desktop}px) {
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

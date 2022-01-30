import React from "react";
import styled from "@emotion/styled";

const Volunteers = () => {
  return <Wrapper></Wrapper>;
};

export default Volunteers;

const Wrapper = styled.div`
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

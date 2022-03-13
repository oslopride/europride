import Link from "next/link";
import styled from "@emotion/styled";

export default function ErrorNotFound() {
  return (
    <Wrapper>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </Wrapper>
  );
}

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

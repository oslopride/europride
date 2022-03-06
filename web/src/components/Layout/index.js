import Header from "./Header";
import Footer from "./Footer";
import styled from "@emotion/styled";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

const Content = styled.main`
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

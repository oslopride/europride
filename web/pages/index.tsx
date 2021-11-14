import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header";
import projectId from "../lib/projectId";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Footer from "../components/Footer";

const Home: NextPage = ({}) => {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Header />
        <Body>
          <div>Hot Reload</div>
        </Body>
        <Footer />
      </ThemeProvider>
    </Layout>
  );
};

export const getServerSideProps = async (pageContext: any) => {
  const query = encodeURIComponent(' *[ _type == "post" ]');
  const url = `https://${projectId}.api.sanity.io/v1/data/query/production?query=${query}`;
  const data = await fetch(url).then((res) => res.json());
  if (!data) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: data.result,
      },
    };
  }
};

const Layout = styled.div`
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Body = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;
  padding: 0 80px;
`;

export default Home;

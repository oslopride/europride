import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import projectId from "../lib/projectId";

const Home: NextPage = (props) => {
  return (
    <>
      <Header />
      <div>Hot Reload</div>
    </>
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

export default Home;

import type { NextPage } from "next";
import styled from "styled-components";
import projectId from "../lib/projectId";

const Home: NextPage = ({}) => {
  return (
    <>
      <Body>
        <div>Jeg lastes inn automatisk! Wow!</div>
      </Body>
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

const Body = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0 20%;
  background-color: red;
`;

export default Home;

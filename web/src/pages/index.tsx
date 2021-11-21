import type { NextPage } from "next";
import { useEffect } from "react";
import styled from "styled-components";
import projectId from "../utils/projectId";
import useSWR from "swr";
import sanity, { PROJECT_ID, DATASET } from "../sanity";
import groq from "groq";
import BlockContentToReact from "@sanity/block-content-to-react";

const Home: NextPage = (props) => {
  const serializers = {
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };

  const SanityBlock = ({ blocks }: any) => {
    return (
      <BlockContentToReact
        blocks={blocks}
        projectId={PROJECT_ID}
        dataset={DATASET}
        imageOptions={{ w: 1000, fit: "max" }}
      />
    );
  };

  const renderContent = () => {
    const { data, error } = useSWR(groq`*[_type == 'frontPage']`, (query) =>
      sanity.fetch(query)
    );
    if (error) return <div>Failed {JSON.stringify(error)}</div>;
    if (!data) return <div>Loading...</div>;
    console.log(data);
    return <SanityBlock blocks={data[0].body.no} />;
  };

  return (
    <>
      <Body>{renderContent()}</Body>
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
  height: 100%;
  padding: 0 20%;
`;

export default Home;

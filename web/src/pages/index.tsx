import type { NextPage } from "next";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import configuredSanityClient, { PROJECT_ID, DATASET } from "../sanity";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import SanityBlock from "../components/SanityBlock";

const Home: NextPage = ({ data }: any) => {
  const theme: any = useTheme();
  const mainImageProps = useNextSanityImage(
    configuredSanityClient,
    data.header.image
  );

  // TODO: refactor to implement createsanityimage
  const renderContent = () => {
    const gradient = theme.gradients.greenYellow;
    return (
      <>
        <SubHeader>{data.header.subHeading.eng}</SubHeader>
        <Header gradient={gradient}>{data.header.title.eng}</Header>
        <Img
          {...mainImageProps}
          layout="responsive"
          sizes="(max-width: 800px) 100vw, 800px"
        />
        <BodyTitle>{data.header.subtitle.eng}</BodyTitle>
        <SanityBlock blocks={data?.body.eng} />
      </>
    );
  };

  return <Main>{renderContent()}</Main>;
};

export const getServerSideProps = async (pageContext: any) => {
  const data = await configuredSanityClient.fetch(`*[_type == "frontPage"][0]`);
  if (!data) {
    return {
      props: {
        data: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
      },
    };
  }
};

const Header = styled.h1`
  font-size: 84px;
  background: -webkit-linear-gradient(
    320deg,
    ${(props: { gradient: string[] }) => props.gradient.join(", ")}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubHeader = styled.h2`
  font-size: 24px;
`;

const BodyTitle = styled.h3``;

const Body = styled.p``;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
  margin: 0 100px;
`;

export default Home;

import type { NextPage } from "next";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import SanityBlock from "../components/SanityBlock";
import { ITheme, StyledProps } from "../types/theme";

const Home: NextPage = ({ data }: any) => {
  const theme: ITheme = useTheme();
  const mainImageProps = useNextSanityImage(
    configuredSanityClient,
    data.header.image
  );

  // TODO: refactor to implement createsanityimage
  const renderContent = () => {
    return (
      <>
        <SubHeader>{data.header.subHeading.eng}</SubHeader>
        <Header>{data.header.title.eng}</Header>
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

export const getServerSideProps = async () => {
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
  font-size: 40px;
  background: ${({ theme }: StyledProps) => theme?.gradients?.greenYellow}
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
`;

const SubHeader = styled.h2`
  font-size: 24px;
  text-align: center;
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.tablet}px) {
    text-align: left;
  }
`;

const BodyTitle = styled.h3``;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
  height: 100%;
  max-width: 100%;
  align-self: center;
  margin: 24px;
  max-width: 1200px;
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.tablet}px) {
    margin: 38px;
  }
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.desktop}px) {
    margin: 80px;
  }
`;

export default Home;

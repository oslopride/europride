import type { NextPage } from "next";
import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import CreateSanityImage from "../components/CreateSanityImage";
import { StyledProps } from "../types/theme";
import SanityBlock from "../components/SanityBlock";
import PartnerBox from "../components/PartnerBox";

const Home: NextPage = ({ data, partners, config }: any) => {
  return (
    <>
      <Wrapper>
        <SubHeader>{data.header.subHeading.eng}</SubHeader>
        <Header>{data.header.title.eng}</Header>
        <HeroImageWrapper>
          <CreateSanityImage
            url={data.header.image}
            alt={data.header.title.eng}
          />
        </HeroImageWrapper>
        <BlockWrapper>
          <SanityBlock blocks={data?.body.eng} />
        </BlockWrapper>
      </Wrapper>
      <PartnerBox partners={partners} config={config} />
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await configuredSanityClient.fetch(`*[_type == "frontPage"][0]`);
  const partners = await configuredSanityClient.fetch(`*[_type == "partner"]`);
  const config = await configuredSanityClient.fetch(
    `*[_type == "webConfiguration"][0].partners`
  );
  if (!data) {
    return {
      props: {
        data: [],
        partners: [],
        config: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
        partners: partners,
        config: config,
      },
    };
  }
};

const Wrapper = styled.div<StyledProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
  align-self: center;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}px) {
    padding: 38px;
  }
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.desktop}px) {
    padding: 80px;
  }
`;

const Header = styled.h1`
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
`;

const BlockWrapper = styled.div`
  align-self: center;
  margin: 0 auto;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px;
`;

const SubHeader = styled.h2`
  font-size: 24px;
  text-align: center;
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.tablet}px) {
    text-align: left;
  }
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  align-self: center;
`;

export default Home;

import type { NextPage } from "next";
import styled from "@emotion/styled";
import configuredSanityClient, { urlFor } from "../sanity";
import CreateSanityImage from "../components/CreateSanityImage";
import SanityBlock from "../components/SanityBlock";
import PartnerBox from "../components/PartnerBox";
import { NextSeo } from "next-seo";
import { Header, Wrapper, Subheader } from "../components/common";
import GradientButton from "../components/GradientButton";

const Home: NextPage = ({ data, partners, config }: any) => {
  const title = data?.header?.title?.eng;
  const description = data?.header?.subHeading?.eng;
  const image = data?.header?.image?.asset;
  const value = data?.body?.eng;
  const leftButton = data?.header?.leftButtonLink?.[0];
  const rightButton = data?.header?.rightButtonLink?.[0];
  const ogImageUrl = image ? urlFor(image).width(800).url() : "";

  const openGraph = {
    url: `https://www.europride2022.com/`,
    title: title,
    description: description,
    ...(image && {
      images: [
        {
          url: ogImageUrl,
          alt: description,
          type: "image/jpeg",
        },
      ],
    }),
  };

  return (
    <>
      <Wrapper>
        <NextSeo
          title={title}
          description={description}
          openGraph={openGraph}
        />
        <Subheader>{description}</Subheader>
        <Header>{title}</Header>
        <HeaderButtons>
          {/* TODO - make this an array in Sanity and map */}
          <GradientButton title={leftButton?.text?.eng} href={leftButton} />
          <Spacer />
          <GradientButton
            gradient="green"
            title={rightButton?.text?.eng}
            href={rightButton}
          />
        </HeaderButtons>
        <HeroImageWrapper>
          <CreateSanityImage url={image} alt={description} />
        </HeroImageWrapper>
        <BlockWrapper>
          <SanityBlock value={value} />
        </BlockWrapper>
      </Wrapper>
      {/* <PartnerBox partners={partners} config={config} /> */}
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

const HeaderButtons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 10px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
    align-items: flex-start;
    margin: 32px 0 40px 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex-direction: row;
    align-items: flex-start;
    margin: 64px 0 80px 0;
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

const HeroImageWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  align-self: center;
`;

const Spacer = styled.div`
  margin: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 12px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: 16px;
  }
`;

export default Home;

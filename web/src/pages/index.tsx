import type { NextPage } from "next";
import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import Img from "next/image";
import CreateSanityImage from "../components/CreateSanityImage";
import { useNextSanityImage } from "next-sanity-image";
import SanityBlock from "../components/SanityBlock";
import { StyledProps } from "../types/theme";

const Home: NextPage = ({ data, partners }: any) => {
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
      <PartnerWrapper>
        <PartnerHeader>{data?.header?.partnerHeader?.eng}</PartnerHeader>
        <PartnerImagesWrapper>
          {partners.map((partner: any) => {
            console.log(partner.image);
            return (
              <PartnerImageWrapper key={partner.name + partner.slug.current}>
                <CreateSanityImage
                  url={partner.image.asset}
                  alt={partner.name}
                />
              </PartnerImageWrapper>
            );
          })}
        </PartnerImagesWrapper>
      </PartnerWrapper>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await configuredSanityClient.fetch(`*[_type == "frontPage"][0]`);
  const partners = await configuredSanityClient.fetch(`*[_type == "partner"]`);
  if (!data) {
    return {
      props: {
        data: [],
        partners: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
        partners: partners,
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

const PartnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  padding: 30px;
  @media (min-width: ${({ theme }: StyledProps) =>
    theme?.breakpoints?.tablet}px) {
    padding: 63px;
  }
}
  width: 100%;
`;

const PartnerHeader = styled.p`
  font-size: 24px;
  font-weight: 800;
  align-items: center;
  max-width: 1440px;
`;

const PartnerImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 40%;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
`;

const PartnerImageWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 250px;
  max-height: 150px;
  height: 100%;
  width: 100%;
  margin: 0 20px 0 0;
`;

export default Home;

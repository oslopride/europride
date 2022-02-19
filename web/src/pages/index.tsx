import type { NextPage } from "next";
import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import CreateSanityImage from "../components/CreateSanityImage";
import SanityBlock from "../components/SanityBlock";
import { StyledProps } from "../types/theme";

interface ISizes {
  [key: string]: number;
}

const getWidth = (type: string) => {
  const SIZES: ISizes = {
    owner: 250,
    main: 200,
    regular: 150,
  };
  return SIZES[type];
};

const createPartners = (partners: any, type: string) => {
  return (
    <PartnerItem>
      <PartnerRow>
        {partners
          .filter((partner: any) => partner.type === type)
          .map((partner: any) => {
            return (
              <PartnerImageWrapper
                width={getWidth(partner.type)}
                key={partner.name + partner.slug.current}
              >
                <CreateSanityImage
                  url={partner?.image.asset}
                  alt={partner?.name}
                />
              </PartnerImageWrapper>
            );
          })}
      </PartnerRow>
    </PartnerItem>
  );
};

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
      <PartnerContainer>
        <PartnerHeader>{data?.header?.partnerHeader?.eng}</PartnerHeader>
        <PartnerImagesWrapper>
          {createPartners(partners, "owner")}
          {createPartners(partners, "main")}
          {createPartners(partners, "regular")}
        </PartnerImagesWrapper>
      </PartnerContainer>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await configuredSanityClient.fetch(`*[_type == "frontPage"][0]`);
  const partners = await configuredSanityClient.fetch(`*[_type == "partner"]`);
  const config = await configuredSanityClient.fetch(
    `*[_type == "webConfiguration"]`
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

const PartnerContainer = styled.div`
  flex: 1;
  flex-direction: column;
  background: #f5f5f5;
  padding: 30px;
  @media (min-width: ${({ theme }: StyledProps) =>
    theme?.breakpoints?.tablet}px) {
    padding: 63px;
  }
}
`;

const PartnerItem = styled.article`
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(70, 70, 70, 0.5);
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0px;
  }
`;

const PartnerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px 0;
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.tablet}px) {
    flex-direction: row;
  }
`;

const PartnerHeader = styled.p`
  font-size: 24px;
  font-weight: 800;
  align-items: center;
  max-width: 1440px;
`;

const PartnerImagesWrapper = styled.div``;

const PartnerImageWrapper = styled.div<{ width: number }>`
  flex: 1;
  max-width: ${({ width }) => width}px;
  min-width: 150px;
  max-height: 150px;
  margin-right: 10px;
`;

export default Home;

import type { NextPage } from "next";
import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import CreateSanityImage from "../components/CreateSanityImage";
import { StyledProps } from "../types/theme";
import SanityBlock from "../components/SanityBlock";
import PartnerBox from "../components/PartnerBox";
import { Header, Wrapper, Subheader } from "../components/common";

const Home: NextPage = ({ data, partners, config }: any) => {
  return (
    <>
      <Wrapper>
        <Subheader>{data.header.subHeading.eng}</Subheader>
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

export default Home;

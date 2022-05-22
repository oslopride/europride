import type { NextPage } from "next";
import styled from "@emotion/styled";
import configuredSanityClient, { urlFor } from "../sanity";
import CreateSanityImage from "../components/CreateSanityImage";
import SanityBlock from "../components/SanityBlock";
import PartnerBox from "../components/PartnerBox";
import { NextSeo } from "next-seo";
import { Header, Wrapper, Subheader } from "../components/common";

const Home: NextPage = ({ data, partners, config }: any) => {
  const title = data?.header?.title?.eng;
  const description = data?.header?.subHeading?.eng;
  const image = data?.header?.image?.asset;
  const blocks = data?.body?.eng;
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
        <HeroImageWrapper>
          <CreateSanityImage url={image} alt={description} />
        </HeroImageWrapper>
        <BlockWrapper>
          <SanityBlock blocks={blocks} />
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

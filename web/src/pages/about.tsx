import { useEffect } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import configuredSanityClient from "../sanity";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import AnchorButton from "../components/AnchorButton";
import SanityBlock from "../components/SanityBlock";

const About = ({ data }: any) => {
  const mainImageProps = useNextSanityImage(configuredSanityClient, data.image);
  return (
    <Wrapper>
      <Header>{data.header.eng}</Header>
      <Body>{data.subheaderText.eng}</Body>
      <AnchorButton href="#body" text="Read more" />
      <Img
        {...mainImageProps}
        layout="responsive"
        sizes="(max-width: 800px) 100vw, 800px"
      />
      <BlockWrapper id="body">
        <SanityBlock blocks={data?.body.eng} />
      </BlockWrapper>
    </Wrapper>
  );
};

export default About;

const Header = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 84px;
  line-height: 86px;
  background: -webkit-linear-gradient(top left, #049648, #8dc343);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Body = styled.body`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
`;

const BlockWrapper = styled.div`
  margin: 0 270px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 80px;
  flex-direction: column;
`;

export const getServerSideProps = async (pageContext: any) => {
  const data = await configuredSanityClient.fetch(`*[_type == "about"][0]`);
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

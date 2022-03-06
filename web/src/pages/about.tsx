import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import AnchorButton from "../components/AnchorButton";
import SanityBlock from "../components/SanityBlock";
import Volunteer from "../components/Volunteer";
import ErrorNotFound from "./404";

const About = ({ data, volunteers }: any) => {
  if (!data || !volunteers)
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  const mainImageProps = useNextSanityImage(
    configuredSanityClient,
    data.image.asset
  );
  return (
    <Wrapper>
      <TopWrapper>
        <Header>{data.header.eng}</Header>
        <Subheader>{data.subheaderText.eng}</Subheader>
        <AnchorButton href="#body" text="Read more" />
      </TopWrapper>
      <ImageWrapper>
        <Img
          {...mainImageProps}
          layout="responsive"
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </ImageWrapper>
      <BlockWrapper id="body">
        <SanityBlock blocks={data?.body.eng} />
      </BlockWrapper>
      <VolunteerWrapper>
        {volunteers.map((v: any, i: number) => (
          <Volunteer index={i + 1} volunteer={v} key={v.name} />
        ))}
      </VolunteerWrapper>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px 12px 12px;
  @media (min-width: ${({ theme }: any) => theme.breakpoints.tablet}px) {
    margin: 0 24px 24px 24px;
  }
  @media (min-width: ${({ theme }: any) => theme.breakpoints.desktop}px) {
    margin: 0 80px 80px 80px;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-bottom: 30px;
  @media (min-width: ${({ theme }: any) => theme.breakpoints.desktop}px) {
    margin-bottom: 84px;
  }
`;

const Header = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 84px;
  line-height: 86px;
  background: ${({ theme }: any) => theme.gradients.green};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheader = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  max-width: 750px;
  margin: 24px 0px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  align-self: center;
`;

const BlockWrapper = styled.div`
  max-width: 800px;
  align-items: center;
  margin: 0 auto;
`;

const VolunteerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const getServerSideProps = async (pageContext: any) => {
  const data = await configuredSanityClient.fetch(`*[_id == "about"][0]`);
  const volunteers = await configuredSanityClient.fetch(
    `*[_type == "volunteer"]`
  );
  if (!data || !volunteers) {
    return {
      props: {
        data: [],
        volunteers: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
        volunteers: volunteers,
      },
    };
  }
};

import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import AnchorButton from "../components/AnchorButton";
import SanityBlock from "../components/SanityBlock";
import Volunteer from "../components/Volunteer";

const About = ({ data, volunteers }: any) => {
  const mainImageProps = useNextSanityImage(configuredSanityClient, data.image);
  return (
    <Wrapper>
      <Header>{data.header.eng}</Header>
      <Subheader>{data.subheaderText.eng}</Subheader>
      <AnchorButton href="#body" text="Read more" />
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
        {volunteers.map((v: any) => (
          <Volunteer volunteer={v} key={v.name} />
        ))}
      </VolunteerWrapper>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  max-width: 1200px;
  @media (min-width: ${({ theme }: any) => theme.breakpoints.tablet}px) {
    margin: 38px;
  }
  @media (min-width: ${({ theme }: any) => theme.breakpoints.desktop}px) {
    margin: 80px;
  }
`;

const Header = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 84px;
  line-height: 86px;
  background: -webkit-linear-gradient(top left, #049648, #8dc343);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheader = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
`;

const ImageWrapper = styled.div`
  display: flex;
  max-width: 800px;
`;

const BlockWrapper = styled.div``;

const VolunteerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
`;

export const getServerSideProps = async (pageContext: any) => {
  const data = await configuredSanityClient.fetch(`*[_type == "about"][0]`);
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

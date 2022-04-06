import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import AnchorButton from "../components/AnchorButton";
import SanityBlock from "../components/SanityBlock";
import Volunteer from "../components/Volunteer";
import CreateSanityImage from "../components/CreateSanityImage";
import ErrorNotFound from "./404";
import { Wrapper, Header, Subheader } from "../components/common";

const About = ({ data, volunteers }: any) => {
  if (!data || !volunteers)
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  return (
    <Wrapper>
      <TopWrapper>
        <Header>{data.header.eng}</Header>
        <Subheader>{data.subheaderText.eng}</Subheader>
        <AnchorButton href="#body" text="Read more" />
      </TopWrapper>
      <ImageWrapper>
        <CreateSanityImage url={data?.image?.asset} alt={data?.header?.eng} />
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

const TopWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-bottom: 30px;
  @media (min-width: ${({ theme }: any) => theme.breakpoints.desktop}px) {
    margin-bottom: 84px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  align-self: center;
`;

const BlockWrapper = styled.div`
  max-width: 800px;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
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

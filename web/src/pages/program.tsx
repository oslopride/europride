import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import Event from "../components/Event";

const Program = ({ events, data }: any) => {
  return (
    <Wrapper>
      <Title>{data?.title?.eng}</Title>
      <Subheader>{data?.subtitle?.eng}</Subheader>
      <Spacer />
      {events.map((event: any) => (
        <Event event={event} />
      ))}
      <Spacer />
    </Wrapper>
  );
};

export const getServerSideProps = async (pageContext: any) => {
  const data = await configuredSanityClient.fetch(`*[_type == "program"][0]`);
  const events = await configuredSanityClient.fetch(
    `*[_type == "simpleEvent"]`
  );
  if (!data) {
    return {
      props: {
        data: [],
        events: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
        events: events,
      },
    };
  }
};

export default Program;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  @media (min-width: ${({ theme }: any) => theme.breakpoints.tablet}px) {
    margin: 0 24px;
  }
  @media (min-width: ${({ theme }: any) => theme.breakpoints.desktop}px) {
    margin: 0 80px;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 84px;
  line-height: 86px;
  background: -webkit-linear-gradient(top left, #f27323, #f9a61a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Spacer = styled.div`
  margin-top: 30px;
`;

const Subheader = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
`;

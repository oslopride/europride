import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import Event from "../components/Event";
import ErrorNotFound from "./404";
import { useTheme } from "@emotion/react";
import { Wrapper, Header } from "../components/common";

const Program = ({ events, data }: any) => {
  const theme = useTheme();
  if (!events || !data)
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  return (
    <Wrapper>
      <Header gradient={theme.gradients.purple}>{data?.title?.eng}</Header>
      <Subheader>{data?.subtitle?.eng}</Subheader>
      <Spacer />
      {events.map((event: any, i: number) => (
        <Event key={event + i} event={event} />
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

const Spacer = styled.div`
  margin-top: 30px;
`;

const Subheader = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
`;

import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import EventThumbnail from "../components/EventThumbnail";
import ErrorNotFound from "./404";
import { useTheme } from "@emotion/react";
import { Wrapper, Header, Subheader } from "../components/common";
import { NextSeo } from "next-seo";
import { SanityEvent } from "../types/sanity";

const Program = ({ events, data }: any) => {
  const title = data?.title?.eng;
  const description = data?.description?.eng;
  const subtitle = data?.subtitle?.eng;

  const theme = useTheme();
  if (!events || !data)
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  return (
    <Wrapper>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: `https://www.europride2022.com/program`,
          title: title,
          description: description,
        }}
      />
      <Header gradient={theme.gradients.purple}>{title}</Header>
      <Subheader>{subtitle}</Subheader>
      <Spacer />
      <EventWrapper>
        {events.map((event: SanityEvent, i: number) => {
          return <EventThumbnail key={event.slug.current} event={event} />;
        })}
      </EventWrapper>
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

const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    gap: 20px;
  }
`;

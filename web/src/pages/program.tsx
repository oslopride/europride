import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import Event from "../components/Event";
import ErrorNotFound from "./404";
import { useTheme } from "@emotion/react";
import { Wrapper, Header } from "../components/common";
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
      {events.map((event: SanityEvent, i: number) => {
        return <Event key={event.slug.current} event={event} />;
      })}
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

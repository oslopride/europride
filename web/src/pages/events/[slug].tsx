import styled from "@emotion/styled";
import GradientButton from "../../components/GradientButton";
import SanityBlock from "../../components/SanityBlock";
import formatISOTime from "../../utils/formatISOTime";
import { Header, Wrapper, Spacer } from "../../components/common";
import { useTheme } from "@emotion/react";
import { SanityEvent } from "../../types/sanity";
import getRandomGradient from "../../utils/getRandomGradient";
import configuredSanityClient from "../../sanity";

interface EventProps {
  event: SanityEvent;
}

const Event = ({ event }: EventProps) => {
  const theme = useTheme();
  const value = event?.description?.eng;
  const startTime = formatISOTime(event?.startTime, "en-GB");
  const endTime = formatISOTime(event?.endTime, "en-GB");
  return (
    <Wrapper>
      <Header gradient={getRandomGradient(theme.gradients)}>
        {event?.title?.eng}
      </Header>
      <Time>
        {startTime === endTime ? startTime : startTime + " - " + endTime}
      </Time>
      <SanityBlock value={value} />
      <Spacer />
      {event?.eventLink?.url ? (
        <GradientButton
          href={event?.eventLink?.url}
          title={event?.eventLink?.text?.eng}
        />
      ) : null}
    </Wrapper>
  );
};

export default Event;

export async function getStaticPaths() {
  const paths = await configuredSanityClient.fetch(
    `*[_type == "simpleEvent" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params;
  const event = await configuredSanityClient.fetch(
    `
      *[_type == "simpleEvent" && slug.current == $slug][0]
    `,
    { slug }
  );
  return {
    props: {
      event,
    },
  };
}

const Time = styled.p`
  display: flex;
  flex: 1;
  font-size: 24px;
  line-height: 39px;
`;

import styled from "@emotion/styled";
import GradientButton from "../GradientButton";
import SanityBlock from "../SanityBlock";
import formatISOTime from "../../utils/formatISOTime";
import { Header } from "../common";
import { useTheme } from "@emotion/react";
import { SanityEvent } from "../../types/sanity";
import getRandomGradient from "../../utils/getRandomGradient";

interface EventProps {
  event: SanityEvent;
}

const Event = ({ event }: EventProps) => {
  const theme = useTheme();
  const value = event.description.eng;
  return (
    <Wrapper>
      <Header gradient={getRandomGradient(theme.gradients)}>
        {event?.title?.eng}
      </Header>
      <Time>{`${formatISOTime(event.startTime, "en-GB")} - ${formatISOTime(
        event.endTime,
        "en-GB"
      )}`}</Time>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  margin-top: 30px;
`;

const Time = styled.p`
  display: flex;
  flex: 1;
  font-size: 24px;
  line-height: 39px;
`;

import styled from "@emotion/styled";
import GradientButton from "../GradientButton";
import SanityBlock from "../SanityBlock";
import formatISOTime from "../../utils/formatISOTime";
import { Header } from "../common";
import { useTheme } from "@emotion/react";
import { IGradients, Gradient } from "../../types/theme";
import { SanityEvent } from "../../types/sanity";

interface EventProps {
  event: SanityEvent;
}

const Event = ({ event }: EventProps) => {
  const theme = useTheme();
  const gradients: Gradient[] = Object.values(theme.gradients as IGradients);
  const random = gradients[Math.floor(Math.random() * gradients.length)];
  const blocks = event.description.eng;
  return (
    <Wrapper>
      <Header gradient={random}>{event?.title?.eng}</Header>
      <Time>{`${formatISOTime(event.startTime, "en-GB")} - ${formatISOTime(
        event.endTime,
        "en-GB"
      )}`}</Time>
      <SanityBlock blocks={blocks} />
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

import styled from "@emotion/styled";
import GradientButton from "../GradientButton";
import SanityBlock from "../SanityBlock";
import formatISOTime from "../../utils/formatISOTime";

const Event = ({ event }: any) => {
  return (
    <Wrapper>
      <Title>{event?.title?.eng}</Title>
      <Time>{`${formatISOTime(event.startTime, "en-GB")} - ${formatISOTime(
        event.endTime,
        "en-GB"
      )}`}</Time>
      <SanityBlock blocks={event?.description?.eng} />
      <Spacer />
      {event?.eventLink?.url ? (
        <GradientButton
          href={event?.eventLink?.url}
          title={event?.eventLink?.text?.eng}
          width={170}
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

const Title = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 86px;
  background: -webkit-linear-gradient(top left, #000, #000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

import styled from "@emotion/styled";
import formatISOTime from "../../utils/formatISOTime";
import { SanityEvent } from "../../types/sanity";
import { urlFor } from "../../sanity";
import Link from "next/link";

interface EventProps {
  event: SanityEvent;
}

const EventThumbnail = ({ event }: EventProps) => {
  const image = urlFor(event.image).height(1280).url();
  const title = event?.title?.eng;
  const startTime = formatISOTime(event?.startTime, "en-GB");
  const endTime = formatISOTime(event?.endTime, "en-GB");
  return (
    <Link href={"events/" + encodeURIComponent(event.slug.current)}>
      <ImageWrapper image={image}>
        <Title>{title}</Title>
        <Time>
          {startTime === endTime ? startTime : startTime + " - " + endTime}
        </Time>
      </ImageWrapper>
    </Link>
  );
};

export default EventThumbnail;

const ImageWrapper = styled.div`
  flex: 1 0 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: -webkit-linear-gradient(
      260deg,
      rgba(0, 0, 0, 0) 37.78%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${(props: { image: string }) => props.image});
  background-color: white;
  width: 620px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  padding: 16px;
  transition: all 0.3s ease-in-out;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 24px;
    flex: 0 0 40%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: 32px;
  }
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #fff;
`;

const Time = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
`;

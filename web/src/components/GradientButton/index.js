import styled from "@emotion/styled";
import SanityLink from "../SanityLink";

export const GradientButton = ({
  text = "",
  backgroundColor = "#FFF",
  textColor = "#000",
  gradient = ["#0000", "#0000"],
  href = "/",
  width = 101,
}) => {
  return (
    <Touchable
      width={width}
      gradient={gradient}
      backgroundColor={backgroundColor}
    >
      <Title textColor={textColor} backgroundColor={backgroundColor}>
        <SanityLink href={href} text={text} />
      </Title>
    </Touchable>
  );
};

const Touchable = styled.button`
  cursor: pointer;
  border-width: 4px;
  border-image: linear-gradient(
      to right,
      ${({ gradient }) => gradient[0]},
      ${({ gradient }) => gradient[1]}
    )
    1 100%;
  border-image-slice: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  max-width: 100%;
  width: ${({ width }) => width}px;
  height: 48px;
  max-height: 100%;
`;

const Title = styled.p`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

export default GradientButton;

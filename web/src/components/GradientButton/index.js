import styled from "@emotion/styled";
import SanityLink from "../SanityLink";

export const GradientButton = ({
  title = "",
  backgroundColor = "#FFF",
  titleColor = "#000",
  link = "/",
  width = 101,
  gradient = "orange",
}) => {
  return (
    <Touchable width={width} backgroundColor={backgroundColor}>
      <Title textColor={titleColor} backgroundColor={backgroundColor}>
        <SanityLink link={link} title={title} />
      </Title>
    </Touchable>
  );
};

const Touchable = styled.button`
  cursor: pointer;
  border-width: 4px;
  border-image: ${({ theme }) => theme.gradients.orange} 1 100%;
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

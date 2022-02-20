import styled from "@emotion/styled";
import theme from "../../../styles/theme";
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
    <Touchable
      gradient={theme.gradients[gradient]}
      width={width}
      backgroundColor={backgroundColor}
    >
      <Title textColor={titleColor} backgroundColor={backgroundColor}>
        <SanityLink link={link} title={title} />
      </Title>
    </Touchable>
  );
};

const Touchable = styled.button`
  cursor: pointer;
  transform: rotate(0deg);
  border-width: 4px;
  background-color: transparent;
  border-image: ${({ gradient }) => gradient};
  border-image-slice: 1;
  max-width: 100%;
  width: ${({ width }) => width}px;
  height: 48px;
  overflow: hidden;
  max-height: 100%;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    opacity: 0;
  }

  &::after {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: ${({ width }) => width}px;
    background: ${({ gradient }) => gradient};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Title = styled.p`
  color: ${({ textColor }) => textColor};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

export default GradientButton;

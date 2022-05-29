import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import SanityLink from "../SanityLink";

export const GradientButton = ({
  title = "",
  backgroundColor = "#FFF",
  titleColor = "#000",
  href = "/",
  gradient = "orange",
}) => {
  return (
    <SanityLink href={href}>
      <Touchable
        gradient={theme.gradients[gradient]}
        backgroundColor={backgroundColor}
      >
        <Title textColor={titleColor} backgroundColor={backgroundColor}>
          {title}
        </Title>
      </Touchable>
    </SanityLink>
  );
};

const Touchable = styled.button`
  cursor: pointer;
  transform: rotate(0deg);
  border-width: 4px;
  width: 100%;
  background-color: transparent;
  border-image: ${({ gradient }) => gradient};
  border-image-slice: 1;
  max-width: 100%;
  padding: 10px 15px;
  overflow: hidden;
  max-height: 100%;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 10px 20px;
    width: auto;
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
      background: ${({ gradient }) => gradient};
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s;
    }

    &:hover::after {
      opacity: 1;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    padding: 10px 25px;
    width: auto;
  }
`;

const Title = styled.p`
  color: ${({ textColor }) => textColor};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

export default GradientButton;

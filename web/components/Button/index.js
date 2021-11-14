import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const Button = ({
  text = "",
  onPress,
  backgroundColor = theme.colors.white,
  textColor = theme.colors.black,
  gradient = [theme.colors.white, theme.colors.black],
}) => {
  return (
    <Touchable
      gradient={gradient}
      onClick={onPress}
      backgroundColor={backgroundColor}
    >
      <Text textColor={textColor} backgroundColor={backgroundColor}>
        {text}
      </Text>
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
  padding: 16px 24px 16px 24px;
`;

const Text = styled.p`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  padding: 0;
  margin: 0;
`;

export default Button;

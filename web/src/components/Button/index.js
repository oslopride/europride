import React from "react";
import styled from "@emotion/styled";

export const Button = ({
  text = "",
  onClick,
  backgroundColor = "#FFF",
  textColor = "#000",
  gradient = ["#FFF", "#000"],
}) => {
  return (
    <Touchable
      gradient={gradient}
      onClick={onClick}
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
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
`;

export default Button;

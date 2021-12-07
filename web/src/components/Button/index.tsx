import React from "react";
import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";

interface IButtonProps {
  text?: String;
  onClick: () => void;
  backgroundColor?: string;
  textColor: string;
  gradient: string[];
}

export const Button = ({
  text = "",
  onClick,
  backgroundColor = "#FFF",
  textColor = "#000",
  gradient = ["#FFF", "#000"],
}: IButtonProps) => {
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

interface ITouchableProps {
  gradient: string[];
  backgroundColor: string;
}

const Touchable = styled.button<ITouchableProps>`
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

interface ITextProps {
  backgroundColor: string;
  textColor: string;
}

const Text = styled.p<ITextProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  padding: 0;
  margin: 0;
`;

export default Button;

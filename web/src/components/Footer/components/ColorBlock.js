import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import theme from "../../../../styles/theme";
import Link from "next/link";

const ColorBlockButton = ({ color = "#fff", text, linkTo = "/" }) => {
  console.log(linkTo);
  return (
    <Link href={linkTo}>
      <Block color={color}>
        <>
          <Text>{text}</Text>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="1x"
            color={theme.colors.white}
          />
        </>
      </Block>
    </Link>
  );
};

const Block = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  width: 100%;
  background-color: ${(props) => props.color};
  border: none;
`;

const Text = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

export default ColorBlockButton;

import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ColorBlockButton = ({ color = "#fff", title, linkTo = "/" }) => {
  const theme = useTheme();
  return (
    <Link href={linkTo}>
      <Block color={color}>
        <Title>{title}</Title>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="1x"
          color={theme.colors.white}
        />
      </Block>
    </Link>
  );
};

const Block = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 32px;
  }
  width: 100%;
  background-color: ${(props) => props.color};
  border: none;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

export default ColorBlockButton;

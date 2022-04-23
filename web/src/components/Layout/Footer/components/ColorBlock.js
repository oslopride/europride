import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SanityLink from "../../../SanityLink";

const ColorBlockButton = ({ color = "#fff", title, linkTo = "/" }) => {
  const theme = useTheme();
  return (
    <SanityLink
      containerStyle={{ display: "flex", width: "100%" }}
      href={linkTo}
    >
      <Block color={color}>
        <Row>
          <Title>{title}</Title>
          <FontAwesomeIcon
            icon={"arrow-right"}
            size="1x"
            color={theme.colors.white}
          />
        </Row>
      </Block>
    </SanityLink>
  );
};

const Block = styled.div`
  display: flex;
  cursor: pointer;
  padding: 48px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 32px;
  }
  width: 100%;
  background-color: ${(props) => props.color};
  border: none;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

export default ColorBlockButton;

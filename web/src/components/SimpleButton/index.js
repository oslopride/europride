import styled from "@emotion/styled";
import SanityLink from "../SanityLink";

export const SimpleButton = ({ text = "", textColor = "#000", href = "/" }) => {
  return (
    <Touchable>
      <Title textColor={textColor}>
        <SanityLink href={href} text={text} />
      </Title>
    </Touchable>
  );
};

const Touchable = styled.a`
  cursor: pointer;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.p`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;
`;

export default SimpleButton;

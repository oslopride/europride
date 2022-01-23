import styled from "@emotion/styled";
import SanityLink from "../SanityLink";

export const SimpleButton = ({
  title = "",
  titleColor = "#000",
  link = "/",
}) => {
  return (
    <Touchable>
      <Title textColor={titleColor}>
        <SanityLink link={link} title={title} />
      </Title>
    </Touchable>
  );
};

const Touchable = styled.button`
  cursor: pointer;
  margin-bottom: 20px;
  background: transparent;
  border: none;
`;

const Title = styled.p`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  text-decoration: underline;
`;

export default SimpleButton;

import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import getRandomGradient from "../../utils/getRandomGradient";

const AnchorLink = ({ children, href, rel }) => {
  const theme = useTheme();
  return (
    <Anchor href={href} rel={rel}>
      <Text gradient={getRandomGradient(theme.gradients)}>{children}</Text>
    </Anchor>
  );
};

export default AnchorLink;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.neutralDark};
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-image: ${({ gradient }) => gradient + "1"};
  font-size: 16px;
  line-height: 19px;
`;

const Anchor = styled.a`
  display: inline-block;
  margin-bottom: 10px;
`;

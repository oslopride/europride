import styled from "@emotion/styled";

const AnchorButton = ({ text, href }) => {
  return (
    <Border href={href}>
      <Text>{text}</Text>
    </Border>
  );
};

export default AnchorButton;

const Border = styled.a`
  display: flex;
  width: 80px;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-image: ${({ theme }) => theme.gradients.orange + "1"};
  margin: 15px 0;
`;

const Text = styled.p`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none !important;
`;

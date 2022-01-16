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
  width: 80px;
  text-align: center;
  margin: 20px 0;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-image: linear-gradient(45deg, #f27323, #f9a61a) 1;
`;

const Text = styled.p`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

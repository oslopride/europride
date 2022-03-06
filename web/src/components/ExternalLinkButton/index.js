import styled from "@emotion/styled";
import Link from "next/link";

const ExternalLinkButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <a>
        <Border>
          <Text>{text}</Text>
        </Border>
      </a>
    </Link>
  );
};

export default ExternalLinkButton;

const Border = styled.div`
  display: flex;
  width: 80px;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-image: ${({ theme }) => theme.gradients.green + "1"};
  margin: 15px 0;
`;

const Text = styled.p`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

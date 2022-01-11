import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";
import Link from "next/link";

const FaIconButton = ({
  faIcon,
  onClick = () => {},
  href = "/",
  ...restProps
}) => {
  return (
    <ButtonDiv onClick={onClick}>
      <FontAwesomeIcon icon={faIcon} {...restProps}>
        <Link href={href} />
      </FontAwesomeIcon>
    </ButtonDiv>
  );
};

const ButtonDiv = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export default FaIconButton;

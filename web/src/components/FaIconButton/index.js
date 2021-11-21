import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

import React from "react";

const FaIconButton = ({ faIcon, onClick, ...restProps }) => {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faIcon} {...restProps} />
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export default FaIconButton;

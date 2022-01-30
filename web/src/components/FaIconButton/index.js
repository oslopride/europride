import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FaIconButton = ({ faIcon, href = "/", ...restProps }) => {
  return (
    <Link href={href}>
      <a>
        <FontAwesomeIcon icon={faIcon} {...restProps} />
      </a>
    </Link>
  );
};

export default FaIconButton;

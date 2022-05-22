import FaIconButton from "../FaIconButton";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const icons = {
  facebook: ["fab", "facebook-square"],
  youtube: ["fab", "youtube"],
  snapchat: ["fab", "snapchat-ghost"],
  instagram: ["fab", "instagram"],
  twitter: ["fab", "fa-twitter"],
};

const Socials = ({ data, size = "2x", color, center = false }) => {
  const theme = useTheme();
  const asArray = Object.entries(data).map((e) => ({ [e[0]]: e[1] }));
  return (
    <Wrapper center={center}>
      {asArray.map((social, i) => (
        <ItemWrapper key={Object.values(social).join("")}>
          <FaIconButton
            key={Object.keys(social) + i}
            faIcon={icons[Object.keys(social)]}
            size={size}
            color={color ?? theme.colors.purpleLight}
            href={Object.values(social).join("")}
            className="socials"
          />
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

export default Socials;

const ItemWrapper = styled.div`
  margin-right: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: ${({ center }) => (center ? "center" : "flex-start")};
`;

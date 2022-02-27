import { slide as Menu } from "react-burger-menu";
import useSWR from "swr";
import groq from "groq";
import styled from "@emotion/styled";
import configuredSanityClient, { isEmptyResult } from "../../sanity";
import SanityLink from "../../components/SanityLink";

const isSelected = (text = "") => {
  const slug = location.pathname.split("/").slice(1)[0];
  if (slug === "" && text === "Home") {
    return true;
  }
  return slug === text?.toLowerCase();
};

const getMenuItems = (items: any) => {
  console.log("items", items);
  return (
    <>
      {items.map((item: any) => (
        <ItemWrapper key={item._key}>
          <MenuItem isSelected={isSelected(item.text.eng)}>
            <SanityLink href={item} title={item.text.eng} />
          </MenuItem>
        </ItemWrapper>
      ))}
    </>
  );
};

const BurgerMenu = () => {
  const { data, error } = useSWR(
    groq`*[_type == 'webConfiguration'][0]`,
    (query) => configuredSanityClient.fetch(query)
  );
  if (error) return null;
  const items = data.footer.shortcuts;
  return (
    <Menu right styles={styles} pageWrapId={"page-wrap"}>
      {getMenuItems(items)}
    </Menu>
  );
};

const MenuItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #221f20;
  margin-bottom: 40px;
  border-bottom-style: solid;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom-width: ${({ isSelected }) => (isSelected ? 5 : 0)}px;
  border-image: ${({ theme }: any) => theme.gradients.orange + "1"};
`;

const ItemWrapper = styled.div`
  display: flex;
`;

const styles = {
  bmBurgerButton: {
    position: "relative",
    width: "18px",
    height: "18px",
  },
  bmBurgerBars: {
    background: "#000",
  },
  bmCrossButton: {
    height: "48px",
    width: "48px",
  },
  bmCross: {
    background: "#000",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "auto",
    bottom: "0",
  },
  bmMenu: {
    background: "#F5F5F5",
    height: "auto",
    padding: "56px, 32px, 32px, 32px",
    fontSize: "1.15em",
    bottom: "4em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "1.5em 1em 1em 1em",
    width: "351px",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.0)",
  },
};

export default BurgerMenu;

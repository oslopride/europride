import { slide as Menu, Styles } from "react-burger-menu";
import useSWR from "swr";
import groq from "groq";
import styled from "@emotion/styled";
import configuredSanityClient, { isEmptyResult } from "../../sanity";
import SanityLink from "../../components/SanityLink";

const isSelected = (text: string) => {
  const slug = location.pathname.split("/").slice(1)[0];
  console.log({ text, slug });
  if (slug === "" && text === "Home") {
    return true;
  }
  return slug === text.toLowerCase();
};

const getMenuItems = (items: any) => {
  return (
    <MenuWrapper>
      {items.map((item: any) => (
        <MenuItem isSelected={isSelected(item.text)}>
          <SanityLink link={item} title={item.text} />
        </MenuItem>
      ))}
    </MenuWrapper>
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

const MenuItem = styled.a<{ isSelected: boolean }>`
  display: flex;
  flex: 1;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #221f20;
  margin-bottom: 40px;
  border-bottom-style: solid;
  border-bottom-width: ${({ isSelected }) => (isSelected ? 5 : 0)}px;
  border-image: ${({ theme }: any) => theme.gradients.orange + "1"};
`;

const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

const styles: Styles = {
  bmBurgerButton: {
    display: "flex",
    left: "90%",
    position: "absolute",
    top: "50px",
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
  },
  bmMenu: {
    background: "#F5F5F5",
    height: "auto",
    width: "100%",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    bottom: "4em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.0)",
  },
};

export default BurgerMenu;

import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import useSWR from "swr";
import groq from "groq";
import styled from "@emotion/styled";
import configuredSanityClient, { isEmptyResult } from "../../sanity";
import SanityLink from "../SanityLink";

const isSelected = (text = "") => {
  const slug = location.pathname.split("/").slice(1)[0];
  if (slug === "" && text === "Home") {
    return true;
  }
  return slug === text?.toLowerCase();
};

interface BMState {
  [key: string]: boolean;
}

const BurgerMenu = () => {
  const [menuState, setMenuState] = useState(false);
  const { data, error } = useSWR(
    groq`*[_type == 'webConfiguration'][0]`,
    (query) => configuredSanityClient.fetch(query)
  );
  if (error) return null;

  const items = data.footer.shortcuts;
  const header = data.footer.menuHeader.eng;
  return (
    <Menu
      isOpen={menuState}
      onStateChange={(state: BMState) => setMenuState(state.isOpen)}
      right
      styles={styles}
      pageWrapId={"page-wrap"}
    >
      <>
        <MenuHeader>{header.toUpperCase()}</MenuHeader>
        {items.map((item: any) => (
          <ItemWrapper key={item._key}>
            <SanityLink href={item}>
              <MenuItem
                onClick={() => setMenuState(false)}
                isSelected={isSelected(item.text.eng)}
              >
                {item.text.eng}
              </MenuItem>
            </SanityLink>
          </ItemWrapper>
        ))}
      </>
    </Menu>
  );
};

const MenuHeader = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
`;

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

const ItemWrapper = styled.span`
  display: flex;
`;

const styles = {
  bmBurgerButton: {
    position: "relative",
    width: "18px",
    height: "18px",
  },
  bmBurgerBars: { background: "#000" },
  bmCrossButton: {
    height: "48px",
    width: "48px",
  },
  bmCross: {
    flex: "1",
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
    height: "100vh",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "2em",
    width: "351px",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.0)",
  },
};

export default BurgerMenu;

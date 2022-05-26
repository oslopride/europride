import { slide as Menu } from "react-burger-menu";
import { useState, useRef, useEffect } from "react";
import useSWR from "swr";
import groq from "groq";
import styled from "@emotion/styled";
import configuredSanityClient from "../../sanity";
import SanityLink from "../SanityLink";

const isSelected = (text = "") => {
  const slug = location.pathname.split("/").slice(1)[0].replace("-", " ");
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

  const focusRef = useRef<HTMLDivElement>(null);

  const onClickOutside = () => setMenuState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        focusRef.current &&
        !focusRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  const items = data.footer.shortcuts;
  const header = data.footer.menuHeader.eng;
  return (
    <div ref={focusRef}>
      <Menu
        isOpen={menuState}
        onStateChange={(state: BMState) => setMenuState(state.isOpen)}
        right
        styles={styles}
        pageWrapId={"page-wrap"}
        forwardRef={focusRef}
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
    </div>
  );
};

const MenuHeader = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
`;

const MenuItem = styled.div<{ isSelected: boolean }>`
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.neutralDark};
  margin-bottom: 40px;
  border-bottom-style: solid;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom-width: ${({ isSelected }) => (isSelected ? 5 : 0)}px;
  border-image: ${({ theme }) => theme.gradients.orange + "1"};
  transition-duration: 0.3s;
  transition-timing-function: linear;
  &:hover {
    @supports ((background-clip: text) or (-webkit-background-clip: text)) and
      ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
      background: ${({ theme }) => theme.gradients.orange};
      background-size: cover;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const ItemWrapper = styled.li`
  display: flex;
  transition: all 0.3s;
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

import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import Button from "../Button";
import FaIconButton from "../FaIconButton";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const theme = useTheme();
  return (
    <Outer>
      <Menu right styles={styles} pageWrapId={"page-wrap"}>
        <Link href="/about">
          <LinkItem>Hello</LinkItem>
        </Link>
      </Menu>
      <Wrapper id="page-wrap">
        <Left>
          <Button text="Donate" gradient={theme?.gradients?.orange}>
            Donate
          </Button>
          <Socials>
            <FaIconButton faIcon={faFacebookSquare} size="1x" />
            <FaIconButton faIcon={faInstagram} size="1x" />
            <FaIconButton faIcon={faTwitter} size="1x" />
          </Socials>
        </Left>
        <Image src={logo} width={153} height={117} />
        <Text>2. – 18 September 2022</Text>
      </Wrapper>
    </Outer>
  );
};

const Outer = styled.div`
  flex-direction: row;
  padding: 0 80px;
`;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  max-width: 100%;
  margin-bottom: 50px;
  margin-right: 100px;
  justify-content: space-between;
  align-items: center;
`;

const LinkItem = styled.a`
  margin: 25px auto;
  cursor: pointer;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 150px;
`;

const Left = styled.div`
  display: flex;
`;

const Text = styled.text`
  font-size: 20px;
  font-weight: bold;
  color: #049648;
`;

const styles = {
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
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#F5F5F5",
    height: "400px",
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
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.0)",
  },
};

export default Header;

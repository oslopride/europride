import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import GradientButton from "../../GradientButton";
import FaIconButton from "../../FaIconButton";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import useSWR from "swr";
import groq from "groq";

const Header = () => {
  const theme = useTheme();
  const { data, error } = useSWR(
    groq`*[_type == 'webConfiguration'][0]`,
    (query) => configuredSanityClient.fetch(query)
  );
  return data ? (
    <Outer>
      <Menu right styles={styles} pageWrapId={"page-wrap"}></Menu>
      <Wrapper id="page-wrap">
        <Left>
          <GradientButton
            title={data?.footer.donateButton}
            gradient={theme?.gradients?.orange}
            href={data?.footer.donateLink}
          />
          <Socials>
            <FaIconButton faIcon={faFacebookSquare} size="1x" />
            <FaIconButton faIcon={faInstagram} size="1x" />
            <FaIconButton faIcon={faTwitter} size="1x" />
          </Socials>
        </Left>
        <ImageWrapper href="/">
          <Image src={logo} width={153} height={117} />
        </ImageWrapper>
        <DateText>{data?.date}</DateText>
      </Wrapper>
    </Outer>
  ) : null;
};

const Outer = styled.div`
  flex-direction: row;
`;

const Wrapper = styled.div`
  margin: 12px;
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0 24px 12px 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: 0 80px 24px 80px;
  }
`;

const ImageWrapper = styled(Link)`
  cursor: pointer;
  background: transparent;
  border: none;
  max-width: 300px;
`;

const LinkItem = styled.a`
  margin: 25px auto;
  cursor: pointer;
`;

const Socials = styled.div`
  display: none;
  justify-content: space-evenly;
  width: 150px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
  }
`;

const Left = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
  }
`;

const DateText = styled.text`
  display: none;
  font-size: 20px;
  font-weight: bold;
  color: #049648;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
  }
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

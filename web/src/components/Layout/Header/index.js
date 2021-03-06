import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import BurgerMenu from "../../BurgerMenu";
import configuredSanityClient from "../../../sanity";
import Socials from "../../Socials";
import useSWR from "swr";
import groq from "groq";

const Header = () => {
  const { data, error } = useSWR(
    groq`*[_type == 'webConfiguration'][0]`,
    async (query) => await configuredSanityClient.fetch(query)
  );
  if (error) {
    console.warn(error);
  }
  const theme = useTheme();
  return data ? (
    <Outer>
      <Wrapper id="page-wrap">
        <Left>
          <SocialsWrapper>
            <Socials
              data={data.socials}
              size="1x"
              color={theme.colors.black}
              center={true}
            />
          </SocialsWrapper>
        </Left>
        <ImageWrapper href="/">
          <a>
            <Image src={logo} width={153} height={117} />
          </a>
        </ImageWrapper>
        <Right>
          <DateText>{data?.date}</DateText>
          <BurgerMenu />
        </Right>
      </Wrapper>
    </Outer>
  ) : null;
};

const Outer = styled.div`
  flex-direction: row;
  margin: 0 12px 12px 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 0 24px 24px 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: 0 80px 80px 80px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled(Link)`
  cursor: pointer;
  background: transparent;
  border: none;
  max-width: 300px;
`;

const SocialsWrapper = styled.div`
  display: none;
  justify-content: space-between;
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

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DateText = styled.p`
  display: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 40px;
  color: #049648;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    display: flex;
  }
`;

export default Header;

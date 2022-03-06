import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import BurgerMenu from "../../BurgerMenu";
import GradientButton from "../../GradientButton";
import configuredSanityClient from "../../../sanity";
import Socials from "../../Socials";
import useSWR from "swr";
import groq from "groq";

const Header = () => {
  const { data, error } = useSWR(
    groq`*[_type == 'webConfiguration'][0]`,
    (query) => configuredSanityClient.fetch(query)
  );
  const theme = useTheme();
  return data ? (
    <Outer>
      <Wrapper id="page-wrap">
        <Left>
          <GradientButton
            title={data?.footer.donateLink[0].text.eng}
            href={data?.footer.donateLink[0].url}
          />
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

const SocialsWrapper = styled.div`
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

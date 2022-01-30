import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import GradientButton from "../../GradientButton";
import SimpleButton from "../../SimpleButton";
import Socials from "../../Socials";
import ColorBlockButton from "./components/ColorBlock";

import configuredSanityClient from "../../../sanity";
import useSWR from "swr";
import groq from "groq";

/**  TODO - put all placeholder text in sanity
 *    add socials
 *    move out of SWR
 *   DRY map of elements
 * Home component
 */

const Footer = () => {
  const theme = useTheme();
  const { data, error } = useSWR(
    groq`*[_type == 'webConfiguration'][0]`,
    (query) => configuredSanityClient.fetch(query)
  );
  const footer = data?.footer;
  return footer ? (
    <Outer>
      <Row>
        <ColorBlockWrapper>
          {footer.colorBlock.map((block) => {
            const color = block.color;
            return (
              <ColorBlockButton
                key={block.text.eng}
                color={theme.colors[color]}
                title={block.text.eng}
                linkTo={block.link.url}
              />
            );
          })}
        </ColorBlockWrapper>
      </Row>
      <Wrapper>
        <Row>
          <ImageWrapper>
            <Image src={logo} width={250} height={190} />
          </ImageWrapper>
          <Column>
            <Title>{footer.addressTitle.eng}</Title>
            <Description>{footer.address}</Description>
            <Title>{footer.emailTitle.eng}</Title>
            <Email href={`mailto:${footer.email}`}>{footer.email}</Email>
            <GradientButton
              title="Donate"
              backgroundColor={theme?.colors?.neutralGray}
              href={footer.donateLink}
              width={101}
            />
          </Column>
          <Column>
            <Title>{footer.workingHoursTitle.eng}</Title>
            <Description>{footer.workingHours}</Description>
            <Socials data={data.socials} />
          </Column>
          <Column>
            <Title>{footer.shortcutsTitle.eng}</Title>
            <ShortcutsWrapper>
              {footer.shortcuts.map((s, i) => (
                <SimpleButton
                  key={s.text + i}
                  link={s}
                  title={s.text}
                  width={150}
                />
              ))}
            </ShortcutsWrapper>
          </Column>
        </Row>
        <RowSpacer />
        <Row>
          <SpaceBetween>
            <Description>{footer.license}</Description>
            <Description>{footer.signature}</Description>
          </SpaceBetween>
        </Row>
      </Wrapper>
    </Outer>
  ) : null;
};

const Outer = styled.footer`
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutralGray};
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 38px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin-right: 30px;
    margin-top: 0px;
  }
`;

const ImageWrapper = styled.div`
  flex-direction: row;
  align-self: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: column;
    margin-right: 30px;
  }
`;

const ShortcutsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
  }
  justify-content: space-between;
`;

const ColorBlockWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
  }
`;

const RowSpacer = styled.div`
  height: 30px;
  max-height: 100%;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
  }
  width: 100%;
`;

const Title = styled.p`
  font-weight: 700;
  margin: 10px 0;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const Email = styled.a`
  margin: 10px 0;
`;

export default Footer;

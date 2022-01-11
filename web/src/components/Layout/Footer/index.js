import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import SimpleButton from "../../SimpleButton";
import GradientButton from "../../SimpleButton";
import FaIconButton from "../../FaIconButton";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faSnapchatGhost,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
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
        <>
          {footer.colorBlock.map((block) => {
            const color = block.color;
            return (
              <ColorBlockButton
                key={block.text.eng}
                color={theme.colors[color]}
                text={block.text.eng}
                linkTo={block.link.url}
              />
            );
          })}
        </>
      </Row>
      <Wrapper>
        <Row>
          <Column>
            <Image src={logo} width={250} height={190} />
            <Title>{footer.addressTitle.eng}</Title>
            <Description>{footer.address}</Description>
            <Title>{footer.emailTitle.eng}</Title>
            <Email href={`mailto:${footer.email}`}>{footer.email}</Email>
            <SimpleButton
              text="Donate"
              gradient={theme?.gradients?.orange}
              backgroundColor={theme?.colors?.neutralGray}
              href={footer.donateLink}
            />
          </Column>
          <Column>
            <Title>{footer.workingHours}</Title>
            <Description>{footer.workingHours}</Description>
            <Socials>
              <FaIconButton
                faIcon={faFacebookSquare}
                size="2x"
                color={theme.colors.purpleLight}
              />
              <FaIconButton
                faIcon={faInstagram}
                size="2x"
                color={theme.colors.purpleLight}
              />
              <FaIconButton
                faIcon={faSnapchatGhost}
                size="2x"
                color={theme.colors.purpleLight}
              />
              <FaIconButton
                faIcon={faYoutube}
                size="2x"
                color={theme.colors.purpleLight}
              />
              <FaIconButton
                faIcon={faTwitter}
                size="2x"
                color={theme.colors.purpleLight}
              />
            </Socials>
          </Column>
          <Column>
            <Title>{footer.shortcutsTitle.eng}</Title>
            {footer.shortcuts.map((s, i) => (
              <GradientButton
                key={s.text + i}
                backgroundColor={"#0000"}
                href={s}
                text={s.text}
              />
            ))}
          </Column>
        </Row>
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
  margin-top: auto;
  flex-direction: column;
  padding: 80px 80px 40px;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 10px 0;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const Email = styled.a`
  margin: 10px 0;
`;

export default Footer;

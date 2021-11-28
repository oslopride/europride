import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Button from "../../components/Button";
import FaIconButton from "../FaIconButton";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faSnapchatGhost,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ColorBlockButton from "./components/ColorBlock";

import useSWR from "swr";
import groq from "groq";
import sanity from "../../sanity";
import { createGlobalStyle } from "styled-components";

// TODO - put placeholder text in sanity blob

const Footer = ({}) => {
  const theme = useTheme();
  const { data, error } = useSWR(groq`*[_type == 'staticText']`, (query) =>
    sanity.fetch(query)
  );
  if (!data || error) return null;
  const { no } = data[0].staticFooter;
  console.log(no);
  return (
    <Outer>
      <Row>
        <>
          {no.colorBlock.map((block, i) => {
            return (
              <ColorBlockButton
                color={theme.colors[block.color]}
                text={block.text.no}
              />
            );
          })}
        </>
      </Row>
      <Wrapper>
        <Row>
          <Column>
            <Image src={logo} width={250} height={190} />
            <Title>Address</Title>
            <Description>{no.address}</Description>
            <Title>Email</Title>
            <Description>{no.email}</Description>
            <Button
              text="Donate"
              gradient={theme?.gradients?.orange}
              backgroundColor={theme?.colors?.neutralGray}
            />
          </Column>
          <Column>
            <Title>Working hours</Title>
            <Description>{no.workingHours}</Description>
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
            <Title>Shortcuts</Title>
            <Description>Link</Description>
            <Description>Link</Description>
            <Description>Link</Description>
            <Description>Link</Description>
          </Column>
        </Row>
        <Row>
          <SpaceBetween>
            <Description>
              © Licensed by European Pride Organisers Association - epoa.eu -
              GDPR
            </Description>
            <Description>🌈 Website built with love by Oslo Pride</Description>
          </SpaceBetween>
        </Row>
      </Wrapper>
    </Outer>
  );
};

const Outer = styled.footer``;

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutralGray};
  margin-top: auto;
  flex-direction: column;
  padding: 0 50px;
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

export default Footer;

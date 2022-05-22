import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import SanityBlock from "../components/SanityBlock";
import CreateSanityImage from "../components/CreateSanityImage";
import ExternalLinkButton from "../components/ExternalLinkButton";
import GradientButton from "../components/GradientButton";
import ErrorNotFound from "./404";
import { Wrapper, Header } from "../components/common";
import { useTheme } from "@emotion/react";
import { NextSeo } from "next-seo";

const Partners = ({ data, partners }: any) => {
  const theme = useTheme();
  const title = data?.title?.eng;
  const blocks = data?.body?.eng;

  const ctaTitle = data?.callToAction?.title.eng;
  const ctaBlocks = data?.callToAction.description.eng;
  const ctaLink = data?.callToAction?.link;

  if (!partners || !data) {
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <NextSeo
        title={title}
        description={title}
        openGraph={{
          url: `https://www.europride2022.com/partners`,
          title: title,
          description: title,
        }}
      />
      <Header gradient={theme.gradients.orange}>{title}</Header>
      <BlockWrapper>
        <SanityBlock blocks={blocks} />
      </BlockWrapper>
      <ArticleWrapper>
        {partners.map((partner: any) => {
          return (
            <PartnerWrapper key={partner?.slug?.current}>
              <ImageWrapper>
                <CreateSanityImage
                  url={partner?.image?.asset}
                  alt={partner?.name}
                />
              </ImageWrapper>
              <Description>{partner.name}</Description>
              <SanityBlock blocks={partner?.description?.eng} />
              {partner?.url?.url && partner?.url?.text ? (
                <ExternalLinkButton
                  href={partner?.url?.url}
                  text={partner?.url?.text?.eng}
                />
              ) : null}
            </PartnerWrapper>
          );
        })}
        <CTAWrapper>
          <Description>{ctaTitle}</Description>
          <SanityBlock blocks={ctaBlocks} />
          <Spacing />
          <GradientButton href={ctaLink?.url} title={ctaLink?.text?.eng} />
        </CTAWrapper>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default Partners;

export const getServerSideProps = async (pageContext: any) => {
  const pageData = await configuredSanityClient.fetch(
    `*[_id == "partners"][0]`
  );
  const partners = await configuredSanityClient.fetch(`*[_type == "partner"]`);
  if (!pageData) {
    return {
      props: {
        data: [],
        partners: [],
      },
    };
  } else {
    return {
      props: {
        data: pageData,
        partners: partners,
      },
    };
  }
};

const Spacing = styled.div`
  margin-top: 30px;
`;

const BlockWrapper = styled.div`
  max-width: 50%;
`;

const PartnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  max-height: 220px;
  max-width: 150px;
`;

const Description = styled.p`
  display: flex;
  flex: 1;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 10px;
  line-height: 39px;
`;

const CTAWrapper = styled.div`
  margin-top: 120px;
  justify-content: space-between;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
`;

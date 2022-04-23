import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import SanityBlock from "../components/SanityBlock";
import CreateSanityImage from "../components/CreateSanityImage";
import ExternalLinkButton from "../components/ExternalLinkButton";
import GradientButton from "../components/GradientButton";
import ErrorNotFound from "./404";
import { Wrapper, Header } from "../components/common";
import { useTheme } from "@emotion/react";

const Partners = ({ data, partners }: any) => {
  const theme = useTheme();
  if (!partners || !data) {
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Header gradient={theme.gradients.orange}>{partners?.title?.eng}</Header>
      <BlockWrapper>
        <SanityBlock blocks={partners?.body?.eng} />
      </BlockWrapper>
      <ArticleWrapper>
        {data.map((partner: any) => {
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
              {partner?.url.url && partner?.url?.text ? (
                <ExternalLinkButton
                  href={partner.url.url}
                  text={partner.url.text.eng}
                />
              ) : null}
            </PartnerWrapper>
          );
        })}
        <CTAWrapper>
          <Description>{partners?.callToAction?.title.eng}</Description>
          <SanityBlock blocks={partners?.callToAction.description.eng} />
          <Spacing />
          <GradientButton
            href={partners?.callToAction?.link?.url}
            title={partners?.callToAction?.link?.text.eng}
            width={170}
          />
        </CTAWrapper>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default Partners;

export const getServerSideProps = async (pageContext: any) => {
  const data = await configuredSanityClient.fetch(`*[_type == "partner"]`);
  const partners = await configuredSanityClient.fetch(
    `*[_type == "partners"][0]`
  );
  if (!data) {
    return {
      props: {
        data: [],
        partners: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
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

import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import SanityBlock from "../components/SanityBlock";
import CreateSanityImage from "../components/CreateSanityImage";
import AnchorButton from "../components/AnchorButton";
import Button from "../components/Button";

const Partners = ({ data, partnerOverview }: any) => {
  console.log(data);
  console.log(partnerOverview);
  return (
    <Wrapper>
      <Title>{partnerOverview.title.eng}</Title>
      <BlockWrapper>
        <SanityBlock blocks={partnerOverview.body.eng} />
      </BlockWrapper>
      <ArticleWrapper>
        {data.map((partner: any) => {
          return (
            <PartnerWrapper>
              <ImageWrapper>
                <CreateSanityImage
                  url={partner.image.asset}
                  alt={partner.name}
                />
              </ImageWrapper>
              <Description>{partner.name}</Description>
              <SanityBlock blocks={partner.description.eng} />
              <AnchorButton href={partner.url} text="Read more" />
            </PartnerWrapper>
          );
        })}
        <CTAWrapper>
          <Description>{partnerOverview.callToAction.eng.title}</Description>
          <SanityBlock blocks={partnerOverview.callToAction.eng.description} />
          <Spacing />
          <Button
            href={partnerOverview.callToAction.eng.link.url}
            text={partnerOverview.callToAction.eng.link.text}
            gradient={["#F27323", "#F9A61A"]}
          />
        </CTAWrapper>
      </ArticleWrapper>
    </Wrapper>
  );
};

export default Partners;

export const getServerSideProps = async (pageContext: any) => {
  const data = await configuredSanityClient.fetch(`*[_type == "partner"]`);
  const partnerOverview = await configuredSanityClient.fetch(
    `*[_type == "partnerOverview"][0]`
  );
  if (!data) {
    return {
      props: {
        data: [],
        partnerOverview: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
        partnerOverview: partnerOverview,
      },
    };
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 80px 80px 80px;
`;

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

const Title = styled.h1`
  font-weight: 800;
  font-size: 84px;
  line-height: 86px;
  background: -webkit-linear-gradient(top left, #f27323, #f9a61a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  margin: 80px 0 0 0;
  flex-direction: column;
  max-width: 900px;
  justify-content: space-between;
  align-self: center;
`;

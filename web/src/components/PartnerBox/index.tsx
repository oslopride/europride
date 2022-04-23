import styled from "@emotion/styled";
import CreateSanityImage from "../CreateSanityImage";

interface ISizes {
  [key: string]: number;
}

const SIZES: ISizes = {
  owner: 250,
  main: 200,
  regular: 150,
};

const PartnerBox = ({ partners, config }: any) => {
  const partnerTypes = ["owner", "main", "regular"];

  const getWidth = (type: string) => SIZES[type];

  const createPartners = (partners: any, type: string) => {
    return (
      <PartnerItem key={type}>
        <PartnerTypeHeader>{config[type].eng}</PartnerTypeHeader>
        <PartnerRow>
          {partners
            .filter((partner: any) => partner.type === type)
            .map((partner: any) => {
              return (
                <PartnerImageWrapper
                  width={getWidth(partner.type)}
                  key={partner.name + partner.slug.current}
                >
                  <CreateSanityImage
                    url={partner?.image?.asset}
                    alt={partner?.name}
                  />
                </PartnerImageWrapper>
              );
            })}
        </PartnerRow>
      </PartnerItem>
    );
  };
  return (
    <PartnerContainer>
      <PartnerHeader>{config.header.eng}</PartnerHeader>
      <PartnerImagesWrapper>
        {partnerTypes.map((type) => createPartners(partners, type))}
      </PartnerImagesWrapper>
    </PartnerContainer>
  );
};

export default PartnerBox;

const PartnerContainer = styled.div`
  flex: 1;
  flex-direction: column;
  background: #f5f5f5;
  padding: 30px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 63px;
  }
}
`;

const PartnerImagesWrapper = styled.div`
  margin-top: 30px;
`;

const PartnerHeader = styled.p`
  font-size: 24px;
  font-weight: 800;
  align-items: center;
  max-width: 1440px;
`;

const PartnerTypeHeader = styled.p`
  font-size: 18px;
  font-weight: 800;
  align-self: center;
`;

const PartnerItem = styled.article`
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(70, 70, 70, 0.5);
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0px;
  }
`;

const PartnerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
  }
`;

const PartnerImageWrapper = styled.div<{ width: number }>`
  flex: 1;
  max-width: ${({ width }) => width}px;
  min-width: 150px;
  max-height: 150px;
  margin-right: 10px;
`;

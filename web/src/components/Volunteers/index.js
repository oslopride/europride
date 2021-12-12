import styled from "@emotion/styled";
import CreateSanityImage from "../CreateSanityImage";

const Volunteers = ({ volunteers }) => {
  return (
    <Wrapper>
      {volunteers?.map((v) => (
        <VolunteerWrapper>
          <ImageWrapper>
            <CreateSanityImage url={v.portrait.asset} alt={v.name} />
          </ImageWrapper>
          <Name>{v.name}</Name>
          <Pronouns>{v.pronouns.eng}</Pronouns>
          <Role>{v.role.eng}</Role>
          <Email href={`mailto:${v.email}`}>{v.email}</Email>
        </VolunteerWrapper>
      ))}
    </Wrapper>
  );
};

export default Volunteers;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`;

const VolunteerWrapper = styled.div`
  flex: 1 0 21%;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px;
`;

const Name = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color:${({ theme }) => theme.colors.neutralDark};)}
`;

const Email = styled.a`
  color:${({ theme }) => theme.colors.purpleLight};)}
`;

const Role = styled.p`
  color:${({ theme }) => theme.colors.neutralGrey};)}
`;

const Pronouns = styled.p`
  font-size: 20px;
  line-height: 32px;
  color:${({ theme }) => theme.colors.neutralGrey};)}
`;

const ImageWrapper = styled.div`
  max-height: 380px;
  max-width: 280px;
`;

import styled from "@emotion/styled";
import CreateSanityImage from "../CreateSanityImage";
import { StyledProps } from "../../types/theme";

const Volunteer = ({ volunteer, index }: any) => {
  return (
    <Wrapper index={index}>
      <VolunteerWrapper>
        <ImageWrapper>
          <CreateSanityImage
            url={volunteer.portrait.asset}
            alt={volunteer.name}
          />
        </ImageWrapper>
        <Name>{volunteer.name}</Name>
        <Pronouns>{volunteer.pronouns.eng}</Pronouns>
        <Role>{volunteer.role.eng}</Role>
        <Email href={`mailto:${volunteer.email}`}>{volunteer.email}</Email>
      </VolunteerWrapper>
    </Wrapper>
  );
};

export default Volunteer;

const Wrapper = styled.div<{ index: number }>`
  display: flex;
  margin: ${({ index }: any) =>
    index % 4 === 0 ? "20px 0 0 0;" : "20px 20px 0 0"};
  flex: 0 0 20%;
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.desktop}px) {
    flex: 0 0 30%;
    margin: ${({ index }: any) =>
      index % 3 === 0 ? "20px 0 0 0;" : "20px 20px 0 0"};
  }
`;

const VolunteerWrapper = styled.div`
  flex: 0 0 20%;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: ${({ theme }: StyledProps) =>
      theme?.breakpoints?.desktop}px) {
    flex: 0 0 30%;
  }
`;

const Name = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color:${({ theme }: StyledProps) => theme?.colors?.neutralDark};)}
`;

const Email = styled.a`
  color:${({ theme }: StyledProps) => theme?.colors?.purpleLight};)}
`;

const Role = styled.p`
  color:${({ theme }: StyledProps) => theme?.colors?.neutralGrey};)}
`;

const Pronouns = styled.p`
  font-size: 20px;
  line-height: 32px;
  color:${({ theme }: StyledProps) => theme?.colors?.neutralGrey};)}
`;

const ImageWrapper = styled.div`
  max-height: 450px;
  max-width: 400px;
`;

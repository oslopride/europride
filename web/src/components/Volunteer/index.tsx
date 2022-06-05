import styled from "@emotion/styled";
import CreateSanityImage from "../CreateSanityImage";
import { Theme } from "@emotion/react";
import { SanityVolunteer } from "../../types/sanity";

interface VolunteerProps {
  volunteer: SanityVolunteer;
  index: number;
}

const Volunteer = ({ volunteer, index }: VolunteerProps) => {
  return (
    <Flex>
      <VolunteerWrapper>
        <ImageWrapper>
          <CreateSanityImage url={volunteer.portrait} alt={volunteer.name} />
        </ImageWrapper>
        <Name>{volunteer.name}</Name>
        <Pronouns>{volunteer.pronouns.eng}</Pronouns>
        <Role>{volunteer.role.eng}</Role>
        <Email href={`mailto:${volunteer.email}`}>{volunteer.email}</Email>
      </VolunteerWrapper>
    </Flex>
  );
};

export default Volunteer;

const Flex = styled.div`
  flex: 1 0 90%;
  margin: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex: 0 0 45%;
    margin: 15px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    flex: 0 0 28%;
    margin: 20px;
  }
`;

const VolunteerWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  align-self: center;
  flex-wrap: wrap;
`;

const Name = styled.p`
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.neutralDark};)}
`;

const Email = styled.a`
  color: ${({ theme }) => theme.colors.purpleLight};)}
`;

const Role = styled.p`
  color: ${({ theme }) => theme.colors.neutralGrey};)}
`;

const Pronouns = styled.p`
  font-size: 20px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.neutralGrey};)}
`;

const ImageWrapper = styled.div`
  max-height: 450px;
  max-width: 400px;
`;

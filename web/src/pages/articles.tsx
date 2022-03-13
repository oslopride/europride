import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import ErrorNotFound from "./404";
import Thumbnail from "../components/Thumbnail";
import { Wrapper, Header, Subheader } from "../components/common";

const Articles = ({ data, articles }: any) => {
  console.log(articles);
  if (!data) {
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <TopWrapper>
        <Header>{data?.title?.eng}</Header>
        <Subheader>{data?.subtitle?.eng}</Subheader>
      </TopWrapper>
      <AContainer>
        <Thumbnail articles={articles} />
      </AContainer>
    </Wrapper>
  );
};

export default Articles;

const TopWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-bottom: 10px;
  @media (min-width: ${({ theme }: any) => theme.breakpoints.desktop}px) {
    margin-bottom: 15px;
  }
`;

const AContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const getServerSideProps = async (pageContext: any) => {
  const data = await configuredSanityClient.fetch(`*[_id == "articles"][0]`);
  const articles = await configuredSanityClient.fetch(`*[_type == "page"]`);
  if (!data) {
    return {
      props: {
        data: [],
        articles: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
        articles: articles,
      },
    };
  }
};

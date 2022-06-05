import styled from "@emotion/styled";
import configuredSanityClient from "../sanity";
import ErrorNotFound from "./404";
import Thumbnail from "../components/Thumbnail";
import { Wrapper, Header, Subheader } from "../components/common";
import { NextSeo } from "next-seo";
import { SanityArticle, TranslatedString } from "../types/sanity";

interface ArticlesProps {
  data: {
    slug: {
      current: string;
      _type: string;
    };
    subtitle: TranslatedString;
    title: TranslatedString;
  };
  articles: SanityArticle[];
}

const Articles = ({ data, articles }: ArticlesProps) => {
  if (!data) {
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  }
  const title = data?.title?.eng;
  const subtitle = data?.subtitle?.eng;
  const openGraph = {
    url: `https://www.europride2022.com/articles`,
    title: title,
    description: subtitle,
  };

  return (
    <Wrapper>
      <NextSeo title={title} description={subtitle} openGraph={openGraph} />
      <TopWrapper>
        <Header>{title}</Header>
        <Subheader>{subtitle}</Subheader>
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
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-bottom: 15px;
  }
`;

const AContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const getServerSideProps = async () => {
  const data = await configuredSanityClient.fetch(
    `*[_id == "articleOverview"][0]`
  );
  const articles = await configuredSanityClient.fetch(`*[_type == "article"]`);
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

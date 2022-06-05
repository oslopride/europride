import CreateSanityImage from "../CreateSanityImage";
import sortByDate from "../../utils/sortByDate";
import styled from "@emotion/styled";
import Link from "next/link";

const Thumbnail = ({ articles }) => {
  const sorted = sortByDate(articles);
  return articles.map((a) => {
    return (
      <Link
        key={a?.slug?.current}
        href={"/articles/" + encodeURIComponent(a?.slug?.current)}
      >
        <Flex>
          <AWrapper>
            <AHeader>{a?.header?.eng?.title}</AHeader>
            <Date>{a?.publishedAt}</Date>
            <CreateSanityImage url={a?.header?.eng.image} />
          </AWrapper>
        </Flex>
      </Link>
    );
  });
};

export default Thumbnail;

const Flex = styled.div`
  cursor: pointer;
  flex: 1 0 100%;
  margin: 10px;
  @media (min-width: ${({ theme }) => theme?.breakpoints?.tablet}px) {
    flex: 0 0 45%;
    margin: 15px;
  }
  @media (min-width: ${({ theme }) => theme?.breakpoints?.desktop}px) {
    flex: 0 0 28%;
    margin: 20px;
  }
`;

const AWrapper = styled.article`
  flex: 1;
  flex-direction: column;
  align-self: center;
  flex-wrap: wrap;
  margin: 0px 10px 10px 10px;
`;

const ASummary = styled.p``;

const Date = styled.p``;

const AHeader = styled.h3`
  font-size: 24px;
  font-weigth: bold;
  margin-bottom: 10px;
`;

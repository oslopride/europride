import configuredSanityClient from "../../sanity";
import CreateSanityImage from "../../components/CreateSanityImage";
import SanityBlock from "../../components/SanityBlock";
import ErrorNotFound from "../404";
import {
  Header,
  Wrapper,
  Subheader,
  ImageWrapper,
} from "../../components/common";

const Article = ({ article }: any) => {
  if (!article) {
    return <ErrorNotFound />;
  }
  return (
    <Wrapper>
      <Header>{article.header.eng.title}</Header>
      <Subheader>{article.header.eng.subtitle}</Subheader>
      <ImageWrapper>
        <CreateSanityImage
          url={article?.header?.eng?.image?.asset}
          alt={article?.header?.eng?.title}
        />
      </ImageWrapper>
      <ImageWrapper></ImageWrapper>
      <SanityBlock blocks={article.body.eng} />
    </Wrapper>
  );
};

export async function getStaticPaths() {
  const paths = await configuredSanityClient.fetch(
    `*[_type == "article" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params;
  const article = await configuredSanityClient.fetch(
    `
    *[_type == "article" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      article,
    },
  };
}

export default Article;

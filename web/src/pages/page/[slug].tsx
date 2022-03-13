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

const Page = ({ page }: any) => {
  if (!page) {
    return <ErrorNotFound />;
  }
  return (
    <Wrapper>
      <Header>{page.header.eng.title}</Header>
      <Subheader>{page.header.eng.subtitle}</Subheader>
      <ImageWrapper>
        <CreateSanityImage
          url={page.header.eng.image.asset}
          alt={page.header.eng.title}
        />
      </ImageWrapper>
      <ImageWrapper></ImageWrapper>
      <SanityBlock blocks={page.body.eng} />
    </Wrapper>
  );
};

export async function getStaticPaths() {
  const paths = await configuredSanityClient.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params;
  const page = await configuredSanityClient.fetch(
    `
    *[_type == "page" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      page,
    },
  };
}

export default Page;

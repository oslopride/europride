import type { NextPage } from "next";
import styled from "@emotion/styled";
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
  console.log(page);
  const { body, header } = page;
  console.log(body);
  if (!page) {
    return <ErrorNotFound />;
  }
  return (
    <Wrapper>
      <Header>{header.eng.title}</Header>
      <Subheader>{header.eng.subtitle}</Subheader>
      <ImageWrapper>
        <CreateSanityImage
          url={header.eng.image.asset}
          alt={header.eng.title}
        />
      </ImageWrapper>
      <ImageWrapper></ImageWrapper>
      <SanityBlock blocks={body.eng} />
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

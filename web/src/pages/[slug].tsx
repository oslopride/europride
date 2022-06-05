import configuredSanityClient, { urlFor } from "../sanity";
import CreateSanityImage from "../components/CreateSanityImage";
import SanityBlock from "../components/SanityBlock";
import ErrorNotFound from "./404";
import { NextSeo } from "next-seo";
import { Header, Wrapper, Subheader, ImageWrapper } from "../components/common";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import { Params, SanityPage } from "../types/sanity";
import { ParsedUrlQuery } from "querystring";

const Page = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!page) {
    return <ErrorNotFound />;
  }
  const image = page?.header?.eng?.image;
  const title = page?.header?.eng?.title;
  const subtitle = page?.header?.eng?.subtitle;
  const description = page?.header?.eng?.summary?.eng;
  const value = page?.body?.eng;
  const slug = page?.slug?.current;
  const ogImageUrl = image ? urlFor(image).width(800).url() : "";

  const openGraph = {
    url: `https://www.europride2022.com/${slug}`,
    title: title,
    description: description,
    ...(image && {
      images: [
        {
          url: ogImageUrl,
          alt: description,
          type: "image/jpeg",
        },
      ],
    }),
  };

  return (
    <Wrapper>
      <NextSeo title={title} description={subtitle} openGraph={openGraph} />
      <Header>{title}</Header>
      <Subheader>{subtitle}</Subheader>
      {image ? (
        <ImageWrapper>
          <CreateSanityImage url={image} alt={description} />
        </ImageWrapper>
      ) : null}
      <SanityBlock value={value} />
    </Wrapper>
  );
};

export async function getStaticPaths() {
  const paths = await configuredSanityClient.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<
  { page: SanityPage },
  Params
> = async ({ params }) => {
  const slug = params!.slug;
  const page: SanityPage = await configuredSanityClient.fetch(
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
};

export default Page;

import configuredSanityClient, { urlFor } from "../sanity";
import CreateSanityImage from "../components/CreateSanityImage";
import SanityBlock from "../components/SanityBlock";
import ErrorNotFound from "./404";
import { NextSeo } from "next-seo";
import { Header, Wrapper, Subheader, ImageWrapper } from "../components/common";

const Page = ({ page }: any) => {
  if (!page) {
    return <ErrorNotFound />;
  }
  const image = page?.header?.eng?.image?.asset;
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

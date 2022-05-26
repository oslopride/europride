import configuredSanityClient, { urlFor } from "../../sanity";
import CreateSanityImage from "../../components/CreateSanityImage";
import SanityBlock from "../../components/SanityBlock";
import ErrorNotFound from "../404";
import {
  Header,
  Wrapper,
  Subheader,
  ImageWrapper,
} from "../../components/common";
import { NextSeo } from "next-seo";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityArticle } from "../../types/sanity";

const Article = ({ article }: SanityArticle) => {
  if (!article) {
    return <ErrorNotFound />;
  }
  const title = article?.header?.eng?.title;
  const subtitle = article?.header?.eng?.subtitle;
  const image = article?.header?.eng?.image.asset;
  const value = article?.body?.eng;
  const slug = article?.slug?.current;
  const ogImgUrl = urlFor(image as SanityImageSource)
    .width(800)
    .url();

  const openGraph = {
    url: `https://www.europride2022.com/articles/${slug}`,
    title: title,
    description: subtitle,
    ...(image && {
      images: [
        {
          url: ogImgUrl,
          alt: title,
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
      <ImageWrapper>
        <CreateSanityImage url={image} alt={title} />
      </ImageWrapper>
      <ImageWrapper></ImageWrapper>
      <SanityBlock value={value} />
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

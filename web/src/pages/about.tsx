import styled from "@emotion/styled";
import configuredSanityClient, { urlFor } from "../sanity";
import AnchorButton from "../components/AnchorButton";
import SanityBlock from "../components/SanityBlock";
import Volunteer from "../components/Volunteer";
import CreateSanityImage from "../components/CreateSanityImage";
import ErrorNotFound from "./404";
import { Wrapper, Header, Subheader } from "../components/common";
import { NextSeo } from "next-seo";
import { SanityVolunteer, TranslatedString } from "../types/sanity";
import { PortableTextBlock } from "@portabletext/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface AboutProps {
  data: {
    body: {
      eng?: PortableTextBlock;
      srp?: PortableTextBlock;
    };
    image?: { asset: SanityImageSource };
    header: TranslatedString;
    subheaderText: TranslatedString;
    slug: { current: string };
  };
  volunteers: SanityVolunteer[];
}

const About = ({ data, volunteers }: AboutProps) => {
  if (!data || !volunteers)
    return (
      <Wrapper>
        <ErrorNotFound />
      </Wrapper>
    );
  const title = data.header.eng;
  const subtitle = data.subheaderText.eng;
  const image = data?.image;
  const value = data?.body.eng;
  const ogImageUrl = image ? urlFor(image).width(800).url() : "";
  const openGraph = {
    url: "europride2022.com/about",
    title: title,
    description: subtitle,
    ...(image && {
      images: [
        {
          url: ogImageUrl,
          alt: title,
          type: "image/jpeg",
        },
      ],
    }),
  };

  return (
    <Wrapper>
      <NextSeo title={title} description={subtitle} openGraph={openGraph} />
      <TopWrapper>
        <Header>{title}</Header>
        <Subheader>{subtitle}</Subheader>
        <AnchorButton href="#body" text="Read more" />
      </TopWrapper>
      <ImageWrapper>
        <CreateSanityImage url={image} alt={title} />
      </ImageWrapper>
      <BlockWrapper id="body">
        <SanityBlock value={value} />
      </BlockWrapper>
      <VolunteerWrapper>
        {volunteers.map((v: SanityVolunteer, i: number) => (
          <Volunteer index={i + 1} volunteer={v} key={v.name} />
        ))}
      </VolunteerWrapper>
    </Wrapper>
  );
};

export default About;

const TopWrapper = styled.div`
  width: 100%;
  align-self: center;
  margin-bottom: 30px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin-bottom: 84px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  align-self: center;
`;

const BlockWrapper = styled.div`
  max-width: 800px;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
`;

const VolunteerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const getServerSideProps = async () => {
  const data = await configuredSanityClient.fetch(`*[_id == "about"][0]`);
  const volunteers = await configuredSanityClient.fetch(
    `*[_type == "volunteer"]`
  );
  if (!data || !volunteers) {
    return {
      props: {
        data: [],
        volunteers: [],
      },
    };
  } else {
    return {
      props: {
        data: data,
        volunteers: volunteers,
      },
    };
  }
};

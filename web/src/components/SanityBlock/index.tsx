import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Img from "next/image";
import styled from "@emotion/styled";
import AnchorLink from "../../components/AnchorLink";

// Currently unused as we dont support adding images to blocks
const ImageComponent = ({ value }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Img
      src={urlBuilder().image(value).width(800).fit("max").auto("format").url()}
      alt={value.alt || " "}
      loading="lazy"
    />
  );
};

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ImageComponent,
  },
  block: {
    normal: ({ children }) => <PComponent>{children}</PComponent>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <AnchorLink href={value.href} rel={rel}>
          {children}
        </AnchorLink>
      );
    },
  },
};

const PComponent = styled.p`
  color: ${({ theme }) => theme.colors.neutralGrey};
  line-height: 24px;
`;

function SanityBlock({ value }: any) {
  return <PortableText value={value} components={components} />;
}

export default SanityBlock;

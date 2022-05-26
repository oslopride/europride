import {
  PortableText,
  ReactPortableTextList,
  ReactPortableTextListItem,
  PortableTextTypeComponent,
  PortableTextComponent,
  PortableTextReactComponents,
  PortableTextProps,
  PortableTextBlockComponent,
} from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Img from "next/image";
import styled from "@emotion/styled";

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
        <AnchorComponent href={value.href} rel={rel}>
          {children}
        </AnchorComponent>
      );
    },
  },
};

const AnchorComponent = styled.a`
  color: blue;
  text-decoration: underline;
`;

const PComponent = styled.p`
  color: ${({ theme }) => theme.colors.neutralGrey};
  line-height: 24px;
`;

function SanityBlock({ value }: any) {
  console.log(value);
  return <PortableText value={value} components={components} />;
}

export default SanityBlock;

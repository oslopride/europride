import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Img from "next/image";
import styled from "@emotion/styled";

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

const components = {
  types: {
    image: ImageComponent,
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <A href={value.href} rel={rel}>
          {children}
        </A>
      );
    },
  },
};

const A = styled.a`
  color: blue;
  text-decoration: underline;
`;

const SanityBlock = ({ blocks }: any) => {
  return <PortableText value={blocks} components={components} />;
};

export default SanityBlock;

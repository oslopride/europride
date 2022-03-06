import { PortableText } from "@portabletext/react";
import { PROJECT_ID, DATASET } from "../../sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import styled from "@emotion/styled";
import Img from "next/image";
import { StyledProps } from "../../types/theme";

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

const SanityBlock = ({ blocks }: any) => {
  return (
    <Margin>
      <PortableText
        value={blocks}
        components={{
          types: {
            image: ImageComponent,
            break: (props: any) => {
              const { style } = props.node;
              if (style === "br") {
                return <br className="lineBreak" />;
              }
              return null;
            },
          },
        }}
      />
    </Margin>
  );
};

const Margin = styled.div`
  margin-top: 48px 0;
  @media (min-width: ${({ theme }: StyledProps) =>
      theme!.breakpoints.tablet}px) {
    margin-top: 80px;
  }
`;

export default SanityBlock;

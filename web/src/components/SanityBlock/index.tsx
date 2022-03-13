import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Img from "next/image";

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
  );
};

export default SanityBlock;

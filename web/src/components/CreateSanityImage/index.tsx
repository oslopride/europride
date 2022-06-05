import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import configuredSanityClient from "../../sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface SanityImageProps {
  url?: { asset: SanityImageSource };
  alt?: string;
  sizes?: string;
}

const CreateSanityImage = ({
  url,
  alt = "image",
  sizes = "(max-width: 200px, max-height: 100px) 200px",
}: SanityImageProps) => {
  if (!url) {
    return null;
  }
  const imageProps = useNextSanityImage(configuredSanityClient, url);
  return (
    <Img
      {...imageProps}
      alt={alt}
      layout="responsive"
      sizes={sizes}
      objectFit="contain"
    />
  );
};

export default CreateSanityImage;

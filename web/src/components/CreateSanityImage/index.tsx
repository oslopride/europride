import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import configuredSanityClient from "../../sanity";

const CreateSanityImage = ({
  url,
  alt,
  sizes = "(max-width: 200px, max-height: 100px) 200px",
}: any) => {
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

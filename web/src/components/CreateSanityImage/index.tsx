import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import configuredSanityClient from "../../sanity";

const CreateSanityImage = ({ url, alt }: any) => {
  const imageProps = useNextSanityImage(configuredSanityClient, url);
  return (
    <Img
      {...imageProps}
      alt={alt}
      layout="responsive"
      sizes="(max-width: 10px, max-height: 10px) 20px"
      objectFit="contain"
    />
  );
};

export default CreateSanityImage;

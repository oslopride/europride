import Link from "next/link";
import configuredSanityClient from "../../sanity";
import useSWR from "swr";
import groq from "groq";

interface linkProps {
  url: {
    _type: string;
    _ref: string;
  };
}

interface IProps {
  link: linkProps;
  title: string;
}

const SanityLink = ({ link, title = "" }: IProps) => {
  console.log(link);
  const { data, error } = useSWR(
    groq`*[_id == "${link?.url?._ref}"][0]._type`,
    async (query) => await configuredSanityClient.fetch(query)
  );
  const getSlug = () => {
    if (data === "frontPage") {
      return "/";
    }
    return "/" + data;
  };
  if (error) return null;
  return <Link href={getSlug()}>{title}</Link>;
};

export default SanityLink;

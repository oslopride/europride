import Link from "next/link";
import configuredSanityClient from "../../sanity";
import useSWR from "swr";
import groq from "groq";

const SanityLink = ({ href, text }) => {
  const { data, error } = useSWR(
    groq`*[_id == "${href?.url?._ref}"][0]._type`,
    async (query) => await configuredSanityClient.fetch(query)
  );
  const getSlug = () => {
    if (data === "frontPage") {
      return "/";
    }
    return "/" + data;
  };
  if (error) return null;
  return <Link href={getSlug()}>{text}</Link>;
};

export default SanityLink;

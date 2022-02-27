import Link from "next/link";
import configuredSanityClient from "../../sanity";
import useSWR from "swr";
import groq from "groq";

interface hrefProps {
  url: {
    _type: string;
    _ref: string;
  };
}

interface IProps {
  href: hrefProps;
  title: string;
}

/**  Pass the entire url object as href into this component */
const SanityLink = ({ href, title = "" }: IProps) => {
  const { data, error } = useSWR(
    groq`*[_id == "${href?.url?._ref}"][0]._type`,
    async (query) => await configuredSanityClient.fetch(query)
  );
  const getSlug = () => {
    if (typeof href === "string") {
      return href;
    }
    if (data === "frontPage") {
      return "/";
    }
    return "/" + data;
  };
  if (error) return null;
  return (
    <Link href={getSlug()}>
      <a>{title}</a>
    </Link>
  );
};

export default SanityLink;

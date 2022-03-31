import Link, { LinkProps } from "next/link";
import configuredSanityClient from "../../sanity";
import { UrlObject } from "url";
import useSWR from "swr";
import CSS from "csstype";
import groq from "groq";
interface IProps {
  href: {
    url: any;
    _type: string;
    _ref: string;
  };
  children?: any;
  containerStyle?: CSS.Properties;
  title?: {
    eng: string;
    srp: string;
  };
}

/**  Pass the entire url object as href into this component */
const SanityLink = ({ href, children, containerStyle }: IProps) => {
  const { data, error } = useSWR(
    groq`*[_id == "${href?.url?._ref}"][0]`,
    async (query) => await configuredSanityClient.fetch(query)
  );
  const getSlug = () => {
    if (typeof href === "string") {
      return href;
    }
    if (href?._type === "externalLink") {
      return href.url;
    }
    if (data?._type === "frontPage") {
      return "/";
    }
    // hopefully temporary while figuring out sanity mess
    if (data?._type === "about") {
      return data._type;
    }
    if (data?.slug?.current) {
      return "/" + data?.slug?.current;
    }
    return "/";
  };
  if (error) return null;
  return (
    <Link href={getSlug()}>
      <a style={containerStyle}>{children}</a>
    </Link>
  );
};

export default SanityLink;

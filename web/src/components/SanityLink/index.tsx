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
  title: {
    eng: string;
    srp: string;
  };
}

/**  Pass the entire url object as href into this component */
const SanityLink = ({ href, children, containerStyle }: IProps) => {
  const { data, error } = useSWR(
    groq`*[_id == "${href?.url?._ref}"][0]._type`,
    async (query) => await configuredSanityClient.fetch(query)
  );
  const getSlug = () => {
    if (typeof href === "string") {
      return href;
    }
    if (href?._type === "externalLink") {
      return href.url;
    }
    if (data === "frontPage") {
      return "/";
    }
    return "/" + data;
  };
  if (error) return "/404";
  console.log(href, getSlug());
  return (
    <Link href={getSlug()}>
      <a style={containerStyle}>{children}</a>
    </Link>
  );
};

export default SanityLink;

import Link from "next/link";
import configuredSanityClient from "../../sanity";
import useSWR from "swr";
import CSS from "csstype";
import groq from "groq";
import { SanityInternalLink, SanityExternalLink } from "../../types/sanity";
interface SanityLinkProps {
  href: SanityExternalLink | SanityInternalLink;
  children?: JSX.Element;
  containerStyle?: CSS.Properties;
  title?: {
    eng: string;
    srp: string;
  };
}

/**  Use with a Sanity Reference. Pass the entire url object as href into this component */
const SanityLink = ({ href, children, containerStyle }: SanityLinkProps) => {
  const getSlug = () => {
    if (typeof href === "string") {
      return href;
    }
    if (href?._type === "externalLink") {
      return href.url;
    }

    if (href.url._ref) {
      const { data, error } = useSWR(
        groq`*[_id == "${href?.url?._ref}"][0]`,
        async (query) => await configuredSanityClient.fetch(query)
      );
      if (error) return "/404";
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
      return "/404";
    }
  };
  return (
    <Link href={getSlug()}>
      <a style={containerStyle}>{children}</a>
    </Link>
  );
};

export default SanityLink;

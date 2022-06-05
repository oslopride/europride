import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";
import { ParsedUrlQuery } from "querystring";

export interface SanityPage extends SanityDefaultData {
  body: {
    eng?: PortableTextBlock[];
    srp?: PortableTextBlock[];
  };
  header: {
    eng?: {
      title: string;
      subtitle: string;
      summary: TranslatedString;
      image: { asset: SanityImageSource };
    };
    srp?: {
      title: string;
      subtitle: string;
      summary: TranslatedString;
      image: SanityImageSource;
    };
  };
  slug: SanitySlug;
}
export interface SanityEvent extends SanityDefaultData {
  address: string;
  description: {
    eng?: PortableTextBlock[];
    srp?: PortableTextBlock[];
  };
  alcoholFree: boolean;
  eventLink: {
    text: TranslatedString;
    url: string;
    _type: string;
  };
  wheelchairFriendly: boolean;
  blurb: TranslatedString;
  category: string;
  image: SanityImageSource;
  offical: boolean;
  organization: string;
  signLanguageInterpreted: boolean;
  endTime: Date;
  startTime: Date;
  title: TranslatedString;
  slug: {
    _type: string;
    current: string;
  };
}

export interface SanityArticle extends SanityDefaultData {
  article: {
    body: {
      eng?: Array<Object>;
      srp?: Array<Object>;
    };
    header: {
      eng?: {
        title: string;
        subtitle: string;
        image: {
          asset: SanityImageSource;
        };
      };
      srp?: {
        title: string;
        subtitle: string;
        image: {
          asset: SanityImageSource;
        };
      };
    };
    slug: {
      current: string;
    };
  };
}

export interface SanityVolunteer extends SanityDefaultData {
  bio: { eng?: PortableTextBlock[]; srp?: PortableTextBlock[] };
  email: string;
  name: string;
  portrait: { asset: SanityImageSource };
  pronouns: { eng: string; srp: string };
  role: { eng: string; srp: string };
}

export interface SanityPartner extends SanityDefaultData {
  content: PortableTextBlock;
  description: TranslatedString;
  facebookLink: string;
  instagramLink: string;
  linkedinLink: string;
  name: string;
  image: { asset: SanityImageSource };
  slug: SanitySlug;
  type: string;
  url: SanityExternalLink | SanityInternalLink;
}

export type SanitySlug = {
  _type: string;
  current: string;
};

export type SanityObject<T extends string, O extends object> = {
  _type: T;
} & O;

export type SanityReference = SanityObject<
  "reference",
  { _ref: string; _key: string }
>;

export type SanityDefaultData = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
};

export type SanityDefaultURLData = {
  _key: string;
  _type: string;
};

export type TranslatedString = {
  eng?: string;
  srp?: string;
};

export interface Params extends ParsedUrlQuery {
  id: string;
}

export type SanityExternalLink = SanityObject<
  "externalLink",
  {
    text: TranslatedString;
    url: string;
    _key?: string;
  }
>;
export type SanityInternalLink = SanityObject<
  "internalLink",
  {
    text: TranslatedString;
    url: SanityReference;
    _key?: string;
  }
>;

export type SanityURL = SanityInternalLink | SanityExternalLink;

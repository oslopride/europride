import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

export type SanityEvent = {
  address: string;
  description: {
    eng?: PortableTextBlock;
    srp?: PortableTextBlock;
  };
  alcoholFree: boolean;
  eventLink: {
    text: {
      eng?: string;
      srp?: string;
    };
    url: string;
    _type: string;
  };
  wheelchairFriendly: boolean;
  blurb: {
    srp?: string;
    eng?: string;
  };
  category: string;
  image: SanityImageSource;
  offical: boolean;
  organization: string;
  signLanguageInterpreted: boolean;
  endTime: Date;
  startTime: Date;
  title: {
    srp?: string;
    eng?: string;
  };
  slug: {
    _type: string;
    current: string;
  };
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
};

export type SanityArticle = {
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
    };
    slug: {
      current: string;
    };
  };
};

export type SanityVolunteer = {
  bio: { eng?: PortableTextBlock; srp?: PortableTextBlock };
  email: string;
  name: string;
  portrait: { _type: string; asset: SanityImageSource };
  pronouns: { eng: string; srp: string };
  role: { eng: string; srp: string };
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
};

export type SanityObject<T extends string, O extends object> = { _type: T } & O;
export type SanityReference = SanityObject<"reference", { _ref: string }>;

export type SanityExternalLink = SanityObject<
  "externalLink",
  {
    text: string;
    url: string;
  }
>;
export type SanityInternalLink = SanityObject<
  "internalLink",
  {
    text: string;
    url: SanityReference;
  }
>;

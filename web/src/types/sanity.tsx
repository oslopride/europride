import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

export interface SanityEvent {
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
}

export interface SanityArticle {
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
}

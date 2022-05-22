import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SanityEvent {
  address: string;
  alcoholFree: boolean;
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
  title: {
    srp?: string;
    eng?: string;
  };
  slug: {
    _type: string;
    current: string;
    startTime: Date;
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

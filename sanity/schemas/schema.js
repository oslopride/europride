// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import volunteer from "./volunteer";
import program from "./program";

import frontPage from "./front-page";
import page from "./page";
import webConfiguration from "./web-configuration";
import appConfiguration from "./app-configuration";
import article from "./article";
import articleArchive from "./article-archive";
import partner from "./partner";
import event from "./event";
import eventOverview from "./event-overview";
import arena from "./arena";
import venue from "./venue";
import partnerOverview from "./partner-overview";
import simpleEvent from "./simple-event";
import livestream from "./livestream";
import staticText from "./static-text";
import about from "./about";

// Blocks
import blocks from "./blocks";
import textArea from "./blocks/text-area";
import announcement from "./blocks/announcement";
import advertisement from "./blocks/advertisement";
import partnerList from "./blocks/partner-list";
import collapsible from "./blocks/collapsible";
import splitPane from "./blocks/split-pane";
import quote from "./blocks/quote";
import colorBlock from "./blocks/color-block";
import author from "./author";

// Types
import externalLink from "./types/external-link";
import internalLink from "./types/internal-link";
import youtube from "./types/youtube";
import iframe from "./types/iframe";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    frontPage,
    externalLink,
    internalLink,
    youtube,
    iframe,
    blocks,
    announcement,
    advertisement,
    partnerList,
    collapsible,
    quote,
    textArea,
    splitPane,
    colorBlock,
    volunteer,
    author,
    program,

    page,
    webConfiguration,
    appConfiguration,
    article,
    articleArchive,
    partner,
    event,
    eventOverview,
    arena,
    venue,
    partnerOverview,
    simpleEvent,
    livestream,
    about,
    staticText,
  ]),
});

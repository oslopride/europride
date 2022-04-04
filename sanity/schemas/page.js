import supportedLanguages from "../supported-languages";
import { getDefaultLanguage, localize } from "../utils/locale";
import { MdOutlineArticle } from "react-icons/md";

export default {
  title: "Page",
  icon: MdOutlineArticle,
  name: "page",
  type: "document",
  fields: [
    localize(
      {
        title: "Header",
        name: "header",
        type: "object",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            title: "Image",
            name: "image",
            type: "image",
            options: {
              hotspot: true,
            },
          },
          localize(
            {
              title: "Summary",
              name: "summary",
              type: "string",
              description:
                "Used when previewing the article, and when shared on social media and google search results",
            },
            (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
          ),
        ],
      },
      (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
    ),
    {
      title: "URL",
      name: "slug",
      type: "slug",
      options: {
        source: "header.en.title.id",
      },
    },
    localize(
      {
        title: "Body",
        name: "body",
        type: "array",
        of: [
          { type: "block" },
          {
            type: "image",
            options: { hotspot: true },
          },
          { type: "youtube" },
          { type: "iframe" },
        ],
      },
      (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
    ),
  ],
  preview: {
    select: {
      header: "header",
    },
    prepare: ({ header }) => ({
      title: header[getDefaultLanguage().id].title,
      subtitle: supportedLanguages
        .filter((lang) => !lang.isDefault)
        .map(
          (lang) => `${lang.id.toUpperCase()}: ${(header[lang.id] || {}).title}`
        )
        .join(", "),
    }),
  },
};

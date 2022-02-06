import { localize } from "../utils/locale";

export default {
  title: "Front Page",
  name: "frontPage",
  type: "document",
  fieldsets: [{ name: "header", title: "Header" }],
  fields: [
    {
      title: "Header",
      name: "header",
      type: "object",
      fields: [
        localize({
          name: "subHeading",
          title: "Sub heading",
          type: "string",
          validation: (lang, Rule) =>
            lang.isDefault ? Rule.required() : undefined,
        }),
        localize({
          name: "title",
          title: "Title",
          type: "string",
          validation: (lang, Rule) =>
            lang.isDefault ? Rule.required() : undefined,
        }),
        localize({
          name: "partnerHeader",
          title: "Partner Header",
          type: "string",
          validation: (lang, Rule) =>
            lang.isDefault ? Rule.required() : undefined,
        }),
        {
          title: "Links",
          name: "links",
          type: "array",
          of: [{ type: "internalLink" }, { type: "externalLink" }],
        },
        {
          title: "Image",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    localize(
      {
        title: "Body",
        name: "body",
        type: "array",
        of: [{ type: "block" }],
      },
      (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
    ),
    localize({
      title: "Headliners",
      name: "headliners",
      type: "array",
      of: [
        {
          title: "Headliner",
          name: "headliner",
          type: "object",
          fields: [
            { title: "Title", name: "title", type: "string" },
            { title: "Subtitle", name: "subtitle", type: "string" },
          ],
        },
      ],
      validation: (Rule) => Rule.max(5),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Front Page" }),
  },
};

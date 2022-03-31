import { localize } from "../utils/locale";

export default {
  title: "Partners",
  name: "partners",
  type: "document",
  fieldsets: [{ name: "header", title: "Header" }],
  fields: [
    localize(
      {
        title: "Title",
        name: "title",
        type: "string",
      },
      (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
    ),
    localize(
      {
        title: "Body",
        name: "body",
        type: "array",
        of: [{ type: "block" }],
      },
      (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
    ),
    {
      title: "Partner program link",
      name: "partnerProgramLink",
      type: "externalLink",
    },
    {
      title: "Call to action",
      name: "callToAction",
      type: "object",
      fields: [
        localize({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        localize({
          title: "Description",
          name: "description",
          type: "array",
          of: [{ type: "block" }],
        }),
        {
          title: "Link",
          name: "link",
          type: "externalLink",
        },
        {
          title: "URL",
          name: "slug",
          type: "slug",
          options: {
            source: "name",
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: "Partners" }),
  },
};

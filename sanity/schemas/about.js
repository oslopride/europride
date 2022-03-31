import { localize } from "../utils/locale";

export default {
  title: "About",
  name: "about",
  type: "document",
  fieldsets: [{ name: "header", title: "Header" }],
  fields: [
    localize({
      name: "header",
      title: "Header",
      type: "string",
      validation: (lang, Rule) =>
        lang.isDefault ? Rule.required() : undefined,
    }),
    localize({
      name: "subheaderText",
      title: "Sub Header Text",
      type: "string",
      validation: (lang, Rule) =>
        lang.isDefault ? Rule.required() : undefined,
    }),
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
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
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
  preview: {
    prepare: () => ({ title: "About page" }),
  },
};

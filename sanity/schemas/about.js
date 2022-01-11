import { localize } from "../utils/locale";

export default {
  name: "about",
  title: "About",
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
  ],
  preview: {
    prepare: () => ({ title: "About" }),
  },
};

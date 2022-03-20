import { localize } from "../utils/locale";

export default {
  title: "Article Overview",
  name: "articleOverview",
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
        title: "Subtitle",
        name: "subtitle",
        type: "string",
      },
      (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
    ),
  ],
  preview: {
    prepare: () => ({ title: "Article Overview" }),
  },
};

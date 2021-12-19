import { localize } from "../utils/locale";

export default {
  title: "Program",
  name: "program",
  type: "document",
  fieldsets: [{ name: "header", title: "Header" }],
  fields: [
    localize({
      name: "title",
      title: "Title",
      type: "string",
      validation: (lang, Rule) =>
        lang.isDefault ? Rule.required() : undefined,
    }),
  ],
  preview: {
    prepare: () => ({ title: "Front Page" }),
  },
};

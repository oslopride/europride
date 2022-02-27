import { localize } from "../../utils/locale";

export default {
  title: "External Link",
  name: "externalLink",
  type: "object",
  fields: [
    localize({
      title: "Text",
      name: "text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};

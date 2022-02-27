import { localize } from "../../utils/locale";

export default {
  name: "colorBlock",
  title: "Color Block",
  type: "object",
  fields: [
    {
      name: "color",
      title: "Color",
      type: "colors",
    },
    {
      type: "array",
      of: [{ type: "internalLink" }, { type: "externalLink" }],
      name: "link",
      title: "Link",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Color Block",
        subtitle: title,
      };
    },
  },
};

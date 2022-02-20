import { localize } from "../utils/locale";

export default {
  title: "Volunteer",
  name: "volunteer",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    localize({
      title: "Role",
      name: "role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Portrait",
      name: "portrait",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    localize({
      title: "Pronouns",
      name: "pronouns",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    localize({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],
};

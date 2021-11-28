import { localize } from "../utils/locale";

export default {
  title: "Static Text",
  name: "staticText",
  type: "document",
  fieldsets: [{ name: "header", title: "Header" }],
  fields: [
    localize(
      {
        title: "Static Text Front Page",
        name: "staticFrontPage",
        type: "object",
        fields: [
          {
            name: "prideDate",
            title: "Pride Date",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "donateButton",
            title: "Donate Button",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
        ],
      },
      (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
    ),
    localize(
      {
        name: "staticFooter",
        title: "Static Text Footer",
        type: "object",
        fields: [
          {
            name: "colorBlock",
            title: "Color Block",
            type: "array",
            of: [{ type: "colorBlock" }],
            validation: (Rule) => Rule.required(),
          },
          {
            name: "address",
            title: "Address",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "donateLink",
            title: "Donate Link",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "license",
            title: "License",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "epoaLink",
            title: "Epoa link",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "gdprStatement",
            title: "GDPR statement",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "workingHours",
            title: "Working hours",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "signature",
            title: "Signature",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "shortcuts",
            title: "Shortcuts",
            type: "array",
            of: [{ type: "internalLink" }, { type: "externalLink" }],
            validation: (Rule) => Rule.required(),
          },
        ],
      },
      (lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
    ),
  ],
  preview: {
    prepare: () => ({ title: "Static Text" }),
  },
};

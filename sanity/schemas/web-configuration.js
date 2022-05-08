import { localize } from "../utils/locale";

export default {
  title: "Web Configuration",
  name: "webConfiguration",
  type: "document",
  fieldsets: [{ name: "header", title: "Header" }],
  fields: [
    {
      name: "date",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "navigationBar",
      type: "array",
      of: [{ type: "internalLink" }, { type: "externalLink" }],
    },
    {
      name: "socials",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fields: [
        {
          name: "instagram",
          type: "url",
        },
        {
          name: "facebook",
          type: "url",
        },
        {
          name: "youtube",
          type: "url",
        },
        {
          name: "snapchat",
          type: "url",
        },
        {
          name: "linkedin",
          type: "url",
        },
        {
          name: "twitter",
          type: "url",
        },
      ],
    },
    {
      name: "footer",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fieldsets: [{ name: "links", title: "Shortcuts" }],
      fields: [
        {
          name: "links",
          fieldset: "links",
          type: "array",
          of: [
            {
              type: "externalLink",
            },
            {
              type: "internalLink",
            },
          ],
        },
        {
          name: "prideDate",
          title: "Pride Date",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        localize({
          name: "menuHeader",
          title: "Menu header",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        {
          name: "colorBlock",
          title: "Color Block",
          type: "array",
          of: [{ type: "colorBlock" }],
          validation: (Rule) => Rule.required(),
        },
        localize({
          name: "addressTitle",
          title: "Address title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        {
          name: "address",
          title: "Address",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        localize({
          name: "emailTitle",
          title: "Email title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        {
          name: "email",
          title: "Email",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "donateLink",
          title: "Donate Link",
          type: "array",
          of: [{ type: "internalLink" }, { type: "externalLink" }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "license",
          title: "License",
          type: "array",
          of: [{ type: "block" }],
          validation: (Rule) => Rule.required(),
        },
        localize({
          name: "workingHoursTitle",
          title: "Working hours title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        {
          name: "workingHours",
          title: "Working hours",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "signature",
          title: "Signature",
          type: "array",
          of: [{ type: "block" }],
          validation: (Rule) => Rule.required(),
        },
        localize({
          name: "shortcutsTitle",
          title: "Shortcuts title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        {
          name: "shortcuts",
          title: "Shortcuts",
          type: "array",
          of: [{ type: "internalLink" }, { type: "externalLink" }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: "Redirects",
      name: "redirects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "From",
              name: "from",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "To",
              name: "to",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "partners",
      type: "object",
      options: { collapsible: true, collapsed: false },
      fieldsets: [
        { name: "header", title: "Header" },
        { name: "owner", title: "Owner" },
        { name: "main", title: "Main partners" },
        { name: "regular", title: "Regular" },
        { name: "supporter", title: "Supporter" },
      ],
      fields: [
        localize({
          name: "header",
          title: "Header",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        localize({
          name: "owner",
          title: "Owner",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        localize({
          name: "main",
          title: "Main partners",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        localize({
          name: "regular",
          title: "Regular",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        localize({
          name: "supporter",
          title: "Supporter",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    },
    {
      title: "Advanced",
      name: "advanced",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Key",
              name: "key",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Value",
              name: "value",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "key",
            },
          },
        },
      ],
    },
  ],
};

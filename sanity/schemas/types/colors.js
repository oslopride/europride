export default {
  title: "colors",
  name: "colors",
  type: "object",
  fields: [
    {
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Black", value: "debate" },
          { title: "Green Dark", value: "greenDark" },
          { title: "Neutral Gray", value: "neutralGrey" },
          { title: "Purple Dark", value: "purpleDark" },
          { title: "Purple Light", value: "purpleLight" },
          { title: "Blue Light", value: "blueLight" },
          { title: "Neutral Dark", value: "neutralDark" },
          { title: "Neutral Grey", value: "Neutral Grey" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};

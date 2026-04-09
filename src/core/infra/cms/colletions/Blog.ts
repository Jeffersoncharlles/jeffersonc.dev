import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blog",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedAt"],
  },
  access: {
    read: () => true, // Público para o seu site ler
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Título do Post",
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
        description: "URL amigável gerada automaticamente",
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
            }
          },
        ],
      },
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Técnico", value: "tech" },
        { label: "Carreira", value: "career" },
        { label: "Novidades", value: "news" },
      ],
      defaultValue: "tech",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media", // Relaciona com sua collection de Media
      label: "Imagem de Capa (Opcional)",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Conteúdo do Post",
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
      defaultValue: () => new Date(),
    },
  ],
};

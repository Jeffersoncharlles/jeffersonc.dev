import type { CollectionConfig } from "payload";

export const Education: CollectionConfig = {
  slug: "education",
  admin: { useAsTitle: "name" },
  access: { read: () => true },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nome do Curso/Formação",
    },
    { name: "institution", type: "text", required: true },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Domain (Graduação/Pós)", value: "domain" },
        { label: "Application (Certificações)", value: "application" },
      ],
    },
    { name: "description", type: "textarea" },
    { name: "certificateUrl", type: "text", label: "Link do Certificado" },
    { name: "completedAt", type: "date", label: "Data de Conclusão" },
  ],
};

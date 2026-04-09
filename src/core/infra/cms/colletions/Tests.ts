import type { CollectionConfig } from "payload";

export const Tests: CollectionConfig = {
  slug: "tests",
  admin: { useAsTitle: "title" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Project (Repositório)", value: "projects" },
        { label: "Demo (Live View)", value: "demos" },
      ],
    },
    { name: "description", type: "textarea", required: true },
    { name: "githubUrl", type: "text", label: "URL do GitHub" },
    { name: "liveUrl", type: "text", label: "URL do Projeto Rodando" },
    {
      name: "techStack",
      type: "relationship",
      relationTo: "infrastructure",
      hasMany: true,
      label: "Tecnologias Utilizadas",
    },
    { name: "coverImage", type: "upload", relationTo: "media" },
  ],
};

import type { CollectionConfig } from "payload";

export const Infrastructure: CollectionConfig = {
  slug: "infrastructure",
  admin: { useAsTitle: "name" },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Stack (Techs)", value: "stack" },
        { label: "Setup (Hardware/OS)", value: "setup" },
        { label: "Integrations (APIs/Tools)", value: "integrations" },
      ],
    },
    { name: "icon", type: "upload", relationTo: "media", label: "Ícone/Logo" },
    { name: "description", type: "text" },
  ],
};

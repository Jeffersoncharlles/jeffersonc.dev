import type { GlobalConfig } from "payload";

export const AppConfig: GlobalConfig = {
  slug: "app-config",
  label: "Configurações do App",
  access: { read: () => true },
  fields: [
    {
      name: "status", // Para a pasta app/status
      type: "group",
      fields: [
        {
          name: "logMessage",
          type: "text",
          required: true,
          label: "Mensagem de Log (Console)",
        },
        { name: "currentFocus", type: "text", label: "Foco Atual" },
        {
          name: "isAvailable",
          type: "checkbox",
          label: "Disponível para Contratação",
          defaultValue: true,
        },
      ],
    },
    {
      name: "links", // Para a pasta app/links e app/social
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "url", type: "text", required: true },
        {
          name: "category",
          type: "select",
          options: [
            { label: "Links Rápidos", value: "links" },
            { label: "Redes Sociais", value: "social" },
          ],
        },
        { name: "iconName", type: "text", label: "Nome do Ícone (Lucide)" },
      ],
    },
  ],
};

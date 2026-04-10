import type { CollectionConfig } from 'payload'

export const Infrastructure: CollectionConfig = {
  slug: 'infrastructure',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Stack Técnica', value: 'stack' },
        { label: 'Setup / Hardware', value: 'setup' },
        { label: 'Integrações', value: 'integrations' },
      ],
    },
    {
      name: 'iconName',
      type: 'text',
      admin: { description: 'Nome do ícone Lucide' },
    },
    { name: 'description', type: 'textarea' },
  ],
}

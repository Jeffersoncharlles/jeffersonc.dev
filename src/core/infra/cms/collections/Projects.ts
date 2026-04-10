import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Projeto Real', value: 'projects' },
        { label: 'Demonstração Técnica', value: 'demos' },
      ],
    },
    { name: 'githubUrl', type: 'text' },
    { name: 'liveUrl', type: 'text' },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'infrastructure',
      hasMany: true,
      filterOptions: { category: { equals: 'stack' } }, // Só mostra techs
    },
    { name: 'content', type: 'richText' },
  ],
}

import type { CollectionConfig } from 'payload'

export const HomeCards: CollectionConfig = {
  slug: 'home-cards',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'badgeLabel', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Título do Card',
    },
    {
      name: 'badgeLabel',
      type: 'text',
      label: 'Texto da Badge',
      admin: {
        description: 'Ex: "Frontend", "Backend", "Mobile"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descrição',
    },
    {
      name: 'iconName',
      type: 'text',
      required: true,
      label: 'Nome do Ícone',
      admin: {
        description:
          'Use o nome do ícone do Lucide ou da sua biblioteca (ex: "code", "terminal", "database")',
      },
    },
    {
      name: 'colorsCards',
      type: 'select',
      label: 'Cor Temática do Card',
      options: [
        { label: 'Azul (Tokyo Night)', value: 'blue' },
        { label: 'Roxo (Tokyo Night)', value: 'purple' },
        { label: 'Verde', value: 'green' },
        { label: 'Laranja', value: 'orange' },
      ],
      defaultValue: 'blue',
    },
    {
      name: 'footerTags',
      type: 'array',
      label: 'Tags de Rodapé',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordem de exibição',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

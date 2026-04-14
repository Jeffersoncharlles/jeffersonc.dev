import type { CollectionConfig } from 'payload'

export const Experience: CollectionConfig = {
  slug: 'experience',
  admin: { useAsTitle: 'companyName' },
  access: { read: () => true },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
      label: 'Nome da Empresa',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Cargo',
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
      label: 'Data de Início',
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'Data de Término',
      admin: {
        description: 'Opcional para experiências em andamento.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição da Vaga',
      admin: {
        description: 'Opcional. Aceita conteúdo em markdown.',
      },
    },
  ],
}

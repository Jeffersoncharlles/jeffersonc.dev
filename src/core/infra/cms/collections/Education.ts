import type { CollectionConfig } from 'payload'

const degreeTypeOptions = [
  { label: 'Bacharelado', value: 'bacharelado' },
  { label: 'Licenciatura', value: 'licenciatura' },
  { label: 'Tecnólogo', value: 'tecnologo' },
]

const educationTypeOptions = [
  { label: 'Graduação', value: 'graduacao' },
  { label: 'Pós-graduação', value: 'pos_graduacao' },
  { label: 'Certificação', value: 'certificacao' },
]

const isEducationType = (
  siblingData: { type?: string } | undefined,
  allowedTypes: readonly string[],
) => allowedTypes.includes(siblingData?.type ?? '')

const requiredWhenTypeIs =
  (allowedTypes: readonly string[], message: string) =>
  (value: unknown, { siblingData }: { siblingData?: { type?: string } }) => {
    if (!isEducationType(siblingData, allowedTypes)) {
      return true
    }

    if (typeof value === 'string') {
      return value.trim().length > 0 || message
    }

    return value ? true : message
  }

export const Education: CollectionConfig = {
  slug: 'education',
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nome da Formação',
    },
    {
      name: 'institution',
      type: 'text',
      required: true,
      label: 'Instituição',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      label: 'Tipo',
      options: educationTypeOptions,
    },
    {
      name: 'degreeType',
      type: 'select',
      label: 'Tipo de Graduação',
      options: degreeTypeOptions,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'graduacao',
      },
      validate: requiredWhenTypeIs(
        ['graduacao'],
        'Selecione o tipo de graduação.',
      ),
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Data de Início',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.type === 'graduacao' ||
          siblingData?.type === 'pos_graduacao',
      },
      validate: requiredWhenTypeIs(
        ['graduacao', 'pos_graduacao'],
        'Informe a data de início.',
      ),
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'Data de Fim / Conclusão',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descrição',
    },
    {
      name: 'certificateUrl',
      type: 'text',
      label: 'Link do Certificado',
    },
    {
      name: 'avatar',
      type: 'relationship',
      relationTo: 'media',
      label: 'Avatar',
      admin: {
        description: 'Opcional. Exibido como imagem de destaque da formação.',
      },
    },
  ],
}

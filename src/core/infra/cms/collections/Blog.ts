import {
  convertLexicalToMarkdown,
  editorConfigFactory,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { CollectionConfig, RichTextField } from 'payload'

const slugify = (value: string) => {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt'],
  },
  access: { read: () => true },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) {
          return data
        }

        if (!data.slug && data.title) {
          data.slug = slugify(data.title)
        }

        return data
      },
    ],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'Carreira', value: 'career' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Resumo (opcional)',
    },
    {
      name: 'nameOfYourRichTextField',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'markdown',
      type: 'textarea',
      required: true,
      label: 'Conteudo em Markdown',
      hooks: {
        afterRead: [
          ({ siblingData, siblingFields }) => {
            const data: SerializedEditorState =
              siblingData['nameOfYourRichTextField']

            if (!data) {
              return ''
            }

            const markdown = convertLexicalToMarkdown({
              data,
              editorConfig: editorConfigFactory.fromField({
                field: siblingFields.find(
                  (field) =>
                    'name' in field && field.name === 'nameOfYourRichTextField',
                ) as RichTextField,
              }),
            })

            return markdown
          },
        ],
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData['markdown']
            return null
          },
        ],
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      admin: { position: 'sidebar' },
    },
  ],
}

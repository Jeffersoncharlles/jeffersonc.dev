import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // Isso habilita os campos de email e password automaticamente
  admin: {
    useAsTitle: 'email',
  },
  access: {
    // Por padrão, apenas usuários logados podem ler/criar outros usuários
    read: ({ req: { user } }) => {
      if (user?.role === 'admin') return true
      if (user) return { id: { equals: user.id } }
      return false
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'admin',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      required: true,
      saveToJWT: true, // Facilita checar permissões no front-end depois
    },
  ],
}

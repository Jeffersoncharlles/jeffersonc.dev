import type { CollectionConfig } from 'payload'
import { env } from '@/shared/env'

const isProduction = env.NODE_ENV === 'production'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      domain: env.PAYLOAD_COOKIE_DOMAIN,
      sameSite: env.PAYLOAD_COOKIE_SAMESITE,
      secure: env.PAYLOAD_COOKIE_SECURE ?? isProduction,
    },
  },
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

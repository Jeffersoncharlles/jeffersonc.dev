import type { CollectionConfig } from 'payload'
import { env } from '@/shared/env'

const isProduction = env.NODE_ENV === 'production'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    cookies: {
      sameSite: env.PAYLOAD_COOKIE_SAMESITE,
      secure: env.PAYLOAD_COOKIE_SECURE ?? isProduction,
    },
  },
  admin: {
    useAsTitle: 'name', // Using name instead of email for better UX
    defaultColumns: ['name', 'email', 'role'],
  },
  access: {
    // Only admins can read/create other users, unless it's themselves
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
      saveToJWT: true,
    },
  ],
}

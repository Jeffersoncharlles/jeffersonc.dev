import { z } from 'zod'

export const blogSchema = z.object({
  id: z.string(),
  title: z.string(),
  markdown: z.string(),
  slug: z.string().slugify(),
  category: z.enum(['frontend', 'backend', 'career']),
  description: z.string().nullish(),
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
})

export type BlogEntity = z.infer<typeof blogSchema>

import { z } from 'zod'

export const blogSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
})

export type BlogEntity = z.infer<typeof blogSchema>

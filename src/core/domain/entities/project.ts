import { z } from 'zod'

export const infrastructureSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string().nullable().optional(),
  githubUrl: z.string().url(),
  liveUrl: z.string().url().nullable().optional(),
  technologies: z.array(z.string()).nullable().optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
})

export type ProjectEntity = z.infer<typeof infrastructureSchema>

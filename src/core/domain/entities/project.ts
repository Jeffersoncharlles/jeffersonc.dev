import { z } from 'zod'

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string().nullable().optional(),
  githubUrl: z.string().url(),
  liveUrl: z.string().url().nullable().optional(),
  technologies: z.array(z.string()).default([]),
  content: z
    .object({
      root: z.object({
        type: z.string(),
        children: z.array(z.any()),
        direction: z.enum(['ltr', 'rtl']).nullable(),
        format: z.string(),
        indent: z.number(),
        version: z.number(),
      }),
    })
    .passthrough()
    .nullable()
    .optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
})

export type ProjectEntity = z.infer<typeof projectSchema> & {
  content?: Record<string, any> | null
}

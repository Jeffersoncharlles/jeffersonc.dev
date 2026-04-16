import { z } from 'zod'

export const infrastructureSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable().optional(),
  category: z.enum(['stack', 'setup', 'integrations']),
  iconName: z.string().nullable().optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
})

export type InfrastructureEntity = z.infer<typeof infrastructureSchema>

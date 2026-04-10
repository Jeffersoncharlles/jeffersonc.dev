import { z } from 'zod'

export const HomeCardSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, 'O título é obrigatório'),
  badge: z.string().optional().default(''),
  description: z.string(),
  icon: z.string().default('code'),
  color: z.enum(['blue', 'purple', 'green', 'orange']).default('blue'),
  tags: z.array(z.string()).default([]),
  order: z.number().nullable().optional().default(0),
})

export type HomeCardEntity = z.infer<typeof HomeCardSchema>

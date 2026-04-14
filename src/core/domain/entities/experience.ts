import { z } from 'zod'

export const experienceSchema = z.object({
  id: z.string(),
  companyName: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
})

export type ExperienceEntity = z.infer<typeof experienceSchema>

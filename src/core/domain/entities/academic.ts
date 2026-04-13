import { z } from 'zod'

export const educationSchema = z.object({
  id: z.string(),
  name: z.string(),
  institution: z.string(),
  type: z.enum(['graduacao', 'pos_graduacao', 'certificacao']),
  degreeType: z
    .enum(['bacharelado', 'licenciatura', 'tecnologo'])
    .nullable()
    .optional(),
  startDate: z.string().nullable().optional(),
  endDate: z.string(),
  description: z.string().optional(),
  certificateUrl: z.string().nullable().optional(),
  avatar: z
    .union([
      z.null(),
      z.string(),
      z.object({
        id: z.string(),
        alt: z.string().optional(),
        url: z.string().optional(),
        updatedAt: z.string().optional(),
        createdAt: z.string().optional(),
        thumbnailURL: z.string().nullable().optional(),
        filename: z.string().optional(),
        mimeType: z.string().optional(),
        filesize: z.number().optional(),
        width: z.number().optional(),
        height: z.number().optional(),
        focalX: z.number().nullable().optional(),
        focalY: z.number().nullable().optional(),
      }),
    ])
    .optional(),
  updatedAt: z.string().optional(),
  createdAt: z.string().optional(),
})

export type EducationEntity = z.infer<typeof educationSchema>

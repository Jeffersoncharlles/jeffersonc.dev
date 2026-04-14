import config from '@payload-config'
import { getPayload } from 'payload'
import type { ExperienceRepository } from '@/core/application/repositories/experience-repository'
import {
  type ExperienceEntity,
  experienceSchema,
} from '@/core/domain/entities/experience'

export class PayloadExperienceRepository implements ExperienceRepository {
  async findAllExperiences(): Promise<ExperienceEntity[]> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'experience' })

    return docs.map((doc) => {
      const result = experienceSchema.safeParse({
        id: doc.id,
        companyName: doc.companyName,
        role: doc.role,
        startDate: doc.startDate,
        endDate: doc.endDate,
        description: doc.description,
        updatedAt: doc.updatedAt,
        createdAt: doc.createdAt,
      })

      if (!result.success) {
        console.error('Experience inválido detectado:', result.error)
        throw new Error('Experience inválido detectado')
      }

      return result.data
    })
  }
}

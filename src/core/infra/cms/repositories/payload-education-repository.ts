import config from '@payload-config'
import { getPayload } from 'payload'
import type { EducationRepository } from '@/core/application/repositories/education-repository'

import {
  type EducationEntity,
  educationSchema,
} from '@/core/domain/entities/academic'

export class PayloadEducationRepository implements EducationRepository {
  async findAllEducation(): Promise<EducationEntity[]> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'education' })

    return docs.map((doc) => {
      const result = educationSchema.safeParse({
        id: doc.id,
        name: doc.name,
        institution: doc.institution,
        type: doc.type,
        degreeType: doc.degreeType,
        startDate: doc.startDate,
        endDate: doc.endDate,
        description: doc.description,
        certificateUrl: doc.certificateUrl,
        avatar: doc.avatar,
        updatedAt: doc.updatedAt,
        createdAt: doc.createdAt,
      })

      if (!result.success) {
        console.error('Academic inválido detectado:', result.error)
        throw new Error('Academic inválido detectado')
      }

      return result.data
    })
  }
}

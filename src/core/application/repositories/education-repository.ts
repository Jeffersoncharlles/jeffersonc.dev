import type { EducationEntity } from '@/core/domain/entities/academic'

export interface EducationRepository {
  findAllEducation: () => Promise<EducationEntity[]>
}

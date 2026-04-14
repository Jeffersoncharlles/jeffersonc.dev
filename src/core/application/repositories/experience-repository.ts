import type { ExperienceEntity } from '@/core/domain/entities/experience'

export interface ExperienceRepository {
  findAllExperiences: () => Promise<ExperienceEntity[]>
}

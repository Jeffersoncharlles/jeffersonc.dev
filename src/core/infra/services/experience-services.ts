import { GetExperienceUseCase } from '@/core/application/use-cases/get-all-experience-use-case'
import { PayloadExperienceRepository } from '../cms/repositories/payload-experience-repository'

export function makeGetExperience() {
  const repository = new PayloadExperienceRepository()
  const useCase = new GetExperienceUseCase(repository)
  return useCase
}

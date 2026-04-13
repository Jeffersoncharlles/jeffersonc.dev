import { GetEducationUseCase } from '@/core/application/use-cases/get-all-education-use-case'
import { PayloadEducationRepository } from '../cms/repositories/payload-education-repository'

export function makeGetAcademic() {
  const repository = new PayloadEducationRepository()
  const useCase = new GetEducationUseCase(repository)
  return useCase
}

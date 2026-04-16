import { GetInfrastructureUseCase } from '@/core/application/use-cases/get-all-infrastructure-use-case'
import { PayloadInfrastructuresRepository } from '../cms/repositories/payload-Infrastructure-repository'

export function makeGetInfrastructure() {
  const repository = new PayloadInfrastructuresRepository()
  const useCase = new GetInfrastructureUseCase(repository)
  return useCase
}

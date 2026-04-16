import { GetProjectsUseCase } from '@/core/application/use-cases/get-all-project-use-case'
import { PayloadProjectsRepository } from '../cms/repositories/payload-projects-repository'

export function makeGetProjects() {
  const repository = new PayloadProjectsRepository()
  const useCase = new GetProjectsUseCase(repository)
  return useCase
}

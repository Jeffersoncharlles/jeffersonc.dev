import { GetProjectsUseCase } from '@/core/application/use-cases/get-all-project-use-case'
import { GetProjectByIdUseCase } from '@/core/application/use-cases/get-project-by-id-use-case'
import { PayloadProjectsRepository } from '../cms/repositories/payload-projects-repository'

export function makeGetProjects() {
  const repository = new PayloadProjectsRepository()
  const useCase = new GetProjectsUseCase(repository)
  return useCase
}

export function makeGetProjectById() {
  const repository = new PayloadProjectsRepository()
  const useCase = new GetProjectByIdUseCase(repository)
  return useCase
}

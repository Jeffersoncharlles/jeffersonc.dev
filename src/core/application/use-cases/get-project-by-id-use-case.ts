import type { ProjectsRepository } from '../repositories/projects-repository'

export class GetProjectByIdUseCase {
  constructor(private repository: ProjectsRepository) {}

  async execute(id: string) {
    try {
      return await this.repository.findProjectById(id)
    } catch (error) {
      console.error('Project Details Error:', error)

      throw new Error(
        'Não conseguimos carregar os detalhes do projeto no momento. Por favor, tente novamente mais tarde.',
      )
    }
  }
}

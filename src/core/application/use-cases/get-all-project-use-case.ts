import type { ProjectsRepository } from '../repositories/projects-repository'

export class GetProjectsUseCase {
  constructor(private repository: ProjectsRepository) {}

  async execute() {
    try {
      return await this.repository.findAllProjects()
    } catch (error) {
      console.error('Projects Error:', error)

      throw new Error(
        'Não conseguimos carregar os projetos no momento. Por favor, tente novamente mais tarde.',
      )
    }
  }
}

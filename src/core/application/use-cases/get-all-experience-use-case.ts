import type { ExperienceRepository } from '../repositories/experience-repository'

export class GetExperienceUseCase {
  constructor(private repository: ExperienceRepository) {}

  async execute() {
    try {
      return await this.repository.findAllExperiences()
    } catch (error) {
      console.error('Experience Error:', error)

      throw new Error(
        'Não conseguimos carregar as experiências no momento. Por favor, tente novamente mais tarde.',
      )
    }
  }
}

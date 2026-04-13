import type { EducationRepository } from '../repositories/education-repository'

export class GetEducationUseCase {
  constructor(private repository: EducationRepository) {}

  async execute() {
    try {
      return await this.repository.findAllEducation()
    } catch (error) {
      console.error('EducationUseCase Error:', error)

      throw new Error(
        'Não conseguimos carregar as formações no momento. Por favor, tente novamente mais tarde.',
      )
    }
  }
}

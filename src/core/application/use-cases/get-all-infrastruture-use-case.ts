import type { InfrastructureRepository } from '../repositories/infrastructure-repository'

export class GetInfrastructureUseCase {
  constructor(private repository: InfrastructureRepository) {}

  async execute() {
    try {
      return await this.repository.findAllInfra()
    } catch (error) {
      console.error('Infrastructure Error:', error)

      throw new Error(
        'Não conseguimos carregar as infraestruturas no momento. Por favor, tente novamente mais tarde.',
      )
    }
  }
}

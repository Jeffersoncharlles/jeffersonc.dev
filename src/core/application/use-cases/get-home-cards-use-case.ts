import type { HomeCardsRepository } from '../repositories/home-repository'

export class GetHomeCardsUseCase {
  constructor(private repository: HomeCardsRepository) {}

  async execute() {
    try {
      return await this.repository.findAll()
    } catch (error) {
      console.error('HomeCardsUseCase Error:', error)

      throw new Error('Não conseguimos carregar os cards agora. ')
    }
  }
}

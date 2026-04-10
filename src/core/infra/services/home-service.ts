import { GetHomeCardsUseCase } from '@/core/application/use-cases/get-home-cards-use-case'
import { PayloadHomeCardsRepository } from '../cms/repositories/payload-home-cards-repository'

export function makeGetHomeCards() {
  const repository = new PayloadHomeCardsRepository()
  const useCase = new GetHomeCardsUseCase(repository)
  return useCase
}

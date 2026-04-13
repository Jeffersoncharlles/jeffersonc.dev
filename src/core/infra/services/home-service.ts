import { GetHomeCardsUseCase } from '@/core/application/use-cases/get-home-cards-use-case'
import { PayloadHomeRepository } from '../cms/repositories/payload-home-repository'

export function makeGetHomeCards() {
  const repository = new PayloadHomeRepository()
  const useCase = new GetHomeCardsUseCase(repository)
  return useCase
}

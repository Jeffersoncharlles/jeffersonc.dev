import { GetHomeCardsUseCase } from '@/core/application/use-cases/get-home-cards-use-case'
import { PayloadRepository } from '../cms/repositories/payload-repository'

export function makeGetHomeCards() {
  const repository = new PayloadRepository()
  const useCase = new GetHomeCardsUseCase(repository)
  return useCase
}

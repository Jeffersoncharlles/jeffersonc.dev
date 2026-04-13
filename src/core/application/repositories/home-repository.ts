import type { HomeCardEntity } from '@/core/domain/entities/home-card'

export interface HomeCardsRepository {
  findAllCardsHome(): Promise<HomeCardEntity[]>
}

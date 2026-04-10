import type { HomeCardEntity } from '@/core/domain/entities/home-card'

export interface HomeCardsRepository {
  findAll(): Promise<HomeCardEntity[]>
}

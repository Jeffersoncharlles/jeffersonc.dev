import type { InfrastructureEntity } from '@/core/domain/entities/Infrastructure'

export interface InfrastructureRepository {
  findAllInfra: () => Promise<InfrastructureEntity[]>
}

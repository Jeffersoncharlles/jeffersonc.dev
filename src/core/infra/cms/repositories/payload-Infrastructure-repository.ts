import config from '@payload-config'
import { getPayload } from 'payload'
import {
  type InfrastructureEntity,
  infrastructureSchema,
} from '@/core/domain/entities/Infrastructure'

export class PayloadInfrastructuresRepository
  implements PayloadInfrastructuresRepository
{
  async findAllInfra(): Promise<InfrastructureEntity[]> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'infrastructure' })

    return docs.map((doc) => {
      const result = infrastructureSchema.safeParse({
        id: doc.id,
        name: doc.name,
        description: doc.description,
        category: doc.category,
        iconName: doc.iconName,
        updatedAt: doc.updatedAt,
        createdAt: doc.createdAt,
      })

      if (!result.success) {
        console.error('Infrastructure inválida detectada:', result.error)
        throw new Error('Infrastructure inválida detectada')
      }

      return result.data
    })
  }
}

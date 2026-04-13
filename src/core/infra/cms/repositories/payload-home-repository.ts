import config from '@payload-config'
import { getPayload } from 'payload'
import type { HomeCardsRepository } from '@/core/application/repositories/home-repository'
import {
  type HomeCardEntity,
  HomeCardSchema,
} from '@/core/domain/entities/home-card'

export class PayloadHomeRepository implements HomeCardsRepository {
  async findAllCardsHome(): Promise<HomeCardEntity[]> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'home-cards' })

    return docs.map((doc) => {
      const result = HomeCardSchema.safeParse({
        id: doc.id,
        title: doc.title,
        badge: doc.badgeLabel,
        description: doc.description,
        icon: doc.iconName,
        color: doc.colorsCards,
        tags: doc.footerTags?.map((t) => t.tag),
        order: doc.order,
      })

      if (!result.success) {
        console.error('Card inválido detectado:', result.error)
        throw new Error('Card inválido detectado')
      }

      return result.data
    })
  }
}

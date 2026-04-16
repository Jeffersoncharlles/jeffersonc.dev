import config from '@payload-config'
import { getPayload } from 'payload'
import type { ProjectsRepository } from '@/core/application/repositories/projects-repository'
import {
  infrastructureSchema,
  type ProjectEntity,
} from '@/core/domain/entities/project'

export class PayloadProjectsRepository implements ProjectsRepository {
  async findAllProjects(): Promise<ProjectEntity[]> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'projects',
      limit: 100,
      pagination: false,
    })

    return docs.map((doc) => {
      const result = infrastructureSchema.safeParse({
        id: doc.id,
        title: doc.title,
        type: doc.type,
        githubUrl: doc.githubUrl,
        liveUrl: doc.liveUrl,
        technologies: doc.technologies,
        updatedAt: doc.updatedAt,
        createdAt: doc.createdAt,
      })

      if (!result.success) {
        console.error('Project inválido detectado:', result.error)
        throw new Error('Project inválido detectado, veja o log para detalhes')
      }

      return result.data
    })
  }
}

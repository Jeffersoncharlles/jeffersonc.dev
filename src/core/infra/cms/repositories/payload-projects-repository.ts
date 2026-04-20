import config from '@payload-config'

import { getPayload } from 'payload'
import type { ProjectsRepository } from '@/core/application/repositories/projects-repository'
import {
  type ProjectEntity,
  projectSchema,
} from '@/core/domain/entities/project'
import type { Infrastructure } from '../../../../../payload-types'

export class PayloadProjectsRepository implements ProjectsRepository {
  async findAllProjects(): Promise<ProjectEntity[]> {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'projects',
      limit: 100,
      pagination: false,
    })

    const isPopulated = (
      tech: string | Infrastructure,
    ): tech is Infrastructure => {
      return typeof tech === 'object' && tech !== null && 'name' in tech
    }

    return docs.map((doc) => {
      const result = projectSchema.safeParse({
        id: doc.id,
        title: doc.title,
        type: doc.type,
        githubUrl: doc.githubUrl,
        liveUrl: doc.liveUrl,
        technologies:
          doc.technologies?.map((t) => (isPopulated(t) ? t.name : t)) ?? [],
        content: doc.content,
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

  async findProjectById(id: string): Promise<ProjectEntity | null> {
    const payload = await getPayload({ config })
    const doc = await payload.findByID({
      collection: 'projects',
      id,
    })

    if (!doc) return null

    const isPopulated = (
      tech: string | Infrastructure,
    ): tech is Infrastructure => {
      return typeof tech === 'object' && tech !== null && 'name' in tech
    }

    const result = projectSchema.safeParse({
      id: doc.id,
      title: doc.title,
      type: doc.type,
      githubUrl: doc.githubUrl,
      liveUrl: doc.liveUrl,
      technologies:
        doc.technologies?.map((t) => (isPopulated(t) ? t.name : t)) ?? [],
      content: doc.content,
      updatedAt: doc.updatedAt,
      createdAt: doc.createdAt,
    })

    if (!result.success) {
      console.error('Project inválido detectado:', result.error)
      throw new Error('Project inválido detectado, veja o log para detalhes')
    }

    return result.data
  }
}

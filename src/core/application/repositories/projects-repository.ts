import type { ProjectEntity } from '@/core/domain/entities/project'

export interface ProjectsRepository {
  findAllProjects: () => Promise<ProjectEntity[]>
}

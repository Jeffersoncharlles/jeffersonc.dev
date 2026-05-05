import type { BlogEntity } from '@/core/domain/entities/blog'

export interface BlogRepository {
  findAllPosts: () => Promise<BlogEntity[]>
}

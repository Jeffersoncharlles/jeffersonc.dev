import type { BlogEntity } from '@/core/domain/entities/blog'

export interface BlogRepository {
  findAllPosts: () => Promise<BlogEntity[]>
  findPostBySlug: (slug: string) => Promise<BlogEntity>
  findPostById: (id: string) => Promise<BlogEntity>
}

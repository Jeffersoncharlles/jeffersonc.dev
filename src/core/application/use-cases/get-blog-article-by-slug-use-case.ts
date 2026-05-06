import type { BlogRepository } from '../repositories/blog-repository'

export class GetBlogArticleBySlugUseCase {
  constructor(private repository: BlogRepository) {}

  async execute(slug: string) {
    try {
      return await this.repository.findPostBySlug(slug)
    } catch (error) {
      console.error('GetBlogArticleBySlugUseCase Error:', error)

      throw new Error('Não conseguimos carregar o post agora. ')
    }
  }
}

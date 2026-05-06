import type { BlogRepository } from '../repositories/blog-repository'

export class GetAllBlogArticlesUseCase {
  constructor(private repository: BlogRepository) {}

  async execute() {
    try {
      return await this.repository.findAllPosts()
    } catch (error) {
      console.error('GetAllBlogArticlesUseCase Error:', error)

      throw new Error('Não conseguimos carregar o post agora. ')
    }
  }
}

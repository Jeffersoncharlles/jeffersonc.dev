import type { BlogRepository } from '../repositories/blog-repository'

export class GetAllPostsUseCase {
  constructor(private repository: BlogRepository) {}

  async execute() {
    try {
      return await this.repository.findAllPosts()
    } catch (error) {
      console.error('GetAllPostsUseCase Error:', error)

      throw new Error('Não conseguimos carregar os posts agora. ')
    }
  }
}

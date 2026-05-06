import { GetAllBlogArticlesUseCase } from '@/core/application/use-cases/get-all-blog-articles-use-case'
import { GetBlogArticleBySlugUseCase } from '@/core/application/use-cases/get-blog-article-by-slug-use-case'
import { PayloadBlogRepository } from '../cms/repositories/payload-blog-repository'

export function makeGetBlogArticles() {
  const repository = new PayloadBlogRepository()
  const useCase = new GetAllBlogArticlesUseCase(repository)
  return useCase
}

export function makeGetBlogArticleBySlug() {
  const repository = new PayloadBlogRepository()
  const useCase = new GetBlogArticleBySlugUseCase(repository)
  return useCase
}

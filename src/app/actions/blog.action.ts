import { revalidatePath } from 'next/cache'
import z from 'zod'
import { blogSchema } from '@/core/domain/entities/blog'
import { makeGetBlogArticles } from '@/core/infra/services/blog-services'

export const blogAllArticlesSchema = z.array(blogSchema)
export type BlogAllArticlesResponse = z.infer<typeof blogAllArticlesSchema>

export const blogArticleBySlugSchema = blogSchema
export type BlogArticleBySlugResponse = z.infer<typeof blogArticleBySlugSchema>

export const getAllArticlesAction = async () => {
  try {
    const articles = await makeGetBlogArticles().execute()

    const parsedArticles = blogAllArticlesSchema.safeParse(articles)

    if (!parsedArticles.success) {
      console.error('Invalid articles data:', parsedArticles.error)

      return {
        success: false,
        msg: parsedArticles.error.message,
        articles: [],
      }
    }
    revalidatePath('/blog')

    return {
      success: true,
      articles: parsedArticles.data,
    }
  } catch (error) {
    console.error('Error fetching articles:', error)

    return {
      success: false,
      msg: 'Failed to fetch articles',
      articles: [],
    }
  }
}

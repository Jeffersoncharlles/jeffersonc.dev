import config from '@payload-config'
import { getPayload } from 'payload'
import type { BlogRepository } from '@/core/application/repositories/blog-repository'
import { type BlogEntity, blogSchema } from '@/core/domain/entities/blog'

const BLOG_QUERY_DEPTH = 2

export class PayloadBlogRepository implements BlogRepository {
  async findPostById(id: string): Promise<BlogEntity> {
    const payload = await getPayload({ config })

    const doc = await payload.findByID({
      collection: 'blog',
      id,
      depth: BLOG_QUERY_DEPTH,
    })

    const result = blogSchema.safeParse({
      id: doc.id,
      title: doc.title,
      markdown: doc.markdown,
      slug: doc.slug,
      category: doc.category,
      description: doc.description,
      publishedAt: doc.publishedAt,
      updatedAt: doc.updatedAt,
      createdAt: doc.createdAt,
    })

    if (!result.success) {
      console.error('article is invalid :', result.error)
      throw new Error('article is invalid ')
    }

    return result.data
  }

  async findAllPosts(): Promise<BlogEntity[]> {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
      collection: 'blog',
      limit: 50,
      sort: '-publishedAt',
      depth: BLOG_QUERY_DEPTH,
    })

    return docs.map((doc) => {
      const result = blogSchema.safeParse({
        id: doc.id,
        title: doc.title,
        markdown: doc.markdown,
        slug: doc.slug,
        category: doc.category,
        description: doc.description,
        publishedAt: doc.publishedAt,
        updatedAt: doc.updatedAt,
        createdAt: doc.createdAt,
      })

      if (!result.success) {
        console.error('article is invalid :', result.error)
        throw new Error('article is invalid')
      }

      return result.data
    })
  }

  async findPostBySlug(slug: string): Promise<BlogEntity> {
    const payload = await getPayload({ config })

    const doc = await payload.find({
      collection: 'blog',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
      depth: BLOG_QUERY_DEPTH,
    })

    console.log('doc :', doc)

    if (doc.totalDocs === 0 || !doc.docs[0]) {
      throw new Error('Post não encontrado')
    }

    const result = blogSchema.safeParse({
      id: doc.docs[0].id,
      title: doc.docs[0].title,
      markdown: doc.docs[0].markdown,
      slug: doc.docs[0].slug,
      category: doc.docs[0].category,
      content: doc.docs[0].content,
      description: doc.docs[0].description,
      publishedAt: doc.docs[0].publishedAt,
      updatedAt: doc.docs[0].updatedAt,
      createdAt: doc.docs[0].createdAt,
    })

    if (!result.success) {
      console.error('article is invalid :', result.error)
      throw new Error('article is invalid ')
    }

    return result.data
  }
}

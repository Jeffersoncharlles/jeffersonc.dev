// import config from '@payload-config'
// import { getPayload } from 'payload'
// import type { BlogRepository } from '@/core/application/repositories/blog-repository'
// import type { BlogEntity } from '@/core/domain/entities/blog'

// export class PayloadBlogRepository implements BlogRepository {
//   async findAllPosts(): Promise<BlogEntity[]> {
//     const payload = await getPayload({ config })

//     const { docs } = await payload.find({ collection: 'blog' })

//     // return docs.map((doc) => ({
//     //   id: doc.id,
//     //   title: doc.title,
//     //   content: doc.content,
//     // }))
//   }
// }

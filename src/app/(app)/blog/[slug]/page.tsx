import { Suspense } from 'react'
import { ArticlePost } from './_components/article-post'
import { ArticlePostSkeleton } from './_components/article-post-skeleton'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
      <Suspense fallback={<ArticlePostSkeleton />}>
        <ArticlePost slug={slug} />
      </Suspense>
    </section>
  )
}

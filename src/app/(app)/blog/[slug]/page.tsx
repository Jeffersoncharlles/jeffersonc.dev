import config from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

type BlogDoc = {
  id: string
  title: string
  slug?: string | null
  category: 'frontend' | 'backend' | 'career'
  description?: string | null
  markdown: string
  publishedAt?: string | null
}

const categoryLabel: Record<BlogDoc['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  career: 'Carreira',
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'blog',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  if (result.docs.length === 0) {
    notFound()
  }

  const post = result.docs[0] as unknown as BlogDoc

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
      <header className="mb-8 border-b border-white/10 pb-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-md bg-dracula-cyan/10 px-2 py-1 text-xs font-bold uppercase tracking-wide text-dracula-cyan">
            {categoryLabel[post.category]}
          </span>
          <span className="text-xs text-muted-foreground">
            {post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString('pt-BR')
              : 'Sem data'}
          </span>
        </div>

        <h1 className="font-['Space_Grotesk:Bold',sans-serif] text-3xl font-bold text-foreground md:text-4xl">
          {post.title}
        </h1>

        {post.description && (
          <p className="mt-4 font-['Inter:Regular',sans-serif] text-base text-muted-foreground">
            {post.description}
          </p>
        )}
      </header>

      <section className="rounded-2xl border border-white/10 bg-card/50 p-5 md:p-8">
        <pre className="whitespace-pre-wrap wrap-break-word font-['Inter:Regular',sans-serif] text-sm leading-7 text-foreground md:text-base">
          {post.markdown}
        </pre>
      </section>
    </article>
  )
}

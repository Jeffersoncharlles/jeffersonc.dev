import { makeGetBlogArticleBySlug } from '@/core/infra/services/blog-services'

type ArticleProps = {
  slug: string
}

const CATEGORY_LABELS: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  career: 'Carreira',
}

export const ArticlePost = async ({ slug }: ArticleProps) => {
  const post = await makeGetBlogArticleBySlug().execute(slug)

  if (!post) {
    return <p>Post não encontrado.</p>
  }

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 border-b border-white/10 pb-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-md bg-dracula-cyan/10 px-2 py-1 text-xs font-bold uppercase tracking-wide text-dracula-cyan">
            {CATEGORY_LABELS[post.category]}
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

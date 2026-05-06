import Link from 'next/link'

type ArticleCardProps = {
  article: {
    id: string
    title: string
    slug?: string | null
    category: 'frontend' | 'backend' | 'career'
    description?: string | null
    markdown: string
    publishedAt?: string | null
  }
}

const categoryLabel: Record<ArticleCardProps['article']['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  career: 'Carreira',
}

export const ArticleListCard = (props: ArticleCardProps) => {
  const summarize = (
    description: string | null | undefined,
    markdown: string,
  ) => {
    if (description && description.trim().length > 0) {
      return description
    }

    const plain = markdown
      .replace(/[#*_`>-]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    return plain.slice(0, 160) + (plain.length > 160 ? '...' : '')
  }

  return (
    <Link
      key={props.article.id}
      href={`/blog/${props.article.slug}`}
      className="group rounded-2xl border border-white/10 bg-card/50 p-5 transition-colors hover:border-dracula-cyan/40"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-md bg-dracula-cyan/10 px-2 py-1 text-xs font-bold uppercase tracking-wide text-dracula-cyan">
          {categoryLabel[props.article.category]}
        </span>
        <span className="text-xs text-muted-foreground">
          {props.article.publishedAt
            ? new Date(props.article.publishedAt).toLocaleDateString('pt-BR')
            : 'Sem data'}
        </span>
      </div>

      <h2 className="mb-2 font-['Space_Grotesk:Bold',sans-serif] text-xl font-bold text-foreground group-hover:text-dracula-cyan transition-colors">
        {props.article.title}
      </h2>

      <p className="font-['Inter:Regular',sans-serif] text-sm leading-6 text-muted-foreground md:text-base">
        {summarize(props.article.description, props.article.markdown)}
      </p>
    </Link>
  )
}

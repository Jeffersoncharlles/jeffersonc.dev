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
  isFeatured?: boolean
}

const categoryLabel: Record<ArticleCardProps['article']['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  career: 'Carreira',
}

export const ArticleListCard = ({ article, isFeatured }: ArticleCardProps) => {
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
      key={article.id}
      href={`/blog/${article.slug}`}
      className="group flex flex-col gap-4 pb-16 border-b border-white/5 transition-opacity hover:opacity-80"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`text-[10px] font-bold uppercase tracking-widest ${
            isFeatured ? 'text-dracula-pink' : 'text-dracula-cyan'
          }`}
        >
          {categoryLabel[article.category]}
        </span>
        <span className="text-xs text-muted-foreground/60 font-medium">
          {article.publishedAt
            ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
              })
            : 'Feb 15'}{' '}
          • 12 Min Read
        </span>
      </div>

      <h2
        className={`font-['Space_Grotesk:Bold',sans-serif] font-bold text-foreground transition-colors ${
          isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
        }`}
      >
        {isFeatured ? (
          <>
            {article.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dracula-purple to-dracula-pink">
              {article.title.split(' ').pop()}
            </span>
          </>
        ) : (
          article.title
        )}
      </h2>

      <p
        className={`font-['Inter:Regular',sans-serif] text-muted-foreground max-w-2xl leading-relaxed ${
          isFeatured ? 'text-lg' : 'text-base'
        }`}
      >
        {summarize(article.description, article.markdown)}
      </p>
    </Link>
  )
}

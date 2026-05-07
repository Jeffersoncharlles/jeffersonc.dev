import { getAllArticlesAction } from '@/app/actions/blog.action'
import { ArticleListCard } from './article-list-card'

export const ArticleList = async () => {
  const { articles, success, msg } = await getAllArticlesAction()

  if (!success) {
    return (
      <div className="rounded-2xl border border-white/10 bg-card/50 p-6 text-sm text-muted-foreground">
        {msg}
      </div>
    )
  }

  return (
    <section className="flex flex-col gap-16 md:gap-24">
      {articles.map((post, index) => (
        <ArticleListCard
          key={post.id}
          article={post}
          isFeatured={index === 0}
        />
      ))}

      {articles.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-card/50 p-6 text-sm text-muted-foreground">
          Nenhum post encontrado.
        </div>
      )}
    </section>
  )
}

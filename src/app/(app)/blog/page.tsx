import { Suspense } from 'react'
import { ArticleList } from './_components/article-list'
import { ArticleListSkeleton } from './_components/article-list-skeleton'

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
      <header className="mb-10 flex flex-col gap-3">
        <h1 className="font-['Space_Grotesk:Bold',sans-serif] text-3xl font-bold text-foreground md:text-4xl">
          Journal
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-sm text-muted-foreground md:text-base">
          Lista de artigos em markdown. Clique no post para ler o conteudo.
        </p>
      </header>

      <Suspense fallback={<ArticleListSkeleton />}>
        <ArticleList />
      </Suspense>
    </main>
  )
}

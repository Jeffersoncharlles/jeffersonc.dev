import { Suspense } from 'react'
import { ArticleList } from './_components/article-list'
import { ArticleListSkeleton } from './_components/article-list-skeleton'

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-8 flex flex-col gap-24 md:gap-40">
      <header className="flex flex-col gap-4">
        <h1 className="font-['Space_Grotesk:Bold',sans-serif] text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          Artigos
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg text-muted-foreground max-w-2xl">
          artigos que escrevi sobre desenvolvimento, frontend,backend e carreira
        </p>
      </header>

      <Suspense fallback={<ArticleListSkeleton />}>
        <ArticleList />
      </Suspense>
    </div>
  )
}

import { Skeleton } from '@/components/UI/skeleton'

export const ArticlePostSkeleton = () => {
  return (
    <article className="mx-auto w-3xl">
      <header className="mb-8 border-b border-white/10 pb-6">
        <div className="mb-3 flex items-center gap-3">
          <Skeleton className="h-6 w-20 rounded-md" />
          <Skeleton className="h-4 w-16" />
        </div>

        <Skeleton className="mb-4 h-10 w-3/4" />

        <Skeleton className="h-5 w-full" />
        <Skeleton className="mt-2 h-5 w-2/3" />
      </header>

      <section className="rounded-2xl border border-white/10 bg-card/50 p-5 md:p-8">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="mt-4 h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="mt-4 h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </section>
    </article>
  )
}

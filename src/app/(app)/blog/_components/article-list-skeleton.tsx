import { Skeleton } from '@/components/UI/skeleton'

export const ArticleListSkeleton = () => {
  return (
    <section className="flex flex-col gap-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index.toString()}
          className="rounded-2xl border border-white/10 bg-card/50 p-5"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <Skeleton className="h-5 w-24 rounded-md" />
            <Skeleton className="h-4 w-32" />
          </div>

          <Skeleton className="mb-2 h-6 w-3/4" />

          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
        </div>
      ))}
    </section>
  )
}

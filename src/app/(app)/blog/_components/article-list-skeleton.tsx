import { Skeleton } from '@/components/UI/skeleton'

export const ArticleListSkeleton = () => {
  return (
    <section className="flex flex-col gap-16 md:gap-24">
      {Array.from({ length: 4 }).map((_, index) => {
        const isFeatured = index === 0
        return (
          <div
            key={index.toString()}
            className="flex flex-col gap-4 pb-16 border-b border-white/5"
          >
            <div className="flex items-center justify-between gap-3">
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-4 w-32" />
            </div>

            <Skeleton className={`mb-2 w-3/4 ${isFeatured ? 'h-10' : 'h-8'}`} />

            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        )
      })}
    </section>
  )
}

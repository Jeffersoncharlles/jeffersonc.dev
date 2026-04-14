import { Skeleton } from '@/components/UI/skeleton'

export const AcademicListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, sectionIndex) => (
        <div
          key={`section-${sectionIndex.toString()}`}
          className="col-span-full w-full rounded-3xl border border-border/60 bg-card p-6"
        >
          <div className="mb-6 flex items-center justify-between">
            <Skeleton className="h-6 w-2/5" />
            <Skeleton className="h-6 w-24 rounded-xl" />
          </div>

          <div className="space-y-3">
            {Array.from({ length: 2 }).map((_, itemIndex) => (
              <div
                key={`item-${itemIndex.toString()}`}
                className="rounded-2xl border border-border/60 bg-background/20 p-4"
              >
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="mt-2 h-5 w-3/4" />
                <Skeleton className="mt-2 h-4 w-1/2" />
                <Skeleton className="mt-4 h-3 w-full" />
                <Skeleton className="mt-2 h-3 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

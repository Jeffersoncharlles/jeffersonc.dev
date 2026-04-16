import { Skeleton } from '@/components/UI/skeleton'

export const SkeletonInfrastructureList = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, groupIndex) => (
        <article key={`group-${groupIndex.toString()}`} className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-dracula-cyan/30 font-semibold text-xl">
              ##
            </span>
            <Skeleton className="h-7 w-64 bg-dracula-comment/10" />
          </div>
          <div className="pl-1 border-l border-dracula-comment/20">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {Array.from({ length: 12 }).map((_, iconIndex) => (
                <div
                  key={`icon-${iconIndex.toString()}`}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <Skeleton className="h-10 w-10 rounded-md bg-dracula-comment/10" />

                  <Skeleton className="h-3 w-12 bg-dracula-comment/5" />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Skeleton className="h-4 w-3/4 max-w-md bg-dracula-comment/5 italic" />
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

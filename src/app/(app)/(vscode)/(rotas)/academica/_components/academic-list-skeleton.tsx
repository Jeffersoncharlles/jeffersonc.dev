import { Skeleton } from '@/components/UI/skeleton'

export const AcademicListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index.toString()} className="relative pl-12 md:pl-20">
          <div className="absolute left-6.5 md:left-10.5 top-6 w-3 h-3 rounded-full border-4 border-background z-20 shadow-[0_0_8px_rgba(0,0,0,0.5)] bg-dracula-green shadow-dracula-green" />
          <div className="w-full bg-card rounded-lg p-6 border border-border">
            <Skeleton className="w-3/4 h-6" />
            <Skeleton className="w-3/4 h-6" />
            <Skeleton className="text-dracula-purple font-medium">
              <Skeleton className="w-1/4 h-4" />
            </Skeleton>
            <Skeleton className="text-sm text-muted-foreground leading-relaxed py-4">
              <Skeleton className="w-full h-3 mb-2" />
              <Skeleton className="w-full h-3 mb-2" />
              <Skeleton className="w-3/4 h-3" />
            </Skeleton>
            <Skeleton className="text-sm text-muted-foreground leading-relaxed py-4">
              <Skeleton className="w-full h-3 mb-2" />
              <Skeleton className="w-full h-3 mb-2" />
              <Skeleton className="w-3/4 h-3" />
            </Skeleton>
            <Skeleton className="flex">
              <Skeleton className="w-1/4 h-3" />
              <Skeleton className="w-1/4 h-3" />
            </Skeleton>
          </div>
        </div>
      ))}
    </>
  )
}

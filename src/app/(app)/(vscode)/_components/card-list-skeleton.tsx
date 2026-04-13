import { Skeleton } from '@/components/UI/skeleton'

export const CardListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index.toString()} className="h-58" />
      ))}
    </>
  )
}

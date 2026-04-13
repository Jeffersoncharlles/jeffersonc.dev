import { Suspense } from 'react'
import { AcademicList } from './_components/academic-list'
import { AcademicListSkeleton } from './_components/academic-list-skeleton'

const ApplicationPage = () => {
  return (
    <div className="relative flex w-full min-h-full flex-col gap-12 py-8">
      {/* Vertical Timeline Line */}
      <div className="absolute top-0 bottom-0 left-8 md:left-12 w-0.5 bg-dracula-purple/20" />

      <Suspense fallback={<AcademicListSkeleton />}>
        <AcademicList />
      </Suspense>
    </div>
  )
}

export default ApplicationPage

import { Suspense } from 'react'
import { AcademicList } from './_components/academic-list'
import { AcademicListSkeleton } from './_components/academic-list-skeleton'

const ApplicationPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full">
          <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-2xl md:text-[36px] text-white  mt-3">
            Formações e Certificações
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-4 w-full">
        <Suspense fallback={<AcademicListSkeleton />}>
          <AcademicList />
        </Suspense>
      </div>
    </div>
  )
}

export default ApplicationPage

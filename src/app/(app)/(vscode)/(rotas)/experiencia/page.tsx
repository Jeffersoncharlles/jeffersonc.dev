import { Suspense } from 'react'
import { ExperiencesListSkeleton } from './_components/experienc-list-skeleton'
import { ExperiencesList } from './_components/experiences-list'

const IntegrationsPage = () => {
  return (
    <div className="relative flex w-full min-h-full flex-col gap-12 py-8">
      {/* Vertical Timeline Line */}
      <div className="absolute top-0 bottom-0 left-8 md:left-12 w-0.5 bg-dracula-purple/20" />

      <Suspense fallback={<ExperiencesListSkeleton />}>
        <ExperiencesList />
      </Suspense>
    </div>
  )
}
export default IntegrationsPage

import { Suspense } from 'react'
import { ProjectsList } from './_components/projects-list'

const ProjectsPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full">
          <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-2xl md:text-[36px] text-white  mt-3">
            Projetos de destaques
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8 pb-4 w-full">
        <Suspense>
          <ProjectsList />
        </Suspense>
      </div>
    </div>
  )
}
export default ProjectsPage

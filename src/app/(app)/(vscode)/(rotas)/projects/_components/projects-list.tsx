import Link from 'next/link'
import { makeGetProjects } from '@/core/infra/services/projects-services'
import { ProjectCard } from './project-card'

export const ProjectsList = async () => {
  const projects = await makeGetProjects().execute()

  return (
    <>
      {projects.map((project) => (
        <div key={project.id}>
          <Link
            href={`/projects/${project.id}?title=${encodeURIComponent(project.title)}`}
            className="block w-full text-left outline-none cursor-pointer"
          >
            <ProjectCard project={project} />
          </Link>
        </div>
      ))}
    </>
  )
}

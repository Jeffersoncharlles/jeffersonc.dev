import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Bookmark } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/UI/badge'
import { makeGetProjects } from '@/core/infra/services/projects-services'

export const ProjectsList = async () => {
  const projects = await makeGetProjects().execute()

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="border  p-4 border-dracula-cyan w-full max-w-md rounded-md font-sans shadow-sm"
        >
          <div className="flex items-center gap-2 mb-2 justify-between">
            <h2 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-lg text-white mb-2">
              <Bookmark className="inline-block mr-2 text-gray-400" size={16} />
              {project.title}
            </h2>
          </div>

          <div>
            <RichText data={project.content as SerializedEditorState} />
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-dracula-cyan" />
              <span>{project.technologies?.join(', ')}</span>
            </div>
          </div>

          <div className="flex justify-between gap-2 mt-2">
            <Badge.Root>
              <Badge.Content>{project.type}</Badge.Content>
            </Badge.Root>
            <Badge.Root className="border border-dracula-pink cursor-pointer hover:border-dracula-pink/80">
              <Badge.Content className="flex items-center ">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver GitHub
                </Link>
              </Badge.Content>
            </Badge.Root>
          </div>
        </div>
      ))}
    </>
  )
}

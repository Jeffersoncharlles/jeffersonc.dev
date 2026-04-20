import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Bookmark } from 'lucide-react'
import type { ProjectEntity } from '@/core/domain/entities/project'

export function ProjectCard({ project }: { project: ProjectEntity }) {
  return (
    <div className="border flex flex-col p-4 border-dracula-cyan w-full max-w-md rounded-md font-sans shadow-sm hover:bg-dracula-comment/5 transition-colors h-full">
      <div className="flex items-center gap-2 mb-2 justify-between">
        <h2 className="font-bold text-lg text-white flex items-center gap-2">
          <Bookmark className="text-gray-400" size={16} />
          {project.title}
        </h2>
      </div>

      {/* No Card, mostramos apenas o resumo (line-clamp) */}
      <div className="text-sm text-muted-foreground flex-1 line-clamp-3 mb-4">
        <RichText data={project.content as SerializedEditorState} />
      </div>

      <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-4 border-t border-dracula-comment/20">
        <span className="w-3 h-3 rounded-full bg-dracula-cyan" />
        <span className="truncate">{project.technologies?.join(', ')}</span>
      </div>
    </div>
  )
}

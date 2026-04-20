import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ArrowLeft, Bookmark, ExternalLink, GitBranch } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/UI/badge'
import { makeGetProjectById } from '@/core/infra/services/projects-services'

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params
  const project = await makeGetProjectById().execute(id)

  if (!project) {
    return notFound()
  }

  return (
    <div className="flex flex-col h-full bg-dracula-background overflow-y-auto hide-scrollbar animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between p-4 border-b border-dracula-comment/20 sticky top-0 bg-dracula-background/80 backdrop-blur-sm z-10">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-dracula-comment hover:text-dracula-pink transition-colors group"
        >
          <div className="p-1.5 rounded-md group-hover:bg-dracula-pink/10 transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm font-medium">Voltar para projetos</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-2 text-xs font-bold text-dracula-cyan hover:underline bg-dracula-cyan/5 px-3 py-1.5 rounded-full border border-dracula-cyan/20 transition-all hover:bg-dracula-cyan/10"
          >
            <GitBranch size={14} />
            GitHub
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-2 text-xs font-bold text-dracula-green hover:underline bg-dracula-green/5 px-3 py-1.5 rounded-full border border-dracula-green/20 transition-all hover:bg-dracula-green/10"
            >
              <ExternalLink size={14} />
              Live Demo
            </Link>
          )}
        </div>
      </div>

      <div className="flex-1 p-6 md:p-10 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-6">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge.Root>
                <Badge.Content>{project.type}</Badge.Content>
              </Badge.Root>
              <span className="text-dracula-comment text-xs">•</span>
              <span className="text-dracula-comment text-xs">
                Atualizado em{' '}
                {project.updatedAt
                  ? new Date(project.updatedAt).toLocaleDateString('pt-BR')
                  : 'N/A'}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-dracula-pink flex items-center gap-3">
              <Bookmark size={32} />
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-dracula-purple/10 text-dracula-purple border border-dracula-purple/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </header>

          <div className="h-px bg-dracula-comment/20 w-full my-4" />

          <div className="prose prose-invert prose-purple max-w-none">
            <RichText data={project.content as SerializedEditorState} />
          </div>
        </div>
      </div>
    </div>
  )
}

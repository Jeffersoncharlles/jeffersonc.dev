import {
  Activity,
  AppWindow,
  Award,
  Blocks,
  BookOpen,
  Code,
  Cpu,
  Database,
  GraduationCap,
  Laptop,
  Link as LinkIcon,
  Network,
  PlayCircle,
  QrCode,
  Terminal,
} from 'lucide-react'
import Link from 'next/link'
import { FolderContent } from './folder-content'
import { FileItem } from './UI/FileItem'

export const AsideContent = () => {
  return (
    <>
      <FolderContent
        name="app"
        icon={AppWindow}
        iconColor="text-dracula-pink"
        openIconColor="text-dracula-pink"
        defaultOpen
      >
        <FileItem.Root asChild>
          <Link href="/links">
            <LinkIcon size={16} className="text-dracula-cyan" />
            <FileItem.Title>links</FileItem.Title>
          </Link>
        </FileItem.Root>

        <FileItem.Root asChild>
          <Link href="/social">
            <QrCode size={16} className="text-dracula-green" />
            <FileItem.Title>social</FileItem.Title>
          </Link>
        </FileItem.Root>

        <FileItem.Root asChild>
          <Link href="/status">
            <Activity size={16} className="text-dracula-cyan" />
            <FileItem.Title>status</FileItem.Title>
          </Link>
        </FileItem.Root>
      </FolderContent>

      <FolderContent
        name="core"
        icon={Cpu}
        iconColor="text-dracula-purple"
        openIconColor="text-dracula-purple"
        defaultOpen
      >
        <FileItem.Root asChild>
          <Link href="/application">
            <Award size={16} className="text-dracula-orange" />
            <FileItem.Title>application</FileItem.Title>
          </Link>
        </FileItem.Root>
        <FileItem.Root asChild>
          <Link href="/domain">
            <GraduationCap size={16} className="text-dracula-pink" />
            <FileItem.Title>domain</FileItem.Title>
          </Link>
        </FileItem.Root>
      </FolderContent>

      <FolderContent
        name="infra"
        icon={Database}
        iconColor="text-dracula-cyan"
        openIconColor="text-dracula-cyan"
        defaultOpen
      >
        <FileItem.Root asChild>
          <Link href="/stack">
            <Blocks size={16} className="text-dracula-purple" />
            <FileItem.Title>stack</FileItem.Title>
          </Link>
        </FileItem.Root>
        <FileItem.Root asChild>
          <Link href="/setup">
            <Laptop size={16} className="text-dracula-green" />
            <FileItem.Title>setup</FileItem.Title>
          </Link>
        </FileItem.Root>
        <FileItem.Root asChild>
          <Link href="/integrations">
            <Network size={16} className="text-dracula-yellow" />
            <FileItem.Title>integrations</FileItem.Title>
          </Link>
        </FileItem.Root>
      </FolderContent>

      <FolderContent
        name="test"
        icon={Terminal}
        iconColor="text-dracula-orange"
        openIconColor="text-dracula-orange"
        defaultOpen
      >
        <FileItem.Root asChild>
          <Link href="/projects">
            <Code size={16} className="text-dracula-pink" />
            <FileItem.Title>projects</FileItem.Title>
          </Link>
        </FileItem.Root>
        <FileItem.Root asChild>
          <Link href="/demos">
            <PlayCircle size={16} className="text-dracula-cyan" />
            <FileItem.Title>demos</FileItem.Title>
          </Link>
        </FileItem.Root>
      </FolderContent>

      <FileItem.Root asChild>
        <Link href="/blog">
          <BookOpen size={16} className="text-dracula-yellow" />
          <FileItem.Title>blog</FileItem.Title>
        </Link>
      </FileItem.Root>
    </>
  )
}

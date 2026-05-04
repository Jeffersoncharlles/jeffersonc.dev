import {
  AppWindow,
  Award,
  BookOpen,
  Code,
  Cpu,
  Database,
  Laptop,
  Link as LinkIcon,
  Mail,
  Network,
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
        name="Bio"
        icon={AppWindow}
        iconColor="text-dracula-pink"
        openIconColor="text-dracula-pink"
        defaultOpen
      >
        <FileItem.Root asChild>
          <Link href="/" scroll={false}>
            <LinkIcon size={16} className="text-dracula-cyan" />
            <FileItem.Title>README.md</FileItem.Title>
          </Link>
        </FileItem.Root>

        <FileItem.Root asChild>
          <Link href="/social" scroll={false}>
            <QrCode size={16} className="text-dracula-green" />
            <FileItem.Title>social</FileItem.Title>
          </Link>
        </FileItem.Root>
        <FileItem.Root asChild>
          <Link href="/setup" scroll={false}>
            <Laptop size={16} className="text-dracula-green" />
            <FileItem.Title>setup</FileItem.Title>
          </Link>
        </FileItem.Root>
      </FolderContent>

      <FolderContent
        name="Formação"
        icon={Cpu}
        iconColor="text-dracula-purple"
        openIconColor="text-dracula-purple"
        defaultOpen
      >
        <FileItem.Root asChild>
          <Link href="/academica" scroll={false}>
            <Award size={16} className="text-dracula-orange" />
            <FileItem.Title>academica</FileItem.Title>
          </Link>
        </FileItem.Root>
      </FolderContent>

      <FolderContent
        name="Experiência"
        icon={Database}
        iconColor="text-dracula-cyan"
        openIconColor="text-dracula-cyan"
        defaultOpen
      >
        <FileItem.Root asChild>
          <Link href="/experiencia" scroll={false}>
            <Network size={16} className="text-dracula-yellow" />
            <FileItem.Title>experiência</FileItem.Title>
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
          <Link href="/projects" scroll={false}>
            <Code size={16} className="text-dracula-pink" />
            <FileItem.Title>projects</FileItem.Title>
          </Link>
        </FileItem.Root>
      </FolderContent>

      <FileItem.Root asChild>
        <Link href="/blog">
          <BookOpen size={16} className="text-dracula-yellow" />
          <FileItem.Title>blog</FileItem.Title>
        </Link>
      </FileItem.Root>

      <FileItem.Root asChild>
        <Link href="/contato" scroll={false}>
          <Mail size={16} className="text-dracula-cyan" />
          <FileItem.Title>contato.tsx</FileItem.Title>
        </Link>
      </FileItem.Root>
    </>
  )
}

'use client'

import { Folder } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { AsideContent } from './aside-content'
import { FolderContent } from './folder-content'
import { FileItem } from './UI/FileItem'

type AsideProps = {
  isMobileOpen: boolean
}

export function Aside({ isMobileOpen }: AsideProps) {
  return (
    <aside
      className={twMerge(
        'h-full backdrop-blur-[10px] border-r border-border flex flex-col py-3 shrink-0 overflow-y-auto overflow-x-hidden whitespace-nowrap bg-background/95 lg:bg-transparent absolute lg:static top-0 left-0 z-40 transition-transform duration-300 w-52 lg:w-55',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0',
      )}
    >
      <div className="flex flex-col">
        <FolderContent name="src" icon={Folder} defaultOpen>
          <AsideContent />
        </FolderContent>

        <FolderContent name="node_modules" icon={Folder} defaultOpen={false}>
          <FileItem.Root>
            <Folder className="shrink-0  text-dracula-green" size={14} />
            <FileItem.Title>.bin</FileItem.Title>
          </FileItem.Root>
        </FolderContent>
      </div>
    </aside>
  )
}

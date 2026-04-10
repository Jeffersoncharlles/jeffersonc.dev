'use client'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Folder } from './UI/folder'

type FolderProps = {
  name: string
  icon: React.ElementType
  defaultOpen?: boolean
  children?: React.ReactNode
  className?: string
  iconColor?: string
  openIconColor?: string
}

export const FolderContent = ({
  name,
  icon: Icon,
  defaultOpen = false,
  children,
  iconColor = 'text-dracula-purple',
  openIconColor = 'text-dracula-cyan',
}: FolderProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Folder.Root>
      <Folder.Button onClick={() => setIsOpen(!isOpen)}>
        <Folder.Icon>
          {isOpen ? (
            <ChevronDown size={14} strokeWidth={2.5} />
          ) : (
            <ChevronRight size={14} strokeWidth={2.5} />
          )}
        </Folder.Icon>
        <Icon
          size={16}
          className={`shrink-0 ${isOpen ? openIconColor : iconColor}`}
        />
        <Folder.Title data-open={isOpen}>{name}</Folder.Title>
      </Folder.Button>
      {isOpen && (
        <div className="flex flex-col ml-7 border-l border-foreground/10 pl-2">
          {children}
        </div>
      )}
    </Folder.Root>
  )
}

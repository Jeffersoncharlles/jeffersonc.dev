'use client'

import { Bookmark, FileText, RecycleIcon, X } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import type React from 'react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const TabsBar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [lastReadmePath, setLastReadmePath] = useState('/')

  useEffect(() => {
    if (
      pathname !== '/contato' &&
      !pathname.startsWith('/blog') &&
      !pathname.startsWith('/projects/')
    ) {
      setLastReadmePath(pathname)
      sessionStorage.setItem('lastReadmePath', pathname)
    }
  }, [pathname])

  useEffect(() => {
    const saved = sessionStorage.getItem('lastReadmePath')
    if (saved) setLastReadmePath(saved)
  }, [])

  const isContactActive = pathname === '/contato'
  const isProjectActive = pathname.startsWith('/projects/')
  const isReadmeActive =
    !isContactActive && !isProjectActive && !pathname.startsWith('/blog')

  const projectTitle = searchParams.get('title') || 'projeto.md'

  const handleReadmeClick = () => {
    router.push(lastReadmePath)
  }

  const handleContactClick = () => {
    router.push('/contato')
  }

  const handleCloseProject = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation()
    router.push('/projects')
  }

  return (
    <div className="bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.05)] border-b border-solid flex h-[40px] items-center shrink-0 w-full overflow-x-auto hide-scrollbar">
      {/* README.md Tab */}
      <button
        type="button"
        onClick={handleReadmeClick}
        className={twMerge(
          'h-full flex items-center cursor-pointer hover:bg-white/5 transition-colors border-b-2 border-transparent',
          isReadmeActive && 'bg-[rgba(189,147,249,0.15)] border-dracula-purple',
        )}
      >
        <div
          className={twMerge(
            'flex gap-[8px] h-full items-center px-[20px] relative transition-opacity',
            !isReadmeActive && 'opacity-60 hover:opacity-100',
          )}
        >
          <div className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center">
            <RecycleIcon className="text-dracula-purple" />
          </div>
          <div className="flex items-center">
            <p
              className={twMerge(
                "font-['Inter:Medium',sans-serif] text-[11px] text-[#f8f8f2]",
                isReadmeActive ? 'font-medium' : 'font-normal',
              )}
            >
              README.md
            </p>
          </div>
        </div>
      </button>

      {/* Dynamic Project Tab */}
      {isProjectActive && (
        <div className="flex gap-[8px] h-full items-center px-[20px] relative">
          <div className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center">
            <Bookmark size={12} className="text-dracula-pink" />
          </div>
          <div className="flex items-center gap-2">
            <p className="font-['Inter:Medium',sans-serif] text-[11px] text-[#f8f8f2] font-medium">
              {projectTitle.toLowerCase().replace(/\s+/g, '-')}.md
            </p>
            <button
              type="button"
              onClick={handleCloseProject}
              onKeyDown={(e) => e.key === 'Enter' && handleCloseProject(e)}
              className="hover:bg-dracula-pink/20 rounded-sm p-0.5 transition-colors outline-none focus-visible:ring-1 focus-visible:ring-dracula-pink"
              aria-label="Close project tab"
            >
              <X size={10} className="text-dracula-pink" />
            </button>
          </div>
        </div>
      )}

      {/* contato.tsx Tab */}
      <button
        type="button"
        onClick={handleContactClick}
        className={twMerge(
          'h-full flex items-center cursor-pointer hover:bg-white/5 transition-colors border-b-2 border-transparent',
          isContactActive && 'bg-[rgba(139,233,253,0.15)] border-dracula-cyan',
        )}
      >
        <div
          className={twMerge(
            'flex gap-[8px] h-full items-center px-[20px] relative transition-opacity',
            !isContactActive && 'opacity-60 hover:opacity-100',
          )}
        >
          <div className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center">
            <FileText className="text-dracula-cyan" />
          </div>
          <div className="flex items-center">
            <p
              className={twMerge(
                "font-['Inter:Medium',sans-serif] text-[11px] text-[#f8f8f2]",
                isContactActive ? 'font-medium' : 'font-normal',
              )}
            >
              contato.tsx
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}

export default TabsBar

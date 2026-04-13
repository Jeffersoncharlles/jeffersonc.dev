'use client'

import { FileText, RecycleIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const TabsBar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [lastReadmePath, setLastReadmePath] = useState('/')

  // Persist last README path
  useEffect(() => {
    if (pathname !== '/contato' && !pathname.startsWith('/blog')) {
      setLastReadmePath(pathname)
      sessionStorage.setItem('lastReadmePath', pathname)
    }
  }, [pathname])

  // Initialize from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('lastReadmePath')
    if (saved) setLastReadmePath(saved)
  }, [])

  const isContactActive = pathname === '/contato'
  const isReadmeActive = !isContactActive && !pathname.startsWith('/blog')

  const handleReadmeClick = () => {
    router.push(lastReadmePath)
  }

  const handleContactClick = () => {
    router.push('/contato')
  }

  return (
    <div className="bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.05)] border-b border-solid flex h-[40px] items-center shrink-0 w-full overflow-x-auto hide-scrollbar">
      {/* README.md Tab */}
      <div
        onClick={handleReadmeClick}
        className={twMerge(
          'h-full flex items-center cursor-pointer hover:bg-white/5 transition-colors border-b-2 border-transparent',
          isReadmeActive && 'bg-[rgba(189,147,249,0.15)] border-dracula-purple'
        )}
      >
        <div
          className={twMerge(
            'flex gap-[8px] h-full items-center px-[20px] relative transition-opacity',
            !isReadmeActive && 'opacity-60 hover:opacity-100'
          )}
        >
          <div className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center">
            <RecycleIcon className="text-dracula-purple" />
          </div>
          <div className="flex items-center">
            <p className={twMerge(
              "font-['Inter:Medium',sans-serif] text-[11px] text-[#f8f8f2]",
              isReadmeActive ? "font-medium" : "font-normal"
            )}>
              README.md
            </p>
          </div>
        </div>
      </div>

      {/* contato.tsx Tab */}
      <div
        onClick={handleContactClick}
        className={twMerge(
          'h-full flex items-center cursor-pointer hover:bg-white/5 transition-colors border-b-2 border-transparent',
          isContactActive && 'bg-[rgba(139,233,253,0.15)] border-dracula-cyan'
        )}
      >
        <div
          className={twMerge(
            'flex gap-[8px] h-full items-center px-[20px] relative transition-opacity',
            !isContactActive && 'opacity-60 hover:opacity-100'
          )}
        >
          <div className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center">
            <FileText className="text-dracula-cyan" />
          </div>
          <div className="flex items-center">
            <p className={twMerge(
              "font-['Inter:Medium',sans-serif] text-[11px] text-[#f8f8f2]",
              isContactActive ? "font-medium" : "font-normal"
            )}>
              contato.tsx
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabsBar

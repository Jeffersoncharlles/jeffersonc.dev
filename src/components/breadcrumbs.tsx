'use client'

import { usePathname } from 'next/navigation'

const routeMap: Record<string, { folder: string; label: string }> = {
  '/': { folder: 'Bio', label: 'README.md' },
  '/social': { folder: 'Bio', label: 'social' },
  '/setup': { folder: 'Bio', label: 'setup' },
  '/academica': { folder: 'Formação', label: 'academica' },
  '/certificacoes': { folder: 'Formação', label: 'certificações' },
  '/experiencia': { folder: 'Experiência', label: 'experiência' },
  '/projects': { folder: 'test', label: 'projects' },
  '/demos': { folder: 'test', label: 'demos' },
  '/contato': { folder: 'Geral', label: 'contato.tsx' },
}

const Breadcrumbs = () => {
  const pathname = usePathname()

  // Get mapped info or default to generic path
  const currentRoute = routeMap[pathname] || {
    folder: pathname.split('/')[1] || '',
    label: pathname.split('/').pop() || '',
  }

  return (
    <div className="flex h-[28px] items-center px-[24px] shrink-0 w-full bg-[rgba(0,0,0,0.1)] border-b border-white/5 overflow-x-auto hide-scrollbar">
      {/* Root src */}
      <div className="flex items-center opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[#f8f8f2]">
          src
        </p>
      </div>

      <div className="flex items-center justify-center px-[8px]">
        <span className="text-[#f8f8f2] opacity-30 text-[10px]">/</span>
      </div>

      {/* Logic Folder (Bio, Formação, etc) */}
      <div className="flex items-center opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[#f8f8f2]">
          {pathname.startsWith('/blog') ? 'blog' : currentRoute.folder}
        </p>
      </div>

      <div className="flex items-center justify-center px-[8px]">
        <span className="text-[#f8f8f2] opacity-30 text-[10px]">/</span>
      </div>

      {/* Current File/Page */}
      <div className="flex items-center">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-dracula-purple">
          {pathname.startsWith('/blog') ? 'post' : currentRoute.label}
        </p>
      </div>
    </div>
  )
}

export default Breadcrumbs

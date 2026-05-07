'use client'

import { Menu, PanelBottom, PanelLeft, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderProps = {
  onMenuClick?: () => void
  isMenuOpen?: boolean
}

export function Header({ onMenuClick, isMenuOpen = false }: HeaderProps) {
  return (
    <header className="h-10 md:h-11 bg-white/5 border-b border-white/5 flex items-center justify-between px-3 md:px-6 shrink-0 z-10 relative">
      {/* Left side: Mac Controls and Title */}
      <div className="flex items-center gap-2 md:gap-6 min-w-0">
        {/* Mac Controls */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5555] shadow-[0_4px_6px_-4px_rgba(239,68,68,0.2)]" />
          <div className="w-3 h-3 rounded-full bg-[#ffb86c] shadow-[0_4px_6px_-4px_rgba(249,115,22,0.2)]" />
          <div className="w-3 h-3 rounded-full bg-[#50fa7b] shadow-[0_4px_6px_-4px_rgba(34,197,94,0.2)]" />
        </div>

        {/* Menu and Title */}
        <div className="flex items-center gap-2 min-w-0">
          <button
            type="button"
            className="lg:hidden text-foreground/60 hover:text-foreground cursor-pointer transition-colors"
            aria-label={isMenuOpen ? 'Close sidebar' : 'Open sidebar'}
            onClick={onMenuClick}
          >
            <Menu size={16} />
          </button>
          <span className="text-[11px] md:text-[12px] font-medium text-foreground/80 tracking-[0.3px] opacity-60 truncate max-w-55 md:max-w-none">
            Jeffersonc.dev - Portifolio
          </span>
        </div>
      </div>

      {/* Right side: Panel Controls */}
      <div className="flex items-center gap-3 md:gap-4">
        <PanelLeft
          size={15}
          className="text-foreground/60 hover:text-foreground cursor-pointer transition-colors"
        />
        <PanelBottom
          size={15}
          className="text-foreground/60 hover:text-foreground cursor-pointer transition-colors"
        />
      </div>
    </header>
  )
}

export function BlogHeader() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'Categoria' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-50">
      <nav className="backdrop-blur-md bg-blog-bg/70 border border-white/5 rounded-xl px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-xl text-dracula-purple tracking-tight"
          >
            jeffersonc
          </Link>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-bold tracking-tight transition-colors ${
                    isActive
                      ? 'text-dracula-purple'
                      : 'text-muted-foreground/80 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-px h-6 bg-white/10 mx-2" />
          <button
            type="button"
            className="p-2 rounded-xl hover:bg-white/5 transition-colors text-muted-foreground/80 hover:text-foreground"
          >
            <Search size={18} />
          </button>
        </div>
      </nav>
    </div>
  )
}

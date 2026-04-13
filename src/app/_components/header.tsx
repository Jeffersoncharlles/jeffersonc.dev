'use client'

import { Menu, PanelBottom, PanelLeft, Search } from 'lucide-react'

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

      {/* Center: Search Bar */}
      {/* <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex items-center gap-2 bg-black/20 border border-white/10 px-16 py-1.5 rounded-xl cursor-pointer hover:bg-black/30 hover:border-white/20 transition-colors">
          <Search size={14} className="text-foreground/60" />
          <span className="text-[11px] text-foreground/60 tracking-wide font-normal">
            Search (Ctrl+P)
          </span>
        </div>
      </div> */}

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

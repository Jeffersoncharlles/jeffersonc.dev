'use client'

import { useState } from 'react'
import { Header } from '@/app/_components/header'
import { Aside } from '@/components/Aside'
import { IpadMockup } from '@/components/IpadMockup'
import { IphoneMockup } from '@/components/IphoneMockup'

export default function VSCodeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMobileAsideOpen, setIsMobileAsideOpen] = useState(false)

  const toggleMobileAside = () => {
    setIsMobileAsideOpen((prev) => !prev)
  }

  const closeMobileAside = () => {
    setIsMobileAsideOpen(false)
  }

  const uiContent = (
    <>
      <Header onMenuClick={toggleMobileAside} isMenuOpen={isMobileAsideOpen} />
      <div className="flex flex-1 overflow-hidden relative">
        <Aside isMobileOpen={isMobileAsideOpen} />

        {isMobileAsideOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={closeMobileAside}
            className="lg:hidden absolute inset-0 bg-black/35 z-30"
          />
        )}

        <main className="flex-1 overflow-auto relative z-10 lg:z-0 ">
          {children}
        </main>
      </div>
    </>
  )

  return (
    <div className="vscode-layout-background flex-1 flex flex-col items-center justify-center p-2 sm:p-3 md:p-6 lg:p-12 relative overflow-hidden">
      <div className="vscode-layout-glow" />
      <div
        className="hidden lg:flex w-full max-w-7xl h-246 max-h-280 bg-card backdrop-blur-md border border-border rounded-3xl flex-col overflow-hidden relative z-10"
        style={{ boxShadow: 'var(--shadow-vscode-card)' }}
      >
        {uiContent}
      </div>
      <div className="hidden md:flex lg:hidden w-full justify-center items-center relative z-10">
        <IpadMockup>{uiContent}</IpadMockup>
      </div>
      <div className="flex md:hidden w-full justify-center items-center relative z-10">
        <IphoneMockup>{uiContent}</IphoneMockup>
      </div>
    </div>
  )
}

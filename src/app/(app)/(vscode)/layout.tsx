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
      <div className="flex flex-1 overflow-y-auto relative">
        <Aside isMobileOpen={isMobileAsideOpen} />

        {isMobileAsideOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={closeMobileAside}
            className="lg:hidden absolute inset-0 bg-black/35 z-30"
          />
        )}

        <main className="flex flex-col flex-1 h-full overflow-auto relative z-10 lg:z-0 ">
          {children}
        </main>
      </div>
    </>
  )

  return (
    <div className="h-screen w-screen overflow-clip flex items-center justify-center fixed inset-0">
      <div className="vscode-layout-glow" />
      <section
        className="hidden  lg:flex w-full max-w-7xl  max-h-216 bg-card backdrop-blur-md border border-border rounded-3xl flex-col overflow-hidden relative z-10"
        style={{ boxShadow: 'var(--shadow-vscode-card)' }}
      >
        {uiContent}
      </section>
      <div className="hidden md:flex lg:hidden h-full max-h-screen w-full justify-center items-center relative z-10 overflow-hidden px-6">
        <IpadMockup>{uiContent}</IpadMockup>
      </div>
      <div className="flex md:hidden h-full max-h-screen w-full justify-center items-center relative z-10 overflow-hidden">
        <IphoneMockup>{uiContent}</IphoneMockup>
      </div>
    </div>
  )
}

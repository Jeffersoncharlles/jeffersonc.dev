'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
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
  const mainRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileWrapperRef = useRef<HTMLDivElement>(null)
  const tabletWrapperRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const toggleMobileAside = () => {
    setIsMobileAsideOpen((prev) => !prev)
  }

  const closeMobileAside = () => {
    setIsMobileAsideOpen(false)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname é necessário para resetar scroll ao navegar
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
    if (mainRef.current) {
      mainRef.current.scrollTop = 0
    }
    if (mobileWrapperRef.current) {
      mobileWrapperRef.current.scrollTop = 0
    }
    if (tabletWrapperRef.current) {
      tabletWrapperRef.current.scrollTop = 0
    }
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
    setIsMobileAsideOpen(false)
  }, [pathname])

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

        <main
          ref={mainRef}
          className="flex flex-col flex-1 h-full overflow-auto relative z-10 lg:z-0 "
        >
          {children}
        </main>
      </div>
    </>
  )

  return (
    <div
      ref={containerRef}
      className="vscode-layout-background flex-1 flex flex-col items-center justify-center p-2 sm:p-3 md:p-6 lg:p-12 relative overflow-y-auto md:overflow-hidden"
    >
      <div className="vscode-layout-glow" />
      <section
        className="hidden  lg:flex w-full max-w-7xl  max-h-270 bg-card backdrop-blur-md border border-border rounded-3xl flex-col overflow-hidden relative z-10"
        style={{ boxShadow: 'var(--shadow-vscode-card)' }}
      >
        {uiContent}
      </section>
      <div
        className="hidden md:flex lg:hidden w-full justify-center items-center relative z-10"
        ref={tabletWrapperRef}
      >
        <IpadMockup>{uiContent}</IpadMockup>
      </div>
      <div
        className="flex md:hidden w-full justify-center items-center relative z-10 my-2"
        ref={mobileWrapperRef}
      >
        <IphoneMockup>{uiContent}</IphoneMockup>
      </div>
    </div>
  )
}

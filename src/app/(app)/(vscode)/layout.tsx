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

        <main className="flex-1 overflow-auto relative z-10 lg:z-0">
          {children}
        </main>
      </div>
    </>
  )

  return (
    <div
      className=" flex-1 flex flex-col items-center justify-center p-2 sm:p-3 md:p-6 lg:p-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgb(26, 27, 38) 0%, rgb(36, 40, 59) 100%)',
      }}
    >
      <div
        className="absolute blur-[30px] h-[1024px] left-0 top-0 w-[1280px] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1024\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(125 0 0 125 256 307.2)\\'><stop stop-color=\\'rgba(189,147,249,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(189,147,249,0)\\' offset=\\'0.4\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 1024\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(125 0 0 125 1024 716.8)\\'><stop stop-color=\\'rgba(255,121,198,0.15)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(255,121,198,0)\\' offset=\\'0.4\\'/></radialGradient></defs></svg>')",
        }}
      />

      {/* Desktop View (Normal Layout, lg and above) */}
      <div className="hidden lg:flex w-full max-w-[1280px] h-[820px] bg-card backdrop-blur-[12px] border border-border rounded-[24px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex-col overflow-hidden relative z-10">
        {uiContent}
      </div>

      {/* Tablet View (md to lg) */}
      <div className="hidden md:flex lg:hidden w-full justify-center items-center relative z-10">
        <IpadMockup>{uiContent}</IpadMockup>
      </div>

      {/* Mobile View (sm to md) */}
      <div className="flex md:hidden w-full justify-center items-center relative z-10">
        <IphoneMockup>{uiContent}</IphoneMockup>
      </div>
    </div>
  )
}

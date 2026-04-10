'use client'

import Breadcrumbs from '@/components/breadcrumbs'
import TabsBar from '@/components/tabs-bar'

export default function ReadmeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative size-full overflow-hidden flex flex-col bg-background">
      <TabsBar />
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* header */}
      <div className="flex flex-col gap-[12px] w-full">
        <div className="w-full">
          <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-white tracking-[-0.9px]">
            Project Architecture Guide
          </h1>
        </div>
        <div className="w-full">
          <p className="font-['Liberation_Mono:Regular',sans-serif] text-[13px] md:text-[14px] text-dracula-purple opacity-80">
            Next.js 16 + Clean Architecture implementation standards.
          </p>
        </div>
        <div className="flex flex-wrap gap-[12px] pt-[12px] w-full">
          <div className="bg-[rgba(189,147,249,0.2)] border border-[rgba(189,147,249,0.3)] flex items-center px-[13px] py-[5px] rounded-[12px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-purple text-[10px] tracking-[1px] uppercase">
              v2.0.0-beta
            </span>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center px-[13px] py-[5px] rounded-[12px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase">
              Architecture Design
            </span>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px] pb-[80px] w-full">
        {children}
      </div>
    </div>
  )
}

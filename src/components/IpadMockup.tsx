import type React from 'react'

export function IpadMockup({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`bg-transparent content-stretch flex flex-col items-center relative shadow-[0px_2px_4px_0px_rgba(226,226,226,0.1),0px_40px_80px_0px_rgba(0,0,0,0.5)] rounded-[48px] ${className}`}
    >
      <div className="w-full max-w-[1024px] h-[768px] overflow-clip relative rounded-[48px] shrink-0 border border-white/5">
        <div
          aria-hidden="true"
          className="absolute bg-device-bg inset-0 pointer-events-none rounded-[48px]"
        />
        <div className="absolute bg-gradient-to-r from-[rgba(71,71,71,0)] h-px left-0 right-0 to-[rgba(71,71,71,0)] top-0 via-1/2 via-[rgba(71,71,71,0.4)]" />
        <div className="absolute bg-gradient-to-r bottom-0 from-[rgba(71,71,71,0)] h-px left-0 right-0 to-[rgba(71,71,71,0)] via-1/2 via-[rgba(71,71,71,0.4)]" />
        <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center justify-center left-1/2 -translate-x-1/2 top-0 z-20">
          <div className="bg-device-camera border border-[rgba(255,255,255,0.05)] border-solid rounded-[12px] shrink-0 w-2 h-2" />
          <div className="bg-device-camera opacity-50 rounded-[12px] shrink-0 w-1 h-1" />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(71,71,71,0.4)] z-20" />

        <div className="relative w-full h-full z-10 p-2.5 md:p-3">
          <div className="w-full h-full overflow-hidden rounded-[36px] bg-card flex flex-col border border-white/5 shadow-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

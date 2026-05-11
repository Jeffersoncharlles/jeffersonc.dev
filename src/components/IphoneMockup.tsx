import type React from 'react'

export function IphoneMockup({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={` ${className}`}>
      {/* <div className="absolute bg-[rgba(255,255,255,0.05)] blur-[50px] inset-[-80px] opacity-50 rounded-[12px]" /> */}

      {/* Device Frame */}
      <div className=" flex h-[720px]  items-center justify-center overflow-clip  relative rounded-[54px] shadow-[0px_0px_0px_2px_var(--device-frame-outer),0px_0px_0px_4px_var(--device-frame-inner)] shrink-0 w-[390px] max-w-[98vw] scale-[0.9] sm:scale-100 transform origin-center">
        <div
          aria-hidden="true"
          className="absolute bg-device-bg inset-0 pointer-events-none rounded-[54px]"
        />

        {/* Dynamic Island */}
        <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-[10px] h-[10px] rounded-full bg-device-camera shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]"></div>
        </div>

        {/* Glossy Edge */}
        <div
          className="absolute inset-0 rounded-[54px] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(154.99999978261616deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 50%)',
          }}
        />

        <div className="border border-[rgba(255,255,255,0.05)] border-solid flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[46px] overflow-hidden bg-card">
          <div
            aria-hidden="true"
            className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[46px] pointer-events-none"
          />
          <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_40px_1px_rgba(255,255,255,0.03)] pointer-events-none z-20" />

          <div className="w-full h-full relative z-10 flex flex-col pt-[46px]">
            {children}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_12px_0px_rgba(255,255,255,0.05)] z-20" />
      </div>
    </div>
  )
}

import { FileText, RecycleIcon } from 'lucide-react'

const TabsBar = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.05)] border-b border-solid flex h-[40px] items-center shrink-0 w-full overflow-x-auto hide-scrollbar">
      <div className="bg-[rgba(189,147,249,0.15)] border-[#bd93f9] border-b-2 border-solid h-full flex items-center cursor-pointer hover:bg-white/5 transition-colors">
        <div className="flex gap-[8px] h-full items-center px-[20px] relative">
          <div className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center">
            <RecycleIcon className="text-dracula-purple" />
          </div>
          <div className="flex items-center">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[#f8f8f2] text-[11px]">
              README.md
            </p>
          </div>
        </div>
      </div>
      <div className="h-full flex items-center cursor-pointer hover:bg-white/5 transition-colors">
        <div className="flex gap-[8px] h-full items-center px-[20px] relative opacity-60 hover:opacity-100 transition-opacity">
          <div className="h-[12px] w-[12px] relative shrink-0 flex items-center justify-center">
            <FileText className="text-dracula-green" />
          </div>
          <div className="flex items-center">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[11px] text-[#f8f8f2]">
              layout.tsx
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TabsBar

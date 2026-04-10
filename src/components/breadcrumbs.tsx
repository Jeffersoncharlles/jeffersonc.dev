const Breadcrumbs = () => {
  return (
    <div className="flex h-[28px] items-center px-[24px] shrink-0 w-full bg-[rgba(0,0,0,0.1)] border-b border-white/5">
      <div className="flex items-center opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[#f8f8f2]">
          src
        </p>
      </div>
      <div className="flex items-center justify-center px-[8px]">
        <span className="text-[#f8f8f2] opacity-30 text-[10px]">/</span>
      </div>
      <div className="flex items-center">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-dracula-purple">
          Clean Architecture Documentation
        </p>
      </div>
    </div>
  )
}
export default Breadcrumbs

import { Suspense } from 'react'
import { CardList } from '@/app/(app)/(vscode)/_components/card-list'
import { CardListSkeleton } from '@/app/(app)/(vscode)/_components/card-list-skeleton'
import Breadcrumbs from '@/components/breadcrumbs'
import TabsBar from '@/components/tabs-bar'

const imgMargin =
  'https://www.figma.com/api/mcp/asset/795e5aa1-6219-4c4b-a5ca-31f4a9fe7ec0'

const imgMargin1 =
  'https://www.figma.com/api/mcp/asset/53c4e721-f750-4502-8799-da0618fdea56'
const imgMargin2 =
  'https://www.figma.com/api/mcp/asset/83b0b55b-8a1c-4172-ab1a-2b8d2475bf65'
const imgIcon =
  'https://www.figma.com/api/mcp/asset/5ac91657-197a-4539-aed1-a604f6bca245'
const imgIcon1 =
  'https://www.figma.com/api/mcp/asset/565ae144-b19e-498d-ab4a-58b0538bca6b'
const imgIcon2 =
  'https://www.figma.com/api/mcp/asset/82ea566b-7d11-4b9b-b491-6d2e3edfb5eb'
const imgIcon3 =
  'https://www.figma.com/api/mcp/asset/e1af6d90-dd16-4e40-be46-30647319a5c7'
const imgIcon4 =
  'https://www.figma.com/api/mcp/asset/a934590f-f610-4c77-8407-51abc54c9cef'
const imgIcon5 =
  'https://www.figma.com/api/mcp/asset/1b01adaf-c228-43ea-90b8-b692cfee5d57'

export default function VSCodeMainEditorArea() {
  return (
    <div className="relative size-full overflow-hidden flex flex-col bg-background ">
      <TabsBar />
      <Breadcrumbs />

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 relative ">
        <div className="flex flex-col gap-9 md:gap-12 max-w-4xl w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-2xl md:text-[36px] text-white tracking-[-0.9px]">
                Jefferson Charlles
              </h1>

              <h5 className="font-['Liberation_Mono:Regular',sans-serif] text-[13px] md:text-[14px] text-dracula-purple opacity-80">
                Engenheiro de Software Full Stack
              </h5>
            </div>
            <div className="w-full">
              <p className="font-['Liberation_Mono:Regular',sans-serif] text-[13px] md:text-[14px] text-dracula-purple opacity-80">
                Construindo ecossistemas de alta performance com mentalidade de
                Engenharia de Software.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 w-full">
              <div className="bg-dracula-purple/15 border border-dracula-purple flex items-center px-[13px] py-[5px] rounded-[12px]">
                <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-purple text-[10px] tracking-[1px] uppercase">
                  PÓS-GRADUADO (2026)
                </span>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center px-[13px] py-[5px] rounded-[12px]">
                <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase">
                  ESPECIALISTA JS/TS
                </span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-10 w-full">
            <Suspense fallback={<CardListSkeleton />}>
              <CardList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

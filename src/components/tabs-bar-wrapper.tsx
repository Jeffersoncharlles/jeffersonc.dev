import { Suspense } from 'react'
import TabsBar from './tabs-bar'

export function TabsBarWrapper() {
  return (
    <Suspense fallback={<TabsBarFallback />}>
      <TabsBar />
    </Suspense>
  )
}

function TabsBarFallback() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.05)] border-b border-solid flex h-[40px] items-center shrink-0 w-full overflow-x-auto hide-scrollbar" />
  )
}

export default TabsBarWrapper

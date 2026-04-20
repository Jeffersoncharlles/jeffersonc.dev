import Breadcrumbs from '@/components/breadcrumbs'
import TabsBarWrapper from '@/components/tabs-bar-wrapper'
import { TooltipProvider } from '@/components/UI/tooltop'

export default function ReadmeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="relative h-full flex flex-col bg-background overflow-hidden">
      <TabsBarWrapper />
      <Breadcrumbs />
      {/* content */}
      <div className="w-full flex-1 min-h-218 overflow-y-auto border z-20">
        <div className="w-full max-w-4xl mx-auto min-h-full flex flex-col gap-6 p-4">
          <TooltipProvider>{children}</TooltipProvider>
        </div>
      </div>
    </section>
  )
}

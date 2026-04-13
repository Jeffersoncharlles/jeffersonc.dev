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

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-20 w-full">
        {children}
      </div>
    </div>
  )
}

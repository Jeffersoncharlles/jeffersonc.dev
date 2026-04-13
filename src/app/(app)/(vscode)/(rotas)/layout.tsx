import Breadcrumbs from '@/components/breadcrumbs'
import TabsBar from '@/components/tabs-bar'

export default function ReadmeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="relative min-h-234.5 flex flex-col bg-background">
      <TabsBar />
      <Breadcrumbs />

      {/* header */}

      {/* content */}
      <div className="w-full flex-1 min-h-0 overflow-y-auto border">
        <div className="w-full max-w-4xl mx-auto flex min-h-full flex-col gap-6 md:gap-8 pb-20 px-4 md:px-8">
          {children}
        </div>
      </div>
    </section>
  )
}

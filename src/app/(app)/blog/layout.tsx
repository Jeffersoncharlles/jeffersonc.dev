import type React from 'react'
import { BlogFooter } from '@/app/_components/footer'
import { BlogHeader } from '@/app/_components/header'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-blog-mobile-bg md:bg-blog-bg overflow-y-auto relative">
      <BlogHeader />
      <main className="flex-1 pt-32 md:pt-40 pb-20">{children}</main>
      <BlogFooter />
    </div>
  )
}

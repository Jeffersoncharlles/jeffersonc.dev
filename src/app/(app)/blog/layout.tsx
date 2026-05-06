import type React from 'react'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen h-full bg-blog-mobile-bg md:bg-blog-bg overflow-y-auto relative">
      {children}
    </div>
  )
}

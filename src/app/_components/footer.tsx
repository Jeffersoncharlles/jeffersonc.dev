'use client'

import Link from 'next/link'

export function BlogFooter() {
  return (
    <footer className="bg-blog-footer-bg border-t border-white/5 pt-16 pb-20 px-6 md:px-12 lg:px-48 shrink-0 w-full mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 px-8">
        {/* Logo and Copyright */}
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <Link
            href="/"
            className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-2xl text-dracula-purple tracking-tight"
          >
            jeffersonc.
          </Link>
          <span className="text-[12px] text-muted-foreground/50">
            © 2026 jeffersonc.dev. All rights reserved.
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-12 items-start">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <Link
              href="/privacy"
              className="text-[12px] text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>

          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-[10px] font-bold uppercase tracking-widest text-dracula-pink/50">
              Social
            </span>
            <Link
              href="https://x.com/Jeffersoncdev"
              target="_blank"
              className="text-[12px] text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              X
            </Link>
            <Link
              href="https://github.com/Jeffersoncharlles"
              target="_blank"
              className="text-[12px] text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

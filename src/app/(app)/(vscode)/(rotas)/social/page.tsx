import { Mail, User } from 'lucide-react'
import Link from 'next/link'

const SocialPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-6 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-dracula-purple mb-1">
          <Mail className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Direct Email
          </span>
        </div>
        <p className="text-sm text-foreground">jeffersoncas89@gmail.com</p>
      </div>
      <div className="p-6 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-dracula-green mb-1">
          <User className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Socials
          </span>
        </div>
        <p className="text-sm text-foreground">
          <Link
            href="https://www.linkedin.com/in/jeffersoncharlles/"
            target="_blank"
            className="underline hover:text-dracula-green transition"
          >
            LinkedIn
          </Link>
        </p>
        <p className="text-sm text-foreground">
          <Link
            href="https://www.instagram.com/jeffersonc.dev/"
            target="_blank"
            className="underline hover:text-dracula-green transition"
          >
            Instagram
          </Link>
        </p>
        <p className="text-sm text-foreground">
          <Link
            href="https://www.github.com/jeffersoncharlles/"
            target="_blank"
            className="underline hover:text-dracula-green transition"
          >
            GitHub
          </Link>
        </p>
      </div>
    </div>
  )
}
export default SocialPage

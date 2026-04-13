import { Mail, Send, User } from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs'
import TabsBar from '@/components/tabs-bar'
import { Button } from '@/components/UI/button'

const ContactPage = () => {
  return (
    <div className="relative size-full overflow-hidden flex flex-col bg-background">
      <TabsBar />
      <Breadcrumbs />

      {/* Email UI */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 relative">
        <div className="max-w-4xl w-full mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-2xl md:text-3xl text-white tracking-tight">
              Contact / Send Email
            </h1>
            <p className="font-['Liberation_Mono:Regular',sans-serif] text-sm text-dracula-cyan opacity-80">
              Let's build something together.
            </p>
          </div>

          {/* Form Mockup */}
          <div className="bg-[#21222c] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
            <div className="border-b border-white/5 p-4 flex items-center gap-4 bg-black/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-dracula-red" />
                <div className="w-3 h-3 rounded-full bg-dracula-yellow" />
                <div className="w-3 h-3 rounded-full bg-dracula-green" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
                  New Message
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-6">
              {/* To field */}
              <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <span className="text-sm font-mono text-dracula-purple w-12 text-right">
                  To:
                </span>
                <span className="text-sm text-foreground">
                  jefferson.charlles@example.com
                </span>
              </div>

              {/* Subject field */}
              <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <span className="text-sm font-mono text-dracula-purple w-12 text-right">
                  Subject:
                </span>
                <input
                  type="text"
                  placeholder="Project Inquiry / Collaboration"
                  className="bg-transparent border-none outline-none text-sm text-foreground w-full placeholder:text-white/20"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-sm font-mono text-dracula-purple w-12 text-right pt-1">
                    Body:
                  </span>
                  <textarea
                    placeholder="Hello Jefferson, I'd like to discuss a project..."
                    className="bg-transparent border-none outline-none text-sm text-foreground w-full min-h-[200px] resize-none placeholder:text-white/20 leading-relaxed"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-white/5 bg-black/10 flex justify-end">
              <Button className="bg-dracula-cyan/10 hover:bg-dracula-cyan/20 border border-dracula-cyan/30 text-dracula-cyan px-6 py-2 rounded-lg flex items-center gap-2 transition-all font-medium text-sm">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </div>
          </div>

          {/* Alternative Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-dracula-purple mb-1">
                <Mail className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Direct Email
                </span>
              </div>
              <p className="text-sm text-foreground">
                jefferson.charlles@example.com
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-dracula-green mb-1">
                <User className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Socials
                </span>
              </div>
              <p className="text-sm text-foreground">
                Check the "Socials" tab in README.md
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

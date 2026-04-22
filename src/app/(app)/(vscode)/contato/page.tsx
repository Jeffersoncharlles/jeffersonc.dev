import { FileJson, Mail, User } from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs'
import TabsBarWrapper from '@/components/tabs-bar-wrapper'

import { FormContact } from './_components/form-contact'

const ContactPage = () => {
  return (
    <div className="relative size-full overflow-hidden flex flex-col bg-background">
      <TabsBarWrapper />
      <Breadcrumbs />

      {/* Email UI */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 relative">
        <div className="max-w-4xl w-full mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2 justify-between md:flex-row items-start md:items-center">
            <div>
              <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-2xl md:text-3xl text-white tracking-tight">
                Contact / Send Email
              </h1>
              <p className="font-['Liberation_Mono:Regular',sans-serif] text-sm text-dracula-cyan opacity-80">
                Let's build something together.
              </p>
            </div>

            <div className="">
              <FileJson />
            </div>
          </div>

          <FormContact />

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

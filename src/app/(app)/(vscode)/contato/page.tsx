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
        </div>
      </div>
    </div>
  )
}

export default ContactPage

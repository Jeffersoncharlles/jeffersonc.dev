'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { sendContactEmail } from '@/app/actions/contact.action'
import { Button } from '@/components/UI/button'

const contactEmailSchema = z.object({
  to: z.string().email('Invalid email address'),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, isSubmitting },
  } = useForm<z.infer<typeof contactEmailSchema>>({
    resolver: zodResolver(contactEmailSchema),
    defaultValues: {
      to: '',
      subject: '',
      message: '',
    },
  })

  const handleSendEmail = async (data: z.infer<typeof contactEmailSchema>) => {
    console.log('Form data:', data)
    try {
      const result = await sendContactEmail(data)

      if (result.success) {
        toast.success(result.message)
      }
    } catch (error) {
      console.error('Error sending contact email:', error)
      toast.error('Failed to send email. Please try again.')
    }
  }

  return (
    <form
      id="send-email-form-contact"
      onSubmit={handleSubmit(handleSendEmail)}
      className="bg-[#21222c] border border-white/5 rounded-xl overflow-hidden shadow-2xl"
    >
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

      <div className="p-6 flex flex-col gap-4 ">
        {/* To field */}
        <div className="flex items-center gap-4 border-b border-white/5 pb-4">
          <span className="text-sm font-mono text-dracula-purple w-12 text-right">
            Email:
          </span>
          <span className="text-sm text-foreground text-center flex p-2  w-120 h-8">
            <input
              type="email"
              placeholder="Seu email para contato"
              className="bg-transparent border-none outline-none text-sm text-foreground w-full placeholder:text-white/20"
              {...register('to', { required: true })}
            />
          </span>
        </div>

        {/* Subject field */}
        <div className="flex items-center gap-4 border-b border-white/5 pb-4">
          <span className="text-sm font-mono text-dracula-purple w-12 text-right">
            Assunto:
          </span>
          <span className="text-sm text-foreground w-120 h-8 text-center flex p-2">
            <input
              type="text"
              placeholder="Assunto do email"
              className="bg-transparent border-none outline-none text-sm text-foreground w-full placeholder:text-white/20"
              {...register('subject', { required: true })}
            />
          </span>
        </div>

        {/* Message field */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-8">
            <span className="text-sm font-mono text-dracula-purple w-12 text-right pt-2">
              Messagem:
            </span>
            <span className="text-sm text-foreground w-120 h-8 text-center flex p-2 min-h-50">
              <textarea
                placeholder="Olá Jefferson, gostaria de discutir um projeto..."
                className="bg-transparent border-none outline-none text-sm  text-foreground w-full min-h-50 resize-none placeholder:text-white/20 leading-relaxed"
                {...register('message', { required: true })}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-white/5 bg-black/10 flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting || isLoading}
          className="cursor-pointer bg-dracula-cyan/10 hover:bg-dracula-cyan/20 border border-dracula-cyan/30 text-dracula-cyan px-6 py-2 rounded-lg flex items-center gap-2 transition-all font-medium text-sm"
        >
          <Send className="w-4 h-4" />
          Send Message
        </Button>
      </div>
    </form>
  )
}

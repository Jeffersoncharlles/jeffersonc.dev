import { Resend } from 'resend'
import z from 'zod'
import { env } from '@/shared/env'

const resend = new Resend(env.RESEND_MAIL_API_KEY)

const schemaRequestSendEmail = z.object({
  to: z.string().email('Invalid email address'),
  subject: z.string().min(1),
  message: z.string().min(1),
})

export type SchemaRequestSendEmail = z.infer<typeof schemaRequestSendEmail>

export async function POST(request: Request) {
  const requestData = await request.json()

  const { message, subject, to } = schemaRequestSendEmail.parse(requestData)

  try {
    const { data, error } = await resend.emails.send({
      from: `Jefferson Charlles <${env.RESEND_API_EMAIL}>`,
      to: [to],
      subject: subject,
      html: `<p>${message}</p>`,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ error }, { status: 400 })
    }

    return Response.json(data)
  } catch (error) {
    console.error('Unexpected error:', error)
    return Response.json({ error }, { status: 500 })
  }
}

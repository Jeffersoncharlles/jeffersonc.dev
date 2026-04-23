import { Resend } from 'resend'
import { env } from '@/shared/env'

const resend = new Resend(env.RESEND_MAIL_API_KEY)

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: `<${env.RESEND_API_EMAIL}>`,
      to: [''],
      subject: 'Hello world',
      react: '',
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

import z from 'zod'

const contactEmailSchema = z.object({
  to: z.string().email('Invalid email address'),
  subject: z.string().min(1),
  message: z.string().min(1),
})

type ContactEmailData = z.infer<typeof contactEmailSchema>

export const sendContactEmail = async (data: ContactEmailData) => {
  try {
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return {
      success: true,
      message: 'Email sent successfully',
    }
  } catch (error) {
    console.error('Error sending contact email:', error)
    return {
      success: false,
      message: 'Failed to send email',
    }
  }
}

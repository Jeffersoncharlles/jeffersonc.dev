import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  PAYLOAD_SECRET: z.string(),
  NEXT_PUBLIC_SERVER_URL: z.string().url('Invalid server URL'),
  PAYLOAD_COOKIE_DOMAIN: z.string().optional(),
  PAYLOAD_COOKIE_SAMESITE: z.enum(['Lax', 'Strict', 'None']).default('Lax'),
  PAYLOAD_COOKIE_SECURE: z
    .enum(['true', 'false'])
    .transform((value) => value === 'true')
    .optional(),
  PAYLOAD_COOKIE_PREFIX: z.string().default('payload'),
  RESEND_MAIL_API_KEY: z.string().optional(),
  RESEND_API_EMAIL: z.string().email().optional(),
  S3_BUCKET: z.string(),
  S3_ACCESS_KEY_ID: z.string(),
  S3_SECRET_ACCESS_KEY: z.string(),
  S3_ENDPOINT: z.string().url('Invalid S3 endpoint URL').optional(),
  S3_PUBLIC_URL: z.string().url('Invalid S3 public URL').optional(),
})

export const env = envSchema.parse(process.env)

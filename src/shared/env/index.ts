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
  PAYLOAD_COOKIE_SECURE: z.boolean().optional(),
  PAYLOAD_COOKIE_PREFIX: z.string().default('payload'),
})

export const env = envSchema.parse(process.env)

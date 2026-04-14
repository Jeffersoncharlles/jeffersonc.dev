import z from 'zod'

const optionalBooleanFromEnv = z.preprocess((value) => {
  if (typeof value === 'boolean') return value
  if (typeof value !== 'string') return value

  const normalized = value.trim().toLowerCase()
  if (normalized === 'true' || normalized === '1') return true
  if (normalized === 'false' || normalized === '0') return false

  return value
}, z.boolean().optional())

const optionalStringFromEnv = z.preprocess((value) => {
  if (typeof value !== 'string') return value

  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}, z.string().optional())

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  PAYLOAD_SECRET: z.string(),
  NEXT_PUBLIC_SERVER_URL: z.string().url('Invalid server URL'),
  PAYLOAD_COOKIE_DOMAIN: optionalStringFromEnv,
  PAYLOAD_COOKIE_SAMESITE: z.enum(['Lax', 'Strict', 'None']).default('Lax'),
  PAYLOAD_COOKIE_SECURE: optionalBooleanFromEnv,
  PAYLOAD_COOKIE_PREFIX: z.string().default('payload'),
})

const env = envSchema.parse(process.env)

export default env

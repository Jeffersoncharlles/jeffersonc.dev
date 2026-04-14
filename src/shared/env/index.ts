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

const rawEnv = envSchema.parse(process.env)

const deriveCookieDomain = (serverUrl: string): string | undefined => {
  try {
    const hostname = new URL(serverUrl).hostname
    // Strip www. prefix and add leading dot for cross-subdomain scope
    if (hostname.startsWith('www.')) {
      return `.${hostname.slice(4)}`
    }
    // Ensure leading dot for domain scope
    return hostname.startsWith('.') ? hostname : `.${hostname}`
  } catch {
    return undefined
  }
}

export const env = {
  ...rawEnv,
  PAYLOAD_COOKIE_DOMAIN:
    rawEnv.PAYLOAD_COOKIE_DOMAIN ??
    deriveCookieDomain(rawEnv.NEXT_PUBLIC_SERVER_URL),
}

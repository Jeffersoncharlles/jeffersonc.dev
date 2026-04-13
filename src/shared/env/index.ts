import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string(),
  PAYLOAD_SECRET: z.string(),
  NEXT_PUBLIC_SERVER_URL: z.string().url('Invalid server URL'),
})

const env = envSchema.parse(process.env)

export default env

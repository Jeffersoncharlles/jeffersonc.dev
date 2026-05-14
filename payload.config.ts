import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { buildConfig } from 'payload'

// Collections
import { Blog } from '@/core/infra/cms/collections/Blog'
import { Education } from '@/core/infra/cms/collections/Education'
import { Experience } from '@/core/infra/cms/collections/Experience'
import { HomeCards } from '@/core/infra/cms/collections/HomeCards'
import { Infrastructure } from '@/core/infra/cms/collections/Infrastructure'
import { Media } from '@/core/infra/cms/collections/Media'
import { Projects } from '@/core/infra/cms/collections/Projects'
import { SystemStatus } from '@/core/infra/cms/collections/status'
import { Users } from '@/core/infra/cms/collections/Users'

// Shared
import { env } from '@/shared/env'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * Builds the list of allowed origins for CORS and CSRF,
 * handling both WWW and non-WWW versions and ensuring no trailing slashes.
 */
const getAllowedOrigins = (url: string): string[] => {
  try {
    const { origin, hostname, protocol, port } = new URL(url)

    // For localhost or IP, return only the primary origin
    if (hostname === 'localhost' || /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) {
      return [origin]
    }

    const isWWW = hostname.startsWith('www.')
    const alternateHostname = isWWW
      ? hostname.replace('www.', '')
      : `www.${hostname}`
    const alternateOrigin = `${protocol}//${alternateHostname}${port ? `:${port}` : ''}`

    return [origin, alternateOrigin]
  } catch {
    return [url.replace(/\/$/, '')]
  }
}

const getGenerateFileUrl = ({
  filename,
  prefix,
}: {
  filename: string
  prefix?: string
}) => {
  const key = prefix ? `${prefix}/${filename}` : filename
  return `${env.S3_PUBLIC_URL}/${key}`
}

const allowedOrigins = getAllowedOrigins(env.NEXT_PUBLIC_SERVER_URL)

export default buildConfig({
  admin: {
    autoLogin: false,
    user: Users.slug,
  },

  collections: [
    Users,
    HomeCards,
    Projects,
    Infrastructure,
    Education,
    Experience,
    Blog,
    Media,
  ],
  globals: [SystemStatus],
  db: postgresAdapter({
    idType: 'uuid',
    pool: {
      connectionString: env.DATABASE_URL,
      ssl: env.DATABASE_URL.includes('localhost')
        ? false
        : { rejectUnauthorized: false },
    },
    push: true,
  }),
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET,
  serverURL: env.NEXT_PUBLIC_SERVER_URL,
  // Security
  cookiePrefix: env.PAYLOAD_COOKIE_PREFIX,
  cors: allowedOrigins,
  csrf: allowedOrigins,
  bin: [
    {
      key: 'seed-db',
      scriptPath: path.resolve(dirname, 'seed-db-real.ts'),
    },
  ],
  plugins: [
    s3Storage({
      enabled: Boolean(env.S3_BUCKET),
      collections: {
        media: {
          disablePayloadAccessControl: true,
          generateFileURL: getGenerateFileUrl,
        },
      },
      bucket: env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: env.S3_ACCESS_KEY_ID,
          secretAccessKey: env.S3_SECRET_ACCESS_KEY,
        },
        region: 'auto',
        endpoint: env.S3_ENDPOINT,
        forcePathStyle: true,
      },
    }),
  ],

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

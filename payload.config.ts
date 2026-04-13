import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Blog } from '@/core/infra/cms/collections/Blog'
import { Education } from '@/core/infra/cms/collections/Education'
import { HomeCards } from '@/core/infra/cms/collections/HomeCards'
import { Infrastructure } from '@/core/infra/cms/collections/Infrastructure'
import { Media } from '@/core/infra/cms/collections/Media'
import { Projects } from '@/core/infra/cms/collections/Projects'
import { SystemStatus } from '@/core/infra/cms/collections/status'
import { Users } from '@/core/infra/cms/collections/Users'
import env from '@/shared/env'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  bin: [
    {
      key: 'seed-db',
      scriptPath: path.resolve(dirname, 'seed.ts'),
    },
  ],
  admin: {
    user: Users.slug,
  },
  editor: lexicalEditor(),
  serverURL: env.NEXT_PUBLIC_SERVER_URL,
  secret: env.PAYLOAD_SECRET,
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
      ssl: true,
    },
    push: true,
    idType: 'uuid',
  }),
  collections: [
    Users,
    HomeCards,
    Projects,
    Infrastructure,
    Education,
    Blog,
    Media,
  ],
  globals: [SystemStatus],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

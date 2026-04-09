import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { Blog } from "@/core/infra/cms/colletions/Blog";
import { Education } from "@/core/infra/cms/colletions/Education";
import { Infrastructure } from "@/core/infra/cms/colletions/Infrastructure";
import { Media } from "@/core/infra/cms/colletions/Media";
import { Tests } from "@/core/infra/cms/colletions/Tests";
import { Users } from "@/core/infra/cms/colletions/Users";
import { AppConfig } from "@/shared/AppConfig";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  editor: lexicalEditor(),
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  secret: process.env.PAYLOAD_SECRET || "uma-chave-temporaria-para-teste",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: true, // Garante verify-full
      },
    },
    push: true,
    idType: "uuid",
  }),
  collections: [Users, Education, Infrastructure, Media, Tests, Blog],
  globals: [AppConfig],
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});

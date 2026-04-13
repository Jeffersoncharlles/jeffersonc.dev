import config from '@payload-config'
import Link from 'next/link'
import { getPayload } from 'payload'

type BlogDoc = {
  id: string
  title: string
  slug?: string | null
  category: 'frontend' | 'backend' | 'career'
  description?: string | null
  markdown: string
  publishedAt?: string | null
}

const categoryLabel: Record<BlogDoc['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  career: 'Carreira',
}

const summarize = (
  description: string | null | undefined,
  markdown: string,
) => {
  if (description && description.trim().length > 0) {
    return description
  }

  const plain = markdown
    .replace(/[#*_`>-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return plain.slice(0, 160) + (plain.length > 160 ? '...' : '')
}

export default async function BlogPage() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'blog',
    limit: 50,
    sort: '-publishedAt',
  })

  const posts = docs as unknown as BlogDoc[]

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
      <header className="mb-10 flex flex-col gap-3">
        <h1 className="font-['Space_Grotesk:Bold',sans-serif] text-3xl font-bold text-foreground md:text-4xl">
          Journal
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-sm text-muted-foreground md:text-base">
          Lista de artigos em markdown. Clique no post para ler o conteudo.
        </p>
      </header>

      <section className="flex flex-col gap-5">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug ?? ''}`}
            className="group rounded-2xl border border-white/10 bg-card/50 p-5 transition-colors hover:border-dracula-cyan/40"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="rounded-md bg-dracula-cyan/10 px-2 py-1 text-xs font-bold uppercase tracking-wide text-dracula-cyan">
                {categoryLabel[post.category]}
              </span>
              <span className="text-xs text-muted-foreground">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString('pt-BR')
                  : 'Sem data'}
              </span>
            </div>

            <h2 className="mb-2 font-['Space_Grotesk:Bold',sans-serif] text-xl font-bold text-foreground group-hover:text-dracula-cyan transition-colors">
              {post.title}
            </h2>

            <p className="font-['Inter:Regular',sans-serif] text-sm leading-6 text-muted-foreground md:text-base">
              {summarize(post.description, post.markdown)}
            </p>
          </Link>
        ))}

        {posts.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-card/50 p-6 text-sm text-muted-foreground">
            Nenhum post encontrado.
          </div>
        )}
      </section>
    </main>
  )
}

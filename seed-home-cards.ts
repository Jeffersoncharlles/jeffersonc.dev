import fs from 'fs'
import path from 'path'
import type { SanitizedConfig } from 'payload'
import payload from 'payload'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

type Doc = Record<string, unknown>
type SeedCollection =
  | 'media'
  | 'blog'
  | 'home-cards'
  | 'projects'
  | 'infrastructure'
  | 'education'

const clearCollection = async (collection: SeedCollection) => {
  while (true) {
    const result = await payload.find({
      collection,
      limit: 100,
      page: 1,
    })

    if (result.docs.length === 0) {
      break
    }

    for (const doc of result.docs) {
      await payload.delete({
        collection,
        id: doc.id,
      })
    }
  }
}

const upsertByField = async (
  collection: SeedCollection,
  field: string,
  value: string,
  data: Doc,
) => {
  const existing = await payload.find({
    collection,
    where: {
      [field]: { equals: value },
    } as Record<string, { equals: string }>,
    limit: 1,
  })

  if (existing.docs.length > 0) {
    const updated = await payload.update({
      collection,
      id: existing.docs[0].id,
      data: data as never,
    })
    return updated
  }

  const created = await payload.create({
    collection,
    data: data as never,
    draft: false,
  })
  return created
}

const seedInfrastructure = [
  {
    name: 'React',
    category: 'stack',
    iconName: 'monitor',
    description: 'Biblioteca para interfaces reativas',
  },
  {
    name: 'Next.js',
    category: 'stack',
    iconName: 'app-window',
    description: 'Framework full-stack com App Router',
  },
  {
    name: 'Node.js',
    category: 'stack',
    iconName: 'server',
    description: 'Runtime JavaScript para backend',
  },
  {
    name: 'Docker',
    category: 'setup',
    iconName: 'box',
    description: 'Containers para ambientes reproduziveis',
  },
  {
    name: 'Kafka',
    category: 'integrations',
    iconName: 'activity',
    description: 'Mensageria distribuida para eventos',
  },
]

const seedHomeCards = [
  {
    title: 'PILAR FRONT-END',
    badgeLabel: 'UI LAYER',
    description:
      'Interfaces de altissima performance, responsivas e acessiveis (Lighthouse > 90).',
    iconName: 'monitor',
    colorsCards: 'blue',
    footerTags: [
      { tag: '/react' },
      { tag: '/nextjs-15' },
      { tag: '/tailwind-v4' },
      { tag: '/framer-motion' },
    ],
    order: 1,
  },
  {
    title: 'PILAR BACK-END',
    badgeLabel: 'APPLICATION',
    description:
      'APIs RESTful escalaveis, governanca de dados e arquitetura de microsservicos.',
    iconName: 'cog',
    colorsCards: 'purple',
    footerTags: [
      { tag: '/nodejs' },
      { tag: '/fastify' },
      { tag: '/express' },
      { tag: '/solid' },
    ],
    order: 2,
  },
  {
    title: 'ENGENHARIA & QUALIDADE',
    badgeLabel: 'CORE DOMAIN',
    description:
      'Clean Architecture, Padroes de Projeto (Patterns) e cobertura de testes robusta.',
    iconName: 'shield-check',
    colorsCards: 'green',
    footerTags: [
      { tag: '/clean-arch' },
      { tag: '/zod-validation' },
      { tag: '/jest' },
      { tag: '/playwright' },
    ],
    order: 3,
  },
  {
    title: 'INFRAESTRUTURA & DATA',
    badgeLabel: 'INFRASTRUCTURE',
    description:
      'Gestao de infra critica (8 anos), mensageria distribuida e bancos SQL/NoSQL.',
    iconName: 'database',
    colorsCards: 'orange',
    footerTags: [
      { tag: '/docker' },
      { tag: '/kafka' },
      { tag: '/postgresql' },
      { tag: '/mongodb' },
    ],
    order: 4,
  },
]

const seedEducation = [
  {
    name: 'Analise e Desenvolvimento de Sistemas',
    institution: 'Faculdade de Tecnologia',
    type: 'domain',
    description: 'Fundamentos de engenharia de software e arquitetura.',
  },
  {
    name: 'Clean Architecture na Pratica',
    institution: 'Plataforma Online',
    type: 'application',
    description: 'Aplicacao de boundaries, entidades e casos de uso.',
  },
]

const seedBlog = [
  {
    title: 'Arquitetura de Front-end com Next.js',
    category: 'frontend',
    description: 'Como estruturar UI modular e performatica em Next.js.',
    markdown: `# Arquitetura de Front-end com Next.js\n\nEste post cobre padroes de organizacao, componentes e performance.\n\n## Topicos\n\n- Estrutura de pastas\n- Reuso de componentes\n- Renderizacao server-side`,
  },
  {
    title: 'Clean Architecture no Back-end Node.js',
    category: 'backend',
    markdown: `# Clean Architecture no Back-end Node.js\n\nSeparacao de camadas para manter o codigo testavel e evolutivo.\n\n## Beneficios\n\n- Baixo acoplamento\n- Alta coesao\n- Facilidade de testes`,
  },
  {
    title: 'Migracao de Projeto para Next.js e TypeScript',
    category: 'career',
    description:
      'Aprendizados reais na migracao de um projeto legado para stack moderna.',
    markdown: `# Migracao de Projeto para Next.js e TypeScript\n\nMigrar um projeto legado sem parar entregas exige estrategia.\n\n## Passos\n\n- Planejar migracao por etapas\n- Criar cobertura de testes minima\n- Migrar modulos criticos primeiro\n- Medir regressao de performance\n\n## Resultado\n\nMais seguranca com tipagem e melhor manutenibilidade no longo prazo.`,
  },
]

export const script = async (config: SanitizedConfig) => {
  await payload.init({ config })

  payload.logger.info('Starting database seed (excluding users)...')

  payload.logger.info('Clearing collections before seeding...')
  // Truncate behavior: clear everything except users.
  await clearCollection('projects')
  await clearCollection('blog')
  await clearCollection('home-cards')
  await clearCollection('education')
  await clearCollection('infrastructure')
  await clearCollection('media')

  const publicFiles = ['file.svg', 'globe.svg', 'window.svg']
  for (const fileName of publicFiles) {
    const filePath = path.resolve(__dirname, 'public', fileName)
    if (!fs.existsSync(filePath)) {
      payload.logger.warn(`Skipping media not found: ${fileName}`)
      continue
    }

    await payload.create({
      collection: 'media',
      data: { alt: `Asset ${fileName}` },
      filePath,
    })
  }

  const infrastructureByName = new Map<string, string>()
  for (const item of seedInfrastructure) {
    const doc = (await upsertByField(
      'infrastructure',
      'name',
      item.name,
      item,
    )) as { id: string; name: string }

    infrastructureByName.set(doc.name, doc.id)
  }

  for (const item of seedHomeCards) {
    await upsertByField('home-cards', 'title', item.title, item)
  }

  for (const item of seedEducation) {
    await upsertByField('education', 'name', item.name, item)
  }

  const projects = [
    {
      title: 'Plataforma de Portfolio',
      type: 'projects',
      githubUrl: 'https://github.com/jeffersoncharlles/jeffersonc.dev',
      liveUrl: 'https://jeffersonc.dev',
      technologies: [
        infrastructureByName.get('React'),
        infrastructureByName.get('Next.js'),
      ].filter(Boolean),
    },
    {
      title: 'Demo de Arquitetura Backend',
      type: 'demos',
      githubUrl: 'https://github.com/jeffersoncharlles/backend-demo',
      liveUrl: 'https://example.com/demo-backend',
      technologies: [
        infrastructureByName.get('Node.js'),
        infrastructureByName.get('React'),
      ].filter(Boolean),
    },
  ]

  for (const item of projects) {
    await upsertByField('projects', 'title', item.title, item)
  }

  for (const post of seedBlog) {
    const slug = slugify(post.title)
    await upsertByField('blog', 'slug', slug, {
      ...post,
      slug,
      publishedAt: new Date().toISOString(),
    })
  }

  await payload.updateGlobal({
    slug: 'system-status',
    data: {
      logMessage: 'System online and operational.',
      currentFocus: 'Building Next-Gen Software Architectures',
      isAvailable: true,
      lastPing: new Date().toISOString(),
    },
  })

  payload.logger.info('Seed completed successfully!')
  process.exit(0)
}

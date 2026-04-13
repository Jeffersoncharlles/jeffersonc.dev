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
    title: 'INFRAESTRUTURA & RESILIÊNCIA',
    badgeLabel: 'INFRASTRUCTURE',
    description:
      'Gestão técnica de infraestrutura crítica com 8 anos de experiência em administração de servidores Linux, Docker, proxy reverso com Nginx e automações estratégicas em Shell Script.',
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
  {
    title: 'ENGENHARIA & QUALIDADE',
    badgeLabel: 'CORE DOMAIN',
    description:
      'Foco rigoroso em qualidade de código e manutenibilidade através de Clean Architecture, SOLID e Design Patterns, garantindo a integridade do software com cobertura de testes automatizados.',
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
    title: 'SISTEMAS DISTRIBUÍDOS & APIs',
    badgeLabel: 'APPLICATION',
    description:
      'Construção de APIs RESTful escaláveis e sistemas de missão crítica utilizando microsserviços e mensageria com Kafka para garantir processamento de dados em tempo real.',
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
    title: 'ARQUITETURA DE INTERFACES',
    badgeLabel: 'UI LAYER',
    description:
      'Desenvolvimento de interfaces de altíssima performance (Lighthouse > 90) e responsivas, utilizando o ecossistema moderno de Next.js e Tailwind CSS v4 para entregar a melhor experiência de usuário.',
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
]

const seedEducation = [
  {
    name: 'Engenharia de Software',
    institution: 'Anhanguera Educacional',
    type: 'pos_graduacao',
    startDate: new Date('2025-06-01').toISOString(),
    endDate: new Date('2026-04-10').toISOString(),
    description: `specialização focada no ciclo de vida crítico de sistemas de alta complexidade. Formação concluída com excelência técnica (Média 9,4), unindo visão arquitetural estratégica e execução ágil.

Eixos de Especialização:

Arquitetura de Software: Decisões de design de alto nível, análise e modelagem de estruturas escaláveis, garantindo atributos de qualidade (disponibilidade e manutenibilidade).

Engenharia de Requisitos: Tradução de necessidades de negócio em especificações técnicas robustas através de análise orientada a objetos.

Padrões e Dados: Implementação de Design Patterns e arquitetura de dados otimizada para performance.

Gestão Ágil de Sistemas: Governança e entrega incremental com foco em adaptabilidade e valor de negócio.

Qualidade e Segurança: Validação rigorosa via testes estruturados e implementação de camadas de segurança no ciclo de desenvolvimento.`,
    avatar: 'anhaguera-avatar.png',
  },
  {
    name: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Faculdade Católica Paulista',
    type: 'graduacao',
    degreeType: 'tecnologo',
    startDate: new Date('2021-01-10').toISOString(),
    endDate: new Date('2023-08-01').toISOString(),
    description: `Desenvolvimento colaborativo de projetos de software, com destaque para a criação da extensão FocoTotal (focada em produtividade) em parceria com colegas de turma. Participação ativa em fóruns de discussão sobre Engenharia de Software e Banco de Dados. Integralização de 68 horas de atividades complementares voltadas ao aperfeiçoamento técnico e profissional`,
    certificateUrl: 'https://example.com/pos-graduacao-certificado',
    avatar: 'uca-avatar.png',
  },
  {
    name: 'UI/UX Design Professional',
    institution: 'Plataforma Online',
    type: 'certificacao',
    endDate: new Date('2021-09-10').toISOString(),
    description:
      'Estudo sobre prototipação, sistemas de design e acessibilidade.',
    certificateUrl: 'https://example.com/ui-ux-certificado',
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

  const mediaByFilename = new Map<string, string>()
  const publicFiles = ['file.svg', 'globe.svg', 'window.svg']
  for (const fileName of publicFiles) {
    const filePath = path.resolve(__dirname, 'public', fileName)
    if (!fs.existsSync(filePath)) {
      payload.logger.warn(`Skipping media not found: ${fileName}`)
      continue
    }

    const media = await payload.create({
      collection: 'media',
      data: { alt: `Asset ${fileName}` },
      filePath,
    })

    mediaByFilename.set(fileName, media.id)
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
    const avatarFileName = item.avatar
    const educationData = {
      ...item,
      avatar: avatarFileName ? mediaByFilename.get(avatarFileName) : undefined,
    }

    await upsertByField('education', 'name', item.name, educationData)
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

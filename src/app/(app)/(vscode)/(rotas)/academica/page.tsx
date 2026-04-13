import { Badge } from '@/components/UI/badge'
import { Card } from '@/components/UI/card'

const timelineItems = [
  {
    period: '2023 — 2024',
    title: 'Pós-Graduação em Engenharia & Qualidade de Software',
    description:
      'Foco avançado em metodologias ágeis, testes automatizados, CI/CD e governança de TI. Especialização voltada para a entrega de produtos digitais robustos e escaláveis com foco em experiência do usuário.',
    tags: ['Selenium', 'Jenkins', 'QA Metrics'],
    color: 'purple',
  },
  {
    period: '2018 — 2022',
    title: 'Bacharelado em Engenharia de Software',
    description:
      'Fundação sólida em algoritmos, arquitetura de sistemas e gestão de projetos. Participação em projetos de pesquisa focados em inteligência artificial aplicada ao desenvolvimento web.',
    tags: ['Algoritmos', 'Full Stack', 'Project Management'],
    color: 'blue',
  },
  {
    period: '2021',
    title: 'Certificação UI/UX Design Professional',
    description:
      'Estudo profundo sobre psicologia do usuário, prototipação de alta fidelidade e design systems. Foco em criar interfaces visualmente impactantes que respeitam as normas de acessibilidade.',
    tags: ['Figma', 'Design Thinking', 'Accessibility'],
    color: 'pink',
  },
  {
    period: '2019',
    title: 'Técnico em Desenvolvimento de Sistemas',
    description:
      'Introdução ao mundo da programação com foco em lógica e desenvolvimento orientado a objetos. Primeiros passos em Java e SQL.',
    tags: ['Java', 'MySQL', 'OOP'],
    color: 'orange',
  },
]

const ApplicationPage = () => {
  return (
    <div className="relative flex flex-col gap-16 py-8 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Vertical Timeline Line */}
      <div className="absolute top-0 bottom-0 left-8 md:left-12 w-0.5 bg-dracula-purple/20" />

      {timelineItems.map((item) => (
        <div key={`${item.period}-${item.title}`} className="relative pl-12 md:pl-20">
          {/* Timeline Dot */}
          <div
            className="absolute left-6.5 md:left-10.5 top-6 w-3 h-3 rounded-full border-4 border-background z-20 shadow-[0_0_8px_rgba(0,0,0,0.5)]"
            style={{
              backgroundColor: `var(--dracula-${item.color === 'blue' ? 'cyan' : item.color})`,
              boxShadow: `0 0 12px var(--dracula-${item.color === 'blue' ? 'cyan' : item.color})`,
            }}
          />

          <Card.Root
            data-color={item.color}
            className="bg-background/40 backdrop-blur-sm"
          >
            <Card.Overlay />
            <Card.Header>
              <span
                className="font-space-grotesk font-medium text-xs md:text-sm tracking-widest uppercase mb-1"
                style={{
                  color: `var(--dracula-${item.color === 'blue' ? 'cyan' : item.color})`,
                }}
              >
                {item.period}
              </span>
            </Card.Header>

            <Card.Title>
              <h2 className="font-space-grotesk font-bold text-xl md:text-2xl text-foreground">
                {item.title}
              </h2>
            </Card.Title>

            <Card.Content>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </Card.Content>

            <Card.Footer>
              {item.tags.map((tag) => (
                <Badge.Root key={tag} data-color={item.color}>
                  <Badge.Content>{tag}</Badge.Content>
                </Badge.Root>
              ))}
            </Card.Footer>
          </Card.Root>
        </div>
      ))}
    </div>
  )
}

export default ApplicationPage

import { Badge } from '@/components/UI/badge'
import { Card } from '@/components/UI/card'
import { makeGetAcademic } from '@/core/infra/services/academica-services'

const educationTypeOptions = [
  { label: 'Graduação', value: 'graduacao' },
  { label: 'Pós-graduação', value: 'pos_graduacao' },
  { label: 'Certificação', value: 'certificacao' },
]

const formatYear = (value?: string | null) => {
  if (!value) {
    return 'Atual'
  }

  return new Date(value).getFullYear().toString()
}

const getTopicsFromDescription = (description?: string) => {
  if (!description) {
    return []
  }

  return description
    .split('\n')
    .map((line) => line.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean)
    .slice(0, 3)
}

export const AcademicList = async () => {
  const academic = await makeGetAcademic().execute()

  const sortedAcademic = academic.sort((a, b) => {
    const dateA = a.endDate ? new Date(a.endDate) : new Date()
    const dateB = b.endDate ? new Date(b.endDate) : new Date()
    return dateB.getTime() - dateA.getTime()
  })

  const degrees = sortedAcademic.filter(
    (item) => item.type === 'graduacao' || item.type === 'pos_graduacao',
  )
  const certifications = sortedAcademic.filter(
    (item) => item.type === 'certificacao',
  )

  const certificationsByInstitution = certifications.reduce<
    Record<string, typeof certifications>
  >((acc, item) => {
    const key = item.institution || 'Especializações'

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(item)
    return acc
  }, {})

  return (
    <>
      <Card.Root className="bg-card text-card-foreground shadow-sm md:col-span-2">
        <Card.Overlay />
        <Card.Header className="items-center">
          <h2 className="font-space-grotesk text-xl font-bold text-foreground">
            Formação Acadêmica
          </h2>
          <Badge.Root data-color="purple">
            <Badge.Content>ACADEMICA</Badge.Content>
          </Badge.Root>
        </Card.Header>
        <Card.Content className="space-y-4">
          {degrees.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-border/60 bg-background/20 p-4"
            >
              <p className="text-sm font-medium text-foreground">
                {educationTypeOptions.find(
                  (option) => option.value === item.type,
                )?.label || 'Formação'}
              </p>
              <h3 className="mt-1 font-space-grotesk text-lg font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.institution}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {formatYear(item.startDate)} - {formatYear(item.endDate)}
              </p>
              {item.description && (
                <p
                  className={
                    item.type === 'pos_graduacao'
                      ? 'mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-4'
                      : 'mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2'
                  }
                >
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </Card.Content>
      </Card.Root>

      <Card.Root className="bg-card text-card-foreground shadow-sm md:col-span-2">
        <Card.Overlay />
        <Card.Header className="items-center">
          <h2 className="font-space-grotesk text-xl font-bold text-foreground">
            Especializações e Certificações
          </h2>
          <Badge.Root data-color="cyan">
            <Badge.Content>CERTIFICACOES</Badge.Content>
          </Badge.Root>
        </Card.Header>

        <Card.Content className="space-y-6">
          {Object.entries(certificationsByInstitution).map(
            ([institution, items]) => (
              <section key={institution} className="space-y-3">
                <h3 className="font-space-grotesk text-base font-semibold text-foreground">
                  {institution}
                </h3>
                <div className="space-y-3">
                  {items.map((item) => {
                    const topics = getTopicsFromDescription(item.description)

                    return (
                      <article
                        key={item.id}
                        className="rounded-2xl border border-border/60 bg-background/20 p-4"
                      >
                        <p className="font-medium text-foreground">
                          {item.name}
                        </p>
                        {topics.length > 0 && (
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                            {topics.map((topic) => (
                              <li key={`${item.id}-${topic}`}>{topic}</li>
                            ))}
                          </ul>
                        )}
                      </article>
                    )
                  })}
                </div>
              </section>
            ),
          )}
        </Card.Content>
      </Card.Root>
    </>
  )
}

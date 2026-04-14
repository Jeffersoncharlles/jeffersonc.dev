import { format, isValid, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { makeGetExperience } from '@/core/infra/services/experience-services'

const formatMonthYear = (value: string) => {
  const date = parseISO(value)

  if (!isValid(date)) {
    return null
  }

  return format(date, 'MMM yyyy', { locale: ptBR })
}

const formatExperiencePeriod = (startDate: string, endDate?: string | null) => {
  const start = formatMonthYear(startDate)

  if (!start) {
    return 'Data inválida'
  }

  const end = endDate ? formatMonthYear(endDate) : null

  return `${start} até ${end || 'o momento'}`
}

export const ExperiencesList = async () => {
  const experience = await makeGetExperience().execute()

  const sortedExperience = experience.sort((a, b) => {
    const dateA = a.endDate ? new Date(a.endDate) : new Date()
    const dateB = b.endDate ? new Date(b.endDate) : new Date()
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <>
      {sortedExperience.map((item) => (
        <div key={item.id} className="relative pl-12 md:pl-20">
          <div className="absolute left-6.5 md:left-10.5 top-6 w-3 h-3 rounded-full border-4 border-background z-20 shadow-[0_0_8px_rgba(0,0,0,0.5)] bg-dracula-green shadow-dracula-green" />
          <div className="w-full bg-card rounded-lg p-6 border border-border">
            <h2 className="text-xl">{item.companyName}</h2>
            <h4 className="">{item.role}</h4>

            <p className="text-sm text-muted-foreground leading-relaxed py-4">
              {item.description}
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              {formatExperiencePeriod(item.startDate, item.endDate)}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

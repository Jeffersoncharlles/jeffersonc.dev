import { format, isValid, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatMonthYear = (value: string) => {
  const date = parseISO(value)

  if (!isValid(date)) {
    return null
  }

  return format(date, 'MMM yyyy', { locale: ptBR })
}

export const formatExperiencePeriod = (
  startDate: string,
  endDate?: string | null,
) => {
  const start = formatMonthYear(startDate)

  if (!start) {
    return 'Data inválida'
  }

  const end = endDate ? formatMonthYear(endDate) : null

  return `${start} até ${end || 'o momento'}`
}

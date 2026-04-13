import { format } from 'date-fns'
import { makeGetAcademic } from '@/core/infra/services/academica-services'

const educationTypeOptions = [
  { label: 'Graduação', value: 'graduacao' },
  { label: 'Pós-graduação', value: 'pos_graduacao' },
  { label: 'Certificação', value: 'certificacao' },
]

export const AcademicList = async () => {
  const academic = await makeGetAcademic().execute()

  const sortedAcademic = academic.sort((a, b) => {
    const dateA = a.endDate ? new Date(a.endDate) : new Date()
    const dateB = b.endDate ? new Date(b.endDate) : new Date()
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <>
      {sortedAcademic.map((item) => (
        <div key={item.id} className="relative pl-12 md:pl-20">
          <div className="absolute left-6.5 md:left-10.5 top-6 w-3 h-3 rounded-full border-4 border-background z-20 shadow-[0_0_8px_rgba(0,0,0,0.5)] bg-dracula-green shadow-dracula-green" />
          <div className="w-full bg-card rounded-lg p-6 border border-border">
            <h2 className="text-xl">{item.name}</h2>
            <h4 className="">{item.institution}</h4>
            <p className="text-dracula-purple font-medium">
              {
                educationTypeOptions.find((opt) => opt.value === item.type)
                  ?.label
              }
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed py-4">
              {item.description}
            </p>
            <div className="flex">
              {item.startDate && (
                <p>{format(new Date(item.startDate), 'MM/dd/yyyy')}</p>
              )}
              {` ate  `}
              {item.endDate && (
                <p>{format(new Date(item.endDate), 'MM/dd/yyyy')}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

import { Suspense } from 'react'
import { AcademicList } from './_components/academic-list'

const ApplicationPage = () => {
  return (
    <div className="relative flex flex-col gap-16 py-8 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Vertical Timeline Line */}
      <div className="absolute top-0 bottom-0 left-8 md:left-12 w-0.5 bg-dracula-purple/20" />

      <Suspense>
        <AcademicList />
      </Suspense>

      {/* {academic.map((item) => (
        <div key={item.id} className="relative pl-12 md:pl-20">
          {/* Timeline Dot */}
      {/* <div
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
      ))} */}
    </div>
  )
}

export default ApplicationPage

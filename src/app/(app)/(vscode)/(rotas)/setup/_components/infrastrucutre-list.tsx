import { makeGetInfrastructure } from '@/core/infra/services/infrastructure-services'
import { getIconUrl } from '@/shared/utils/get-skill-icons'
import { sortByDescription } from '@/shared/utils/sort-by-description'
import { groupByCategory } from '../_hooks/group-by-category'

export const InfrastructureList = async () => {
  const infra = await makeGetInfrastructure().execute()

  const allGroups = groupByCategory(infra)

  const {
    stack: stacksGroups = [],
    setup: setupsGroups = [],
    integrations: integrationsGroups = [],
  } = allGroups

  const orderedIntegrations = sortByDescription(integrationsGroups, [
    'Database',
    'ORM / Query Builder',
    'Cloud / Deploy',
    'DevOps',
    'Messaging',
    'Auth / Security',
    'Version Control',
  ])
  const orderedStacks = sortByDescription(stacksGroups)
  const orderedSetups = sortByDescription(setupsGroups, [
    'OS',
    'Editor',
    'Terminal',
  ])

  return (
    <>
      {stacksGroups.length > 0 && (
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-dracula-cyan mb-6">
            ## Stack de Desenvolvimento
          </h2>

          <div className="pl-1 border-l border-dracula-comment/20">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4  ">
              {orderedStacks.map((item) => {
                const cleanSlug = (item.iconName || item.name)
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, '')
                  .replace(/\./g, '')

                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    {/** biome-ignore lint/performance/noImgElement: <explanation> */}
                    <img
                      src={getIconUrl(cleanSlug)}
                      alt={item.name}
                      title={item.name}
                      className="h-10 w-10 object-contain transition-transform hover:scale-110"
                    />
                    <span className="text-xs text-dracula-comment truncate w-full text-center">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="text-muted-foreground text-xs mt-4 italic">
              {`/*`}
              Domínio avançado em ecossistema React: TanStack Query para
              server-state, Zustand para global-state e validações rigorosas com
              Zod. alem de Hook Form,jest e outras libs essenciais para
              produtividade e qualidade de código.
              {` */`}
            </p>
          </div>
        </article>
      )}

      {integrationsGroups.length > 0 && (
        <article className="mb-8">
          <h2 className="text-xl font-semibold text-dracula-cyan mb-6">
            ## Integrações
          </h2>
          <div className="pl-1 border-l border-dracula-comment/20">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4  ">
              {orderedIntegrations.map((item) => {
                const cleanSlug = (item.iconName || item.name)
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, '')
                  .replace(/\./g, '')

                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    {/** biome-ignore lint/performance/noImgElement: <explanation> */}
                    <img
                      src={getIconUrl(cleanSlug)}
                      alt={item.name}
                      title={item.name}
                      className="h-10 w-10 object-contain transition-transform hover:scale-110"
                    />
                    <span className="text-xs text-dracula-comment truncate w-full text-center">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="text-muted-foreground text-xs mt-4 italic">
              {'/*'} Soluções robustas para persistência, mensageria e deploy
              contínuo {'*/'}
            </p>
          </div>
        </article>
      )}

      {setupsGroups.length > 0 && (
        <article className="">
          <h2 className="text-xl font-semibold text-dracula-cyan mb-6">
            ## Configuração
          </h2>
          <div className="pl-1 border-l border-dracula-comment/20">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4  ">
              {orderedSetups.map((item) => {
                const cleanSlug = (item.iconName || item.name)
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, '')
                  .replace(/\./g, '')

                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    {/** biome-ignore lint/performance/noImgElement: <explanation> */}
                    <img
                      src={getIconUrl(cleanSlug)}
                      alt={item.name}
                      title={item.name}
                      className="h-10 w-10 object-contain transition-transform hover:scale-110"
                    />
                    <span className="text-xs text-dracula-comment truncate w-full text-center">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="text-muted-foreground text-xs mt-4 italic">
              {'/*'} Ferramental otimizado para produtividade máxima e
              desenvolvimento Unix-based {'*/'}
            </p>
          </div>
        </article>
      )}
    </>
  )
}

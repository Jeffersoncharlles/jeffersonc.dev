import { Suspense } from 'react'

import { InfrastructureList } from './_components/infrastructure-list'
import { SkeletonInfrastructureList } from './_components/skeleton-infrastructure-list'

const SetupPage = () => {
  return (
    <section className="prose prose-invert max-w-none pt-3 font-mono selection:bg-dracula-purple/30">
      <header className="mb-6 border-b border-dracula-comment/30 pb-4">
        <h1 className="text-2xl font-bold text-dracula-pink">
          # Ambiente de Desenvolvimento
        </h1>
        <p className=" text-muted-foreground text-sm mt-1">
          {'/* '}Listagem técnica de ferramentas e tecnologias {' */'}
        </p>
      </header>

      <Suspense fallback={<SkeletonInfrastructureList />}>
        <InfrastructureList />
      </Suspense>
    </section>
  )
}
export default SetupPage

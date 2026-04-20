import { User } from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs'
import TabsBarWrapper from '@/components/tabs-bar-wrapper'

const BioPage = () => {
  return (
    <div className="relative size-full overflow-hidden flex flex-col bg-background">
      <TabsBarWrapper />
      <Breadcrumbs />

      {/* Email UI */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 relative">
        <div className="max-w-4xl w-full mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center gap-4">
            <User className="text-foreground/60" />
            <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-xl md:text-2xl text-white">
              Contato
            </h1>
          </div>

          <p className="text-slate-300">
            Minha jornada na tecnologia é definida pela resolução de problemas
            complexos e pela visão Full-Cycle. Por quase uma década, atuei como
            a principal referência técnica na RBS Transportes, onde não apenas
            desenvolvi software, mas geri infraestruturas críticas, automatizei
            fluxos de deploy e garanti a segurança sistêmica de operações de
            missão crítica. Hoje, foco em elevar o padrão de desenvolvimento
            utilizando o ecossistema moderno de React, Next.js e NestJS,
            integrando mensageria com Kafka e arquiteturas de microsserviços.
            Acredito na engenharia de software como um equilíbrio entre
            performance impecável (Lighthouse {' > '} 90) e código sustentável
            (Clean Architecture). Atualmente, exploro o potencial de Agentes de
            IA para otimizar ciclos de entrega e criar soluções ainda mais
            inteligentes e resilientes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BioPage

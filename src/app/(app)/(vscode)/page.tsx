import { Suspense } from 'react'
import { CardList } from '@/app/(app)/(vscode)/_components/card-list'
import { CardListSkeleton } from '@/app/(app)/(vscode)/_components/card-list-skeleton'
import Breadcrumbs from '@/components/breadcrumbs'
import TabsBar from '@/components/tabs-bar'

export default function VSCodeMainEditorArea() {
  return (
    <div className="relative   overflow-hidden flex flex-col bg-background ">
      <TabsBar />
      <Breadcrumbs />

      {/* Content Area */}
      <div className="flex-1 min-h-234.5 overflow-y-auto md:p-6 relative ">
        <div className="flex flex-col gap-6 p-4 md:gap-8 max-w-5xl w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-2xl md:text-[36px] text-white tracking-[-0.9px]">
                Jefferson Charlles
              </h1>

              <h5 className="font-['Liberation_Mono:Regular',sans-serif] text-[13px] md:text-[14px] text-dracula-purple opacity-80">
                Engenheiro de Software Full Stack
              </h5>
            </div>
            <div className="w-full">
              <p className="font-['Liberation_Mono:Regular',sans-serif] text-[13px] md:text-[14px] text-slate-300 opacity-80">
                Construindo ecossistemas de alta performance com mentalidade de
                Engenharia de Software.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 w-full">
              <div className="bg-dracula-purple/15 border border-dracula-purple flex items-center px-3 py-1 rounded-xl">
                <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-purple text-[10px] tracking-[1px] uppercase">
                  PÓS-GRADUADO (2026)
                </span>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center px-[13px] py-[5px] rounded-[12px]">
                <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase">
                  ESPECIALISTA JS/TS
                </span>
              </div>
            </div>
          </div>

          <p className="text-slate-400">
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-4 w-full">
            <Suspense fallback={<CardListSkeleton />}>
              <CardList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

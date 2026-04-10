import Image from 'next/image'
import React from 'react'
import Breadcrumbs from '@/components/breadcrumbs'
import TabsBar from '@/components/tabs-bar'

const imgMargin =
  'https://www.figma.com/api/mcp/asset/795e5aa1-6219-4c4b-a5ca-31f4a9fe7ec0'

const imgMargin1 =
  'https://www.figma.com/api/mcp/asset/53c4e721-f750-4502-8799-da0618fdea56'
const imgMargin2 =
  'https://www.figma.com/api/mcp/asset/83b0b55b-8a1c-4172-ab1a-2b8d2475bf65'
const imgIcon =
  'https://www.figma.com/api/mcp/asset/5ac91657-197a-4539-aed1-a604f6bca245'
const imgIcon1 =
  'https://www.figma.com/api/mcp/asset/565ae144-b19e-498d-ab4a-58b0538bca6b'
const imgIcon2 =
  'https://www.figma.com/api/mcp/asset/82ea566b-7d11-4b9b-b491-6d2e3edfb5eb'
const imgIcon3 =
  'https://www.figma.com/api/mcp/asset/e1af6d90-dd16-4e40-be46-30647319a5c7'
const imgIcon4 =
  'https://www.figma.com/api/mcp/asset/a934590f-f610-4c77-8407-51abc54c9cef'
const imgIcon5 =
  'https://www.figma.com/api/mcp/asset/1b01adaf-c228-43ea-90b8-b692cfee5d57'

export default function VSCodeMainEditorArea() {
  return (
    <div className="relative size-full overflow-hidden flex flex-col bg-background">
      {/* Tabs Bar */}

      <TabsBar />
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 relative">
        <div className="flex flex-col gap-9 md:gap-12 max-w-[896px] w-full mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-[12px] w-full">
            <div className="w-full">
              <h1 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-white tracking-[-0.9px]">
                Project Architecture Guide
              </h1>
            </div>
            <div className="w-full">
              <p className="font-['Liberation_Mono:Regular',sans-serif] text-[13px] md:text-[14px] text-dracula-purple opacity-80">
                Next.js 16 + Clean Architecture implementation standards.
              </p>
            </div>
            <div className="flex flex-wrap gap-[12px] pt-[12px] w-full">
              <div className="bg-[rgba(189,147,249,0.2)] border border-[rgba(189,147,249,0.3)] flex items-center px-[13px] py-[5px] rounded-[12px]">
                <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-purple text-[10px] tracking-[1px] uppercase">
                  v2.0.0-beta
                </span>
              </div>
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center px-[13px] py-[5px] rounded-[12px]">
                <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase">
                  Architecture Design
                </span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px] pb-[80px] w-full">
            {/* Card 1 */}
            <div className="border border-[rgba(255,255,255,0.1)] flex flex-col gap-[14.8px] p-[24px] md:p-[29px] relative rounded-[24px] overflow-hidden group hover:border-[rgba(139,233,253,0.3)] transition-colors cursor-pointer">
              <div className="absolute backdrop-blur-[6px] bg-[rgba(68,71,90,0.3)] inset-0 pointer-events-none group-hover:bg-[rgba(68,71,90,0.5)] transition-colors" />
              <div className="relative w-full flex items-start justify-between z-10">
                <div className="bg-[rgba(139,233,253,0.1)] border border-[rgba(139,233,253,0.2)] flex px-[13px] py-[7px] rounded-[12px]">
                  <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-cyan text-[10px] tracking-[1px] uppercase">
                    UI Layer
                  </span>
                </div>
                <div className="w-[15px] h-[12px] relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgIcon}
                  />
                </div>
              </div>
              <div className="relative w-full pt-[5.2px] z-10">
                <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[20px] text-white">
                  Presentational Layer
                </h3>
              </div>
              <div className="relative w-full z-10">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[rgba(248,248,242,0.8)] leading-[1.6]">
                  Responsável pelas rotas, layouts e Server Actions. Atua como o
                  ponto de entrada da interface para o usuário.
                </p>
              </div>
              <div className="opacity-70 relative w-full pt-[9.2px] flex flex-wrap gap-[12px] z-10 group-hover:opacity-100 transition-opacity">
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-cyan text-[11px] bg-dracula-cyan/10 px-2 py-1 rounded">
                  /src/app
                </span>
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-cyan text-[11px] bg-dracula-cyan/10 px-2 py-1 rounded">
                  /src/components
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-[rgba(255,255,255,0.1)] flex flex-col gap-[14.8px] p-[24px] md:p-[29px] relative rounded-[24px] overflow-hidden group hover:border-[rgba(189,147,249,0.3)] transition-colors cursor-pointer">
              <div className="absolute backdrop-blur-[6px] bg-[rgba(68,71,90,0.3)] inset-0 pointer-events-none group-hover:bg-[rgba(68,71,90,0.5)] transition-colors" />
              <div className="relative w-full flex items-start justify-between z-10">
                <div className="bg-[rgba(189,147,249,0.1)] border border-[rgba(189,147,249,0.2)] flex px-[13px] py-[7px] rounded-[12px]">
                  <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-purple text-[10px] tracking-[1px] uppercase">
                    Application
                  </span>
                </div>
                <div className="w-[15px] h-[15px] relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgIcon1}
                  />
                </div>
              </div>
              <div className="relative w-full pt-[5.2px] z-10">
                <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[20px] text-white">
                  Camada de Aplicação
                </h3>
              </div>
              <div className="relative w-full z-10">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[rgba(248,248,242,0.8)] leading-[1.6]">
                  Orquestra o fluxo de dados e implementa os Casos de Uso.
                  Regras de negócio específicas sem depender de frameworks.
                </p>
              </div>
              <div className="opacity-70 relative w-full pt-[9.2px] flex flex-wrap gap-[12px] z-10 group-hover:opacity-100 transition-opacity">
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-purple text-[11px] bg-dracula-purple/10 px-2 py-1 rounded">
                  /core/application
                </span>
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-purple text-[11px] bg-dracula-purple/10 px-2 py-1 rounded">
                  /use-cases
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-[rgba(255,255,255,0.1)] flex flex-col gap-[14.8px] p-[24px] md:p-[29px] relative rounded-[24px] overflow-hidden group hover:border-[rgba(255,121,198,0.3)] transition-colors cursor-pointer">
              <div className="absolute backdrop-blur-[6px] bg-[rgba(68,71,90,0.3)] inset-0 pointer-events-none group-hover:bg-[rgba(68,71,90,0.5)] transition-colors" />
              <div className="relative w-full flex items-start justify-between z-10">
                <div className="bg-[rgba(255,121,198,0.1)] border border-[rgba(255,121,198,0.2)] flex px-[13px] py-[7px] rounded-[12px]">
                  <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-pink text-[10px] tracking-[1px] uppercase">
                    Core Domain
                  </span>
                </div>
                <div className="w-[12px] h-[15px] relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgIcon2}
                  />
                </div>
              </div>
              <div className="relative w-full pt-[5.2px] z-10">
                <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[20px] text-white">
                  Domínio (Core)
                </h3>
              </div>
              <div className="relative w-full z-10">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[rgba(248,248,242,0.8)] leading-[1.6]">
                  Onde definimos as Entidades e Interfaces de repositórios.
                  Camada mais pura e central, independente de tecnologia.
                </p>
              </div>
              <div className="opacity-70 relative w-full pt-[9.2px] flex flex-wrap gap-[12px] z-10 group-hover:opacity-100 transition-opacity">
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-pink text-[11px] bg-dracula-pink/10 px-2 py-1 rounded">
                  /core/domain
                </span>
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-pink text-[11px] bg-dracula-pink/10 px-2 py-1 rounded">
                  /entities
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border border-[rgba(255,255,255,0.1)] flex flex-col gap-[14.8px] p-[24px] md:p-[29px] relative rounded-[24px] overflow-hidden group hover:border-[rgba(80,250,123,0.3)] transition-colors cursor-pointer">
              <div className="absolute backdrop-blur-[6px] bg-[rgba(68,71,90,0.3)] inset-0 pointer-events-none group-hover:bg-[rgba(68,71,90,0.5)] transition-colors" />
              <div className="relative w-full flex items-start justify-between z-10">
                <div className="bg-[rgba(80,250,123,0.1)] border border-[rgba(80,250,123,0.2)] flex px-[13px] py-[7px] rounded-[12px]">
                  <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-green text-[10px] tracking-[1px] uppercase">
                    Infrastructure
                  </span>
                </div>
                <div className="w-[13.5px] h-[13.5px] relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgIcon3}
                  />
                </div>
              </div>
              <div className="relative w-full pt-[5.2px] z-10">
                <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[20px] text-white">
                  Infraestrutura
                </h3>
              </div>
              <div className="relative w-full z-10">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[rgba(248,248,242,0.8)] leading-[1.6]">
                  Implementações técnicas: Repositórios Prisma, clientes de API
                  e integrações com serviços externos.
                </p>
              </div>
              <div className="opacity-70 relative w-full pt-[9.2px] flex flex-wrap gap-[12px] z-10 group-hover:opacity-100 transition-opacity">
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-green text-[11px] bg-dracula-green/10 px-2 py-1 rounded">
                  /core/infra
                </span>
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-green text-[11px] bg-dracula-green/10 px-2 py-1 rounded">
                  /repositories
                </span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="border border-[rgba(255,255,255,0.1)] flex flex-col gap-[14.8px] p-[24px] md:p-[29px] relative rounded-[24px] overflow-hidden group hover:border-[rgba(241,250,140,0.3)] transition-colors cursor-pointer">
              <div className="absolute backdrop-blur-[6px] bg-[rgba(68,71,90,0.3)] inset-0 pointer-events-none group-hover:bg-[rgba(68,71,90,0.5)] transition-colors" />
              <div className="relative w-full flex items-start justify-between z-10">
                <div className="bg-[rgba(241,250,140,0.1)] border border-[rgba(241,250,140,0.2)] flex px-[13px] py-[7px] rounded-[12px]">
                  <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-yellow text-[10px] tracking-[1px] uppercase">
                    Unit Tests
                  </span>
                </div>
                <div className="w-[10.5px] h-[14.25px] relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgIcon4}
                  />
                </div>
              </div>
              <div className="relative w-full pt-[5.2px] z-10">
                <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[20px] text-white">
                  Testes Unitários
                </h3>
              </div>
              <div className="relative w-full z-10">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[rgba(248,248,242,0.8)] leading-[1.6]">
                  Garantia de qualidade granular. Testes para Casos de Uso e
                  lógica de domínio, garantindo funcionamento isolado.
                </p>
              </div>
              <div className="opacity-70 relative w-full pt-[9.2px] flex flex-wrap gap-[12px] z-10 group-hover:opacity-100 transition-opacity">
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-yellow text-[11px] bg-dracula-yellow/10 px-2 py-1 rounded">
                  /src/test
                </span>
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-yellow text-[11px] bg-dracula-yellow/10 px-2 py-1 rounded">
                  /vitest.config.ts
                </span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="border border-[rgba(255,255,255,0.1)] flex flex-col gap-[14.8px] p-[24px] md:p-[29px] relative rounded-[24px] overflow-hidden group hover:border-[rgba(255,184,108,0.3)] transition-colors cursor-pointer">
              <div className="absolute backdrop-blur-[6px] bg-[rgba(68,71,90,0.3)] inset-0 pointer-events-none group-hover:bg-[rgba(68,71,90,0.5)] transition-colors" />
              <div className="relative w-full flex items-start justify-between z-10">
                <div className="bg-[rgba(255,184,108,0.1)] border border-[rgba(255,184,108,0.2)] flex px-[13px] py-[7px] rounded-[12px]">
                  <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-dracula-orange text-[10px] tracking-[1px] uppercase">
                    E2E Tests
                  </span>
                </div>
                <div className="w-[15px] h-[12px] relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgIcon5}
                  />
                </div>
              </div>
              <div className="relative w-full pt-[5.2px] z-10">
                <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[20px] text-white">
                  End-to-End Testing
                </h3>
              </div>
              <div className="relative w-full z-10">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] md:text-[14px] text-[rgba(248,248,242,0.8)] leading-[1.6]">
                  Testes de fluxos completos com Playwright. Simulam o
                  comportamento do usuário final em jornadas críticas.
                </p>
              </div>
              <div className="opacity-70 relative w-full pt-[9.2px] flex flex-wrap gap-[12px] z-10 group-hover:opacity-100 transition-opacity">
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-orange text-[11px] bg-dracula-orange/10 px-2 py-1 rounded">
                  /e2e/*.spec.ts
                </span>
                <span className="font-['Liberation_Mono:Bold',sans-serif] text-dracula-orange text-[11px] bg-dracula-orange/10 px-2 py-1 rounded">
                  /playwright.config.ts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

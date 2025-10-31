import { PrimaryButton } from "./PrimaryButton"
import { TechChip } from "./TechChip"
import { techStack } from "../data/websiteData"

export function Hero({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section ref={heroRef} className="relative overflow-hidden reveal">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 450px at 70% -10%, rgba(70,227,255,.10), transparent 60%), radial-gradient(900px 450px at 10% -10%, rgba(109,77,255,.10), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl flex justify-center items-center gap-12 px-6 pt-12 pb-15 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 lg:px-8">
        <div className="w-full text-start md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] sm:leading-[1.2] md:leading-tight">
            Sites profissionais que geram confiança e clientes
          </h1>

          <p className="mt-5 max-w-xl mx-auto md:mx-0 text-slate-300 text-sm sm:text-base leading-relaxed">
            Criação de landing pages e e-commerces com React, TypeScript e Tailwind, focados em performance, SEO e conversão.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:justify-start md:mt-8">
            <div className="flex flex-col items-start gap-2">
              <PrimaryButton href="#contato">
                Solicitar orçamento
              </PrimaryButton>

              <a href="#trabalhos" className="hidden md:flex text-sm text-slate-300 underline underline-offset-4 hover:text-white transition pl-1">
                Ver projetos
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-start gap-2 sm:mt-6 md:justify-start">
            {techStack.map((t) => (
              <TechChip key={t} label={t} />
            ))}
          </div>
        </div>

        <div className="w-full hidden md:flex justify-center items-center mb-8 md:mb-0 lg:pl-20">
          <div className="w-full flex items-center justify-center bg-transparent p-2 sm:p-4 md:p-6 backdrop-blur-none">
            <img
              src="\src\assets\hero_web_illustration.svg" 
              alt="Desenvolvimento web profissional"
              className="h-[300px] lg:h-[400px] xl:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

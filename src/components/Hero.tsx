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
      <div className="mx-auto max-w-7xl items-center gap-12 px-4 pt-12 pb-15 sm:px-6 sm:pt-16 sm:pb-24 md:grid md:grid-cols-2 md:pt-24 md:pb-32 md:gap-16 lg:px-8">
        <div className="order-2 md:order-1 text-start md:text-left">
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

        <div className="order-1 md:order-2 relative hidden md:flex justify-center items-center mb-8 md:mb-0 lg:-mr-100">
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-tr from-cyan-400/10 via-blue-500/10 to-indigo-500/10 blur-2xl sm:blur-3xl animate-pulse" />
          <div className="relative bg-transparent p-2 sm:p-4 md:p-6 backdrop-blur-none">
            <img
              src="image-Photoroom (5).png"
              alt="Pixel Web"
              className="h-[220px] sm:h-[280px] md:h-[300px] lg:h-[400px] w-auto transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

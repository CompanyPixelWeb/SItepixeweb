import { process } from "../data/websiteData"

export function Process({ processRef }: { processRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section id="processo" ref={processRef} className="border-t border-white/10 reveal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-cyan to-indigo bg-clip-text text-transparent">Como trabalhamos</span>
        </h2>
        <ol className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-3 lg:gap-8">
          {process.map((p) => (
            <li key={p.n} className="rounded-2xl border border-white/10 bg-black/30 p-5 transition-all hover:border-white/20 sm:p-6">
              <div className="text-sm font-medium text-slate-300 sm:text-base">{p.n}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-relaxed text-slate-300 sm:mt-8 sm:text-sm sm:p-5">
          Caso o cliente não tenha preferência por uma tecnologia específica, nós definimos a melhor stack para o projeto, garantindo alto desempenho, SEO técnico e foco em métricas de conversão
        </div>
      </div>
    </section>
  )
}

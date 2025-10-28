import { TechChip } from "./TechChip"
import { works } from "../data/websiteData"

export function Works({ workRef }: { workRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section id="trabalhos" ref={workRef} className="border-t border-white/10 reveal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-cyan to-indigo bg-clip-text text-transparent">
            Projetos em destaque
          </span>
        </h2>

        <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 sm:grid-cols-2 lg:gap-8">
          {works.map((w) => (
            <article
              key={w.n}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-white/20 sm:p-6"
            >
              <div className="mb-4 h-52 w-full overflow-hidden rounded-lg border border-white/10 bg-[#0e1220] sm:h-64 md:h-72">
                <img src={w.thumb} alt={w.n} className="h-full w-full object-cover" />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{w.n}</h3>
                <span className="inline-flex rounded-md bg-gradient-to-r from-cyan to-indigo px-2.5 py-1 text-xs font-semibold text-black w-fit">
                  {w.resultado.kpi}
                </span>
              </div>

              <dl className="mt-4 space-y-2 text-sm text-slate-300 sm:mt-5">
                <div>
                  <dt className="mb-1 text-xs font-medium text-slate-400">Problema</dt>
                  <dd className="leading-relaxed">{w.problema}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-medium text-slate-400">Solução</dt>
                  <dd className="leading-relaxed">{w.solucao}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-medium text-slate-400">Resultado</dt>
                  <dd className="leading-relaxed">{w.resultado.detalhe}</dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {w.tags.map((t) => (
                  <TechChip key={t} label={t} />
                ))}
              </div>

              <div className="mt-5 sm:mt-6">
                <a
                  href={w.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan to-indigo px-4 py-2.5 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Ver ao vivo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

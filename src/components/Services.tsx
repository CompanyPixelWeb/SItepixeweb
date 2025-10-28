import { services } from "../data/websiteData"

export function Services({ servicesRef }: { servicesRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section id="servicos" ref={servicesRef} className="border-t border-white/10 reveal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-cyan to-indigo bg-clip-text text-transparent">
            Serviços
          </span>
        </h1>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-3 lg:gap-8">
          {services.map((s) => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-white/20 sm:p-6">
              <h2 className="text-base font-medium text-white sm:text-lg">
                {s.t}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {s.d}
              </p>
              
              <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                {s.b.map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan to-indigo" />

                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

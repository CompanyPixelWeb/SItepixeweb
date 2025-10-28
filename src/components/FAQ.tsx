import { faqData, whatsappLink } from "../data/websiteData"

export function FAQ({ faqRef }: { faqRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section id="faq" ref={faqRef} className="border-t border-white/10 reveal">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          <span className="bg-gradient-to-r from-cyan to-indigo bg-clip-text text-transparent">Dúvidas frequentes</span>
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 sm:pb-8">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {faqData.map(([q, a]) => (
            <div key={q} className="rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:border-white/20 sm:p-5">
              <h3 className="mb-2 text-base font-medium text-white sm:text-lg">{q}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{a}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="contato" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar proposta pelo WhatsApp"
          className="block rounded-2xl border border-white/10 bg-gradient-to-r from-cyan/10 to-indigo/10 p-5 transition-all hover:-translate-y-0.5 hover:border-cyan/40 sm:p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-white sm:text-lg">Pronto para começar?</h3>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">Enviar mensagem com objetivo e prazo desejado.</p>
            </div>
            <span className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan to-indigo px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_4px_rgba(109,77,255,.15)] transition-all hover:shadow-[0_0_0_6px_rgba(70,227,255,.18)] sm:text-base sm:px-6 sm:py-3.5">
              Solicitar proposta
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}

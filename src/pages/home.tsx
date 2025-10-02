import React, { useEffect, useRef } from "react"

function useReveal<T extends HTMLElement>(opts: IntersectionObserverInit = { threshold: 0.15 }) {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.classList.add("reveal-in")
    }, opts)
    io.observe(el)
    return () => io.disconnect()
  }, [opts])
  return ref
}


function PrimaryButton({ href = "#contato", children = "Solicitar orçamento" }: { href?: string; children?: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-black
      bg-gradient-to-r from-cyan to-indigo shadow-[0_0_0_6px_rgba(109,77,255,.15)]
      hover:shadow-[0_0_0_10px_rgba(70,227,255,.18)] transition hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}


function TechChip({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
      {label}
    </span>
  )
}

export default function App() {
  const heroRef = useReveal<HTMLElement>()
  const servicesRef = useReveal<HTMLElement>()
  const processRef = useReveal<HTMLElement>()
  const workRef = useReveal<HTMLElement>()
  const faqRef = useReveal<HTMLElement>()

  return (
    <div className="dark min-h-dvh">

      <style>{`
        .reveal { opacity: 0; transform: translateY(14px); transition: opacity .6s ease, transform .6s ease; }
        .reveal-in { opacity: 1; transform: translateY(0); }
      `}</style>


      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/pixelweb-Photoroom.png" alt="Pixel Web" className="w-30  -m-5" />
         
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#servicos" className="text-slate-300 hover:text-white">Serviços</a>
            <a href="#processo" className="text-slate-300 hover:text-white">Como trabalho</a>
            <a href="#trabalhos" className="text-slate-300 hover:text-white">Projetos</a>
            <a href="#faq" className="text-slate-300 hover:text-white">FAQ</a>
          </nav>
          <PrimaryButton href="#contato">Falar agora</PrimaryButton>
        </div>
      </header>


      <section ref={heroRef} className="relative overflow-hidden reveal">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 450px at 70% -10%, rgba(70,227,255,.10), transparent 60%), radial-gradient(900px 450px at 10% -10%, rgba(109,77,255,.10), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 md:py-32 lg:px-8">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Sites profissionais que geram confiança e clientes
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              Criação de landing pages e e-commerces com React, TypeScript e Tailwind, focados em performance, SEO e conversão.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#contato">Solicitar orçamento</PrimaryButton>
              <a href="#trabalhos" className="text-slate-300 underline underline-offset-4 hover:text-white">Ver projetos</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {["React", "TypeScript", "Tailwind", "Next.js/Vite", "PostgreSQL/Prisma", "Auth/JWT", "Vercel/Render"].map((t) => (
                <TechChip key={t} label={t} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan/25 to-indigo/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#131720] p-8">
              <img src="/pixelweb-Photoroom.png" alt="Pixel Web" className="mx-auto h-44 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" ref={servicesRef} className="border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            <span className="bg-gradient-to-r from-cyan to-indigo bg-clip-text text-transparent">Serviços</span>
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Landing pages que convertem",
                d: "Páginas rápidas, com copy e layout focados em captar leads e agendamentos.",
                b: ["Hero estratégico", "Prova social", "CTA otimizado"],
              },
              {
                t: "E-commerce enxuto",
                d: "Catálogo, carrinho e checkout integrados, com gestão simples para o negócio.",
                b: ["Filtros e categorias", "Carrinho e cupom", "Integração de pagamento"],
              },
              {
                t: "Sites institucionais",
                d: "Posicionamento profissional com conteúdo claro, SEO técnico e design responsivo.",
                b: ["SEO e metadados", "Blog/Artigos", "Acessibilidade e performance"],
              },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-medium text-white">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.d}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-300">
                  {s.b.map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan to-indigo" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="processo" ref={processRef} className="border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            <span className="bg-gradient-to-r from-cyan to-indigo bg-clip-text text-transparent">Como trabalho</span>
          </h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1. Descoberta",
                d: "Briefing rápido, objetivos, referências e prazos. Definição do escopo e do funil de conversão.",
              },
              {
                n: "2. Protótipo",
                d: "Wireframe e paleta em cima da identidade. Revisão rápida e validação do fluxo.",
              },
              {
                n: "3. Desenvolvimento",
                d: "React + TypeScript + Tailwind com deploy contínuo. Integração de formulários, APIs e analytics.",
              },
            ].map((p) => (
              <li key={p.n} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="text-sm text-slate-300">{p.n}</div>
                <p className="mt-2 text-sm text-slate-300">{p.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-slate-300">
            Stack real: React, TypeScript, Tailwind, Next.js/Vite, Prisma + PostgreSQL, Auth/JWT, Vercel/Render, SEO técnico e métricas de conversão.
          </div>
        </div>
      </section>


    <section id="trabalhos" ref={workRef} className="border-t border-white/10 reveal">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-semibold md:text-3xl">
      <span className="bg-gradient-to-r from-cyan to-indigo bg-clip-text text-transparent">
        Projetos em destaque
      </span>
    </h2>

    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      {[
        {
          n: "E-commerce IphoneShop",
          problema: "Precisava vender mais com catálogo e checkout simples.",
          solucao:
            "Stack React + TS + Prisma/PostgreSQL, autenticação JWT, carrinho e deploy full‑stack.",
          resultado: { kpi: "+28% conversões em 30 dias", detalhe: "LCP 1.4s, CLS 0.02" },
          tags: ["React", "TypeScript", "JWT", "Prisma", "PostgreSQL", "Vercel/Render"],
          live: "https://ecommerce-apple-ebon.vercel.app/home",
         
          thumb: "image.png",
        },
        {
          n: "Landing pages para negócios locais",
          problema: "Baixa geração de leads para terapeutas na cidade.",
          solucao:
            "Landing orientada a conversão com SEO local, CTA WhatsApp e prova social.",
          resultado: { kpi: "+31% leads", detalhe: "Top 3 no mapa para termos locais" },
          tags: ["SEO local", "Copy", "UI responsiva", "WhatsApp CTA"],
          live: "https://psicanalistaclaudiotheodoro.vercel.app/home",
          thumb: "/Captura de Tela (266).png",
        },
      ].map((w) => (
        <article
          key={w.n}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5"
        >

          <div className="mb-4 h-80 w-full overflow-hidden rounded-lg border border-white/10 bg-[#0e1220]">
            <img src={w.thumb} alt={w.n} className="h-full w-full object-cover" />
          </div>


          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-white">{w.n}</h3>
            <span className="rounded-md bg-gradient-to-r from-cyan to-indigo px-2.5 py-1 text-xs font-semibold text-black">
              {w.resultado.kpi}
            </span>
          </div>


          <dl className="mt-3 space-y-2 text-sm text-slate-300">
            <div>
              <dt className="text-slate-400">Problema</dt>
              <dd>{w.problema}</dd>
            </div>
            <div>
              <dt className="text-slate-400">Solução</dt>
              <dd>{w.solucao}</dd>
            </div>
            <div>
              <dt className="text-slate-400">Resultado</dt>
              <dd>{w.resultado.detalhe}</dd>
            </div>
          </dl>


          <div className="mt-3 flex flex-wrap gap-2">
            {w.tags.map((t) => (
              <TechChip key={t} label={t} />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={w.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan to-indigo px-3 py-2 text-sm font-semibold text-black"
            >
              Ver ao vivo
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      <section id="faq" ref={faqRef} className="border-t border-white/10 reveal">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            <span className="bg-gradient-to-r from-cyan to-indigo bg-clip-text text-transparent">Dúvidas frequentes</span>
          </h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Qual o prazo médio?", "Landing pages: 5–10 dias; e-commerce: 2–4 semanas, conforme escopo."],
              ["Como funciona o pagamento?", "50% na aprovação do protótipo e 50% na entrega, com nota."],
              ["Entrega inclui SEO?", "Sim: metadados, sitemap, performance e estrutura semântica."],
              ["Dão suporte pós-entrega?", "7–30 dias conforme plano; também ofereço manutenção mensal."],
            ].map(([q, a]) => (
              <details key={q} className="group rounded-xl border border-white/10 bg-black/30 p-4">
                <summary className="cursor-pointer list-none font-medium text-white">
                  {q}
                  <span className="float-right text-cyan group-open:hidden">+</span>
                  <span className="float-right hidden text-indigo group-open:inline">–</span>
                </summary>
                <p className="mt-2 text-sm text-slate-300">{a}</p>
              </details>
            ))}
          </div>
        </div>

        <div id="contato" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <a
            href={`https://wa.me/18981185292?text=${encodeURIComponent(
              "Olá! Quero solicitar uma proposta para um site profissional."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar proposta pelo WhatsApp"
            className="block rounded-2xl border border-white/10 bg-gradient-to-r from-cyan/10 to-indigo/10 p-6 transition hover:-translate-y-0.5 hover:border-cyan/40 hover:shadow-[0_0_0_10px_rgba(70,227,255,.12)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Pronto para começar?</h3>
                <p className="text-sm text-slate-300">Enviar mensagem com objetivo e prazo desejado.</p>
              </div>
              <span className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan to-indigo px-5 py-3 font-semibold text-black shadow-[0_0_0_6px_rgba(109,77,255,.15)]">
                Solicitar proposta
              </span>
            </div>
          </a>
      </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img src="/pixelweb-Photoroom.png" alt="Pixel Web" className="h-6 w-auto" />
            <span>© {new Date().getFullYear()} Pixel Web</span>
          </div>
          <a href="#contato" className="text-cyan hover:text-white">Falar agora</a>
        </div>
      </footer>
    </div>
  )
}

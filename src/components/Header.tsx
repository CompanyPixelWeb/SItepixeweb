import { whatsappLink } from "../data/websiteData"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-black/5 backdrop-blur">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <img src="/pixelweb-Photoroom.png" alt="Pixel Web" className="h-27 lg:h-45" />
            </div>
            <nav className="flex items-center gap-3 lg:gap-6 text-xs lg:text-sm">
              <a href="#servicos" className="text-slate-300 hover:text-white transition-colors">Serviços</a>
              <a href="#processo" className="text-slate-300 hover:text-white transition-colors">Como trabalhamos</a>
              <a href="#trabalhos" className="text-slate-300 hover:text-white transition-colors">Projetos</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
            </nav>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-semibold text-xs sm:text-sm text-black whitespace-nowrap
              bg-gradient-to-r from-cyan to-indigo shadow-[0_0_0_3px_rgba(109,77,255,.12)] sm:shadow-[0_0_0_4px_rgba(109,77,255,.15)]
              hover:shadow-[0_0_0_5px_rgba(70,227,255,.18)] sm:hover:shadow-[0_0_0_6px_rgba(70,227,255,.18)] transition-all hover:-translate-y-0.5"
            >
              Falar agora
            </a>
        </div>
    </header>
  )
}

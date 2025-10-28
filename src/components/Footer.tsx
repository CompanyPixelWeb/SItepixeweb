import { whatsappLink } from "../data/websiteData"

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex items-center gap-2">
          <img src="/pixelweb-Photoroom.png" alt="Pixel Web" className="h-5 w-auto sm:h-6" />
          <span className="text-xs sm:text-sm">© {new Date().getFullYear()} Pixel Web</span>
        </div>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan transition-colors hover:text-white"
        >
          Falar agora
        </a>
      </div>
    </footer>
  )
}

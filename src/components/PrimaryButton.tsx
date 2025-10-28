export function PrimaryButton({ href = "#contato", children = "Solicitar orçamento" }: { href?: string; children?: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm sm:text-base font-semibold text-black whitespace-nowrap
      bg-gradient-to-r from-cyan to-indigo 
      shadow-[0_0_0_4px_rgba(109,77,255,.15)]
      hover:shadow-[0_0_0_6px_rgba(70,227,255,.18)] 
      transition-all hover:-translate-y-0.5 active:translate-y-0"
    >
      {children}
    </a>
  )
}

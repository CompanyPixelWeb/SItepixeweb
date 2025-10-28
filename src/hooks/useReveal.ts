import { useEffect, useRef } from "react"

export function useReveal<T extends HTMLElement>(opts: IntersectionObserverInit = { threshold: 0.15 }) {
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


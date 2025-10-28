import { useReveal } from "../hooks/useReveal"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Services } from "../components/Services"
import { Process } from "../components/Process"
import { Works } from "../components/Works"
import { FAQ } from "../components/FAQ"
import { Footer } from "../components/Footer"

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

      <Header />
      <Hero heroRef={heroRef} />
      <Services servicesRef={servicesRef} />
      <Process processRef={processRef} />
      <Works workRef={workRef} />
      <FAQ faqRef={faqRef} />
      <Footer />
    </div>
  )
}

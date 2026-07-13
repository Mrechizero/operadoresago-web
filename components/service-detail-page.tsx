import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

interface ServiceDetailPageProps {
  eyebrow: string
  title: string
  highlight: string
  description: string
  benefits: string[]
  includes: { title: string; description: string }[]
  idealFor: string[]
}

export default function ServiceDetailPage({
  eyebrow,
  title,
  highlight,
  description,
  benefits,
  includes,
  idealFor,
}: ServiceDetailPageProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">{eyebrow}</span>
            <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title} <span className="text-primary">{highlight}</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contacto" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                Solicitar propuesta <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/servicios" className="rounded-xl border border-border bg-white px-7 py-3.5 font-semibold transition-colors hover:border-primary/35 hover:bg-primary/5">
                Volver a servicios
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Beneficios</p>
              <h2 className="mb-7 text-3xl font-bold">Qué mejora en tu operación</h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7 sm:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Ideal para</p>
              <h2 className="mb-7 text-3xl font-bold">Escenarios donde aporta más valor</h2>
              <div className="flex flex-wrap gap-3">
                {idealFor.map((item) => (
                  <span key={item} className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-foreground">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Alcance</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Qué puede incluir la solución</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {includes.map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-card p-6">
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

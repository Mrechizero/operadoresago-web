import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CloudCog,
  Code2,
  ExternalLink,
  Network,
  Radar,
  ShieldCheck,
  Wifi,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProcessSection from '@/components/process-section'
import { serviceCategories } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Servicios tecnológicos | Operadores AGO',
  description:
    'Portal cautivo, WiFi administrado, redes de datos, conectividad, desarrollo de software, monitoreo y seguridad para empresas en México.',
}

const categoryIcons = [Wifi, Network, CloudCog, Code2, Radar, ShieldCheck]

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              Catálogo de servicios
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Soluciones tecnológicas, <span className="text-primary">priorizadas por impacto</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Comenzamos por conectividad, WiFi y redes de datos; después integramos software, monitoreo, comunicaciones y seguridad según la operación.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-16 px-4 pb-20 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[categoryIndex]

            return (
              <section key={category.id} id={category.id} className="scroll-mt-28">
                <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold sm:text-3xl">{category.title}</h2>
                    <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{category.description}</p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {category.services.map((service) => {
                    const cardClass =
                      'group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl'
                    const content = (
                      <>
                        {service.featured && (
                          <span className="mb-4 w-fit rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">Destacado</span>
                        )}
                        <h3 className="mb-3 text-xl font-semibold transition-colors group-hover:text-primary">{service.title}</h3>
                        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          {service.external ? 'Abrir plataforma' : 'Conocer solución'}
                          {service.external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                        </span>
                      </>
                    )

                    return service.external ? (
                      <a key={service.title} href={service.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                        {content}
                      </a>
                    ) : (
                      <Link key={service.title} href={service.href} className={cardClass}>
                        {content}
                      </Link>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </section>

        <ProcessSection />
      </main>
      <Footer />
    </>
  )
}

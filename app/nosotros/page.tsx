import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Blocks, Eye, Handshake, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Nosotros | Operadores AGO',
  description:
    'Conoce el enfoque de Operadores AGO para integrar infraestructura, software, monitoreo y seguridad en soluciones tecnológicas para empresas.',
}

const values = [
  {
    icon: Handshake,
    title: 'Cercanía',
    description: 'Entendemos primero la operación y hablamos con claridad sobre alcance, prioridades y costos.',
  },
  {
    icon: Blocks,
    title: 'Integración',
    description: 'Conectamos infraestructura, software y servicios para evitar soluciones aisladas difíciles de mantener.',
  },
  {
    icon: Eye,
    title: 'Visibilidad',
    description: 'Promovemos monitoreo, documentación y seguimiento para tomar decisiones con información.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsabilidad',
    description: 'Diseñamos considerando continuidad, seguridad, mantenimiento y crecimiento futuro.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              Sobre Operadores AGO
            </div>
            <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
              Tecnología conectada con la <span className="text-primary">realidad de tu negocio</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              Ayudamos a empresas y emprendedores a construir, conectar y administrar soluciones tecnológicas sin separar la infraestructura del software ni el soporte de la operación.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <div className="rounded-3xl border border-border bg-card p-7 sm:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Nuestra misión</p>
              <h2 className="mb-5 text-3xl font-bold">Convertir tecnología en capacidad operativa</h2>
              <p className="leading-relaxed text-muted-foreground">
                Diseñar e implementar soluciones confiables, escalables y comprensibles que ayuden a nuestros clientes a comunicarse mejor, automatizar procesos, proteger sus activos y mantener visibles sus servicios críticos.
              </p>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7 sm:p-9">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Nuestra visión</p>
              <h2 className="mb-5 text-3xl font-bold">Ser un aliado tecnológico de largo plazo</h2>
              <p className="leading-relaxed text-muted-foreground">
                Acompañar el crecimiento de cada proyecto con una arquitectura que pueda evolucionar, integrando nuevas sucursales, usuarios, plataformas, dispositivos y necesidades sin comenzar desde cero.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Principios</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Cómo tomamos decisiones en cada proyecto</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border border-border bg-card p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-primary/20 bg-primary/5 p-7 text-center sm:p-9 lg:flex-row lg:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Conoce lo que podemos integrar para tu empresa</h2>
              <p className="text-muted-foreground">Explora el catálogo o cuéntanos directamente el problema que quieres resolver.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link href="/servicios" className="rounded-xl border border-primary/25 bg-white px-6 py-3 font-semibold text-primary">
                Ver servicios
              </Link>
              <Link href="/contacto" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground">
                Hablemos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

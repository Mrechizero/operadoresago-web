import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectorIcon from '@/components/sector-icon'
import SectorExperience, { SectorServiceGrid } from '@/components/sector-experience'
import { getSector, sectors } from '@/lib/sectors-data'
import { createPageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const sector = getSector(slug)

  if (!sector) return {}

  const title = `Tecnología para ${sector.name} | Operadores AGO`
  const description = `${sector.description} Soluciones de conectividad, infraestructura y software para ${sector.name.toLowerCase()} en México.`

  return createPageMetadata({
    title,
    description,
    path: `/sectores/${sector.slug}`,
    imageAlt: `Operadores AGO para ${sector.name}`,
    keywords: [
      `tecnología para ${sector.shortName.toLowerCase()}`,
      `WiFi para ${sector.shortName.toLowerCase()}`,
      `redes para ${sector.shortName.toLowerCase()}`,
      'Operadores AGO',
    ],
  })
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const sector = getSector(slug)
  if (!sector) notFound()

  return (
    <>
      <Navbar />
      <main id="contenido-principal" tabIndex={-1} className="min-h-screen bg-background pt-18">
        <section className={`relative overflow-hidden bg-gradient-to-br ${sector.accentSoft} px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20`}>
          <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(rgba(37,99,235,.22)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
          <div className="relative mx-auto max-w-7xl">
            <Link href="/sectores" className="mb-7 inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Todos los sectores
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur-xl">
                  <SectorIcon icon={sector.icon} className="h-4 w-4" />
                  {sector.eyebrow}
                </div>
                <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                  Tecnología para <span className={`bg-gradient-to-r ${sector.accent} bg-clip-text text-transparent`}>{sector.shortName.toLowerCase()}</span>.
                </h1>
                <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-800 sm:text-xl">{sector.hero}</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{sector.description}</p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href={`/contacto?sector=${encodeURIComponent(sector.slug)}`} className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,.25)] transition hover:-translate-y-0.5">
                    Solicitar diagnóstico <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                  <a href="#necesidades" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-800 backdrop-blur-xl transition hover:bg-white">
                    Ver necesidades
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 p-5 shadow-[0_28px_80px_rgba(15,23,42,.2)] sm:p-6">
                <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${sector.accent} opacity-30 blur-3xl`} />
                <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${sector.accent} text-white`}>
                        <SectorIcon icon={sector.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-black text-white">{sector.shortName}</p>
                        <p className="text-[9px] uppercase tracking-[0.16em] text-white/35">Arquitectura sugerida</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-blue-300/15 bg-blue-400/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-blue-300">AGO TECH</span>
                  </div>

                  <div className="space-y-2">
                    {sector.services.map((service, index) => (
                      <div key={service.title} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] p-3.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.07] text-[10px] font-black text-blue-300">{String(index + 1).padStart(2, '0')}</span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-bold text-white">{service.title}</p>
                          <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-white/30">{service.label}</p>
                        </div>
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {sector.stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-white/[0.07] bg-white/[0.035] p-3 text-center">
                        <p className="text-sm font-black text-white">{stat.value}</p>
                        <p className="mt-1 text-[9px] leading-tight text-white/30">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="necesidades" className="scroll-mt-24">
          <SectorExperience sector={sector} />
        </div>
        <SectorServiceGrid sector={sector} />

        <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-7 text-center sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">Siguiente paso</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">Primero entendemos tu operación. Después diseñamos la solución.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Cuéntanos qué está fallando, qué quieres mejorar o qué necesitas conectar. Podemos partir de tu infraestructura actual antes de decidir qué debe cambiar.</p>
            <Link href={`/contacto?sector=${encodeURIComponent(sector.slug)}`} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">
              Hablar con AGO TECH <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

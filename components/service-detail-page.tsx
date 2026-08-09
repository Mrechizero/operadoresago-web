'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Layers3, Network, Sparkles } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectorIcon from '@/components/sector-icon'
import { sectors } from '@/lib/sectors-data'
import { getServiceGuide } from '@/lib/service-relations'

interface ServiceDetailPageProps {
  serviceHref: string
  eyebrow: string
  title: string
  highlight: string
  description: string
  benefits: string[]
  includes: { title: string; description: string }[]
  idealFor: string[]
  plans?: Array<{ name: string; price: string; description?: string; features: string[]; badge?: string }>
}

type DetailTab = 'benefits' | 'includes' | 'sectors' | 'plans'

export default function ServiceDetailPage({
  serviceHref,
  eyebrow,
  title,
  highlight,
  description,
  benefits,
  includes,
  idealFor,
  plans = [],
}: ServiceDetailPageProps) {
  const [activeTab, setActiveTab] = useState<DetailTab>('benefits')
  const guide = getServiceGuide(serviceHref)
  const relatedSectors = useMemo(
    () => sectors.filter((sector) => sector.services.some((service) => service.href === serviceHref) || sector.needs.some((need) => need.serviceHrefs.includes(serviceHref))),
    [serviceHref],
  )
  const contactValue = guide?.contactValue ?? 'Otro servicio'
  const contactHref = `/contacto?service=${encodeURIComponent(contactValue)}&source=${encodeURIComponent(serviceHref)}`

  const tabs: Array<{ id: DetailTab; label: string }> = [
    { id: 'benefits', label: 'Qué resuelve' },
    { id: 'includes', label: 'Qué puede incluir' },
    { id: 'sectors', label: 'Dónde encaja' },
    ...(plans.length ? [{ id: 'plans' as const, label: 'Planes' }] : []),
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-18">
        <section className="relative overflow-hidden bg-white px-4 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(59,130,246,.11),transparent_26%),radial-gradient(circle_at_90%_10%,rgba(139,92,246,.10),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary">{eyebrow}</span>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                {title} <span className="text-primary">{highlight}</span>
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {idealFor.slice(0, 6).map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold text-slate-600 shadow-sm">{item}</span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={contactHref} className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,.24)] transition hover:-translate-y-0.5">
                  Solicitar diagnóstico <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link href="/servicios" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-primary/30 hover:text-primary">
                  Explorar otras soluciones
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-5 shadow-[0_28px_80px_rgba(15,23,42,.18)] sm:p-6">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-300">Arquitectura de solución</p>
                    <p className="mt-1 text-lg font-black text-white">{guide?.shortTitle ?? eyebrow}</p>
                  </div>
                  <span className="rounded-full border border-emerald-300/15 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-emerald-300">AGO TECH</span>
                </div>

                <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                  <div className="space-y-2">
                    {['Operación', 'Usuarios', 'Servicios'].map((label) => (
                      <div key={label} className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-2 text-[10px] font-bold text-white/50">{label}</div>
                    ))}
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/10 text-blue-300"><Network className="h-5 w-5" /></span>
                  <div className="space-y-2">
                    {['Diseño', 'Implementación', 'Seguimiento'].map((label) => (
                      <div key={label} className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-2 text-[10px] font-bold text-white/70"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />{label}</div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-blue-300/15 bg-blue-400/10 p-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-blue-300">Sectores relacionados</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {relatedSectors.slice(0, 5).map((sector) => (
                      <Link key={sector.slug} href={`/sectores/${sector.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1.5 text-[10px] font-bold text-white/70 transition hover:bg-white/[0.1] hover:text-white">
                        <SectorIcon icon={sector.icon} className="h-3.5 w-3.5" /> {sector.shortName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold transition ${activeTab === tab.id ? 'border-slate-950 bg-slate-950 text-white shadow-lg' : 'border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[330px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'benefits' && (
                  <motion.div key="benefits" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary"><Sparkles className="h-4 w-4" /> Resultado operativo</div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                          <CheckCircle2 className="mt-1 h-4.5 w-4.5 shrink-0 text-emerald-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'includes' && (
                  <motion.div key="includes" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary"><Network className="h-4 w-4" /> Alcance configurable</div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {includes.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                          <h3 className="text-sm font-black text-slate-950">{item.title}</h3>
                          <p className="mt-2 text-xs leading-6 text-slate-500">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'sectors' && (
                  <motion.div key="sectors" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary"><Layers3 className="h-4 w-4" /> Solución según contexto</div>
                    {relatedSectors.length > 0 ? (
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedSectors.map((sector) => (
                          <Link key={sector.slug} href={`/sectores/${sector.slug}`} className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${sector.accentSoft} p-5 transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg`}>
                            <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${sector.accent} text-white`}><SectorIcon icon={sector.icon} className="h-4.5 w-4.5" /></span>
                            <h3 className="mt-4 text-base font-black text-slate-950">{sector.name}</h3>
                            <p className="mt-2 text-xs leading-6 text-slate-600">{sector.hero}</p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary">Ver enfoque <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">Esta solución se dimensiona de forma transversal. Cuéntanos tu operación y la ubicamos dentro de la arquitectura adecuada.</div>
                    )}
                  </motion.div>
                )}

                {activeTab === 'plans' && plans.length > 0 && (
                  <motion.div key="plans" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary"><Sparkles className="h-4 w-4" /> Opciones comerciales</div>
                    <div className="grid gap-3 md:grid-cols-3">
                      {plans.map((plan) => (
                        <div key={plan.name} className={`relative rounded-2xl border p-5 ${plan.badge ? 'border-primary/35 bg-primary/[0.04]' : 'border-slate-200 bg-white'}`}>
                          {plan.badge && <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">{plan.badge}</span>}
                          <h3 className="pr-20 text-base font-black text-slate-950">{plan.name}</h3>
                          <p className="mt-3 text-3xl font-black tracking-[-0.03em] text-primary">{plan.price}<span className="ml-1 text-xs font-bold text-slate-400">/mes</span></p>
                          {plan.description && <p className="mt-2 text-xs font-bold text-slate-500">{plan.description}</p>}
                          <ul className="mt-4 space-y-2">
                            {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-xs leading-5 text-slate-600"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />{feature}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-xs leading-6 text-slate-500">Precios sujetos a cobertura, factibilidad técnica, instalación y condiciones del proyecto. La validación final se realiza antes de contratar.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-7 text-center sm:p-9 lg:flex-row lg:text-left">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Siguiente paso</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">La solución final depende de tu operación, no de un paquete genérico.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">Podemos revisar lo que ya tienes y definir qué conviene conservar, ajustar o ampliar.</p>
            </div>
            <Link href={contactHref} className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">Hablar con AGO TECH <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight, CircleDot, Network, Sparkles } from 'lucide-react'
import type { SectorItem } from '@/lib/sectors-data'
import { getContactServiceFromHref } from '@/lib/service-relations'

export default function SectorExperience({ sector }: { sector: SectorItem }) {
  const [activeNeedId, setActiveNeedId] = useState(sector.needs[0].id)
  const activeNeed = useMemo(
    () => sector.needs.find((need) => need.id === activeNeedId) ?? sector.needs[0],
    [activeNeedId, sector.needs],
  )
  const recommendedServices = sector.services.filter((service) => activeNeed.serviceHrefs.includes(service.href))
  const primaryServiceHref = recommendedServices[0]?.href ?? activeNeed.serviceHrefs[0] ?? ''
  const contactHref = `/contacto?sector=${encodeURIComponent(sector.slug)}&need=${encodeURIComponent(activeNeed.shortTitle)}&service=${encodeURIComponent(getContactServiceFromHref(primaryServiceHref))}`

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Diagnóstico guiado</p>
            <h2 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">¿Qué necesitas resolver primero?</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end lg:text-right">
            Selecciona el problema más cercano a tu situación. La recomendación cambia sin obligarte a recorrer todo el catálogo de servicios.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
          <div className="space-y-2">
            {sector.needs.map((need, index) => {
              const selected = need.id === activeNeed.id
              return (
                <button
                  key={need.id}
                  type="button"
                  onClick={() => setActiveNeedId(need.id)}
                  aria-pressed={selected}
                  className={`group flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition ${
                    selected
                      ? 'border-slate-950 bg-slate-950 text-white shadow-xl'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black ${selected ? 'bg-white text-slate-950' : 'bg-slate-100 text-slate-500'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-sm font-bold sm:text-base">{need.shortTitle}</span>
                  <ChevronRight className={`h-4 w-4 transition ${selected ? 'text-blue-300' : 'text-slate-300 group-hover:translate-x-0.5 group-hover:text-blue-500'}`} />
                </button>
              )
            })}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNeed.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
                aria-live="polite"
                className="p-6 sm:p-8 lg:p-9"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-blue-300">
                  <CircleDot className="h-5 w-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{activeNeed.title}</p>
                <h3 className="mt-3 text-2xl font-black tracking-[-0.025em] text-slate-950 sm:text-3xl">{activeNeed.outcome}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">{activeNeed.description}</p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {recommendedServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[9px] font-black uppercase tracking-[0.15em] text-primary">{service.label}</span>
                          <h4 className="mt-1 text-base font-black text-slate-950">{service.title}</h4>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                      <p className="mt-2 text-xs leading-6 text-slate-500">{service.description}</p>
                    </Link>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    La solución final se ajusta después de revisar tu operación.
                  </div>
                  <Link href={contactHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5">
                    Solicitar diagnóstico
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectorServiceGrid({ sector }: { sector: SectorItem }) {
  return (
    <section className="border-y border-slate-200 bg-slate-950 py-14 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              <Sparkles className="h-4 w-4" />
              Soluciones relacionadas
            </div>
            <h2 className="text-3xl font-black tracking-[-0.03em] sm:text-4xl">La tecnología se combina según tu operación.</h2>
          </div>
          <Link href="/servicios" className="inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-white">
            Ver catálogo técnico <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sector.services.map((service) => (
            <Link key={service.href} href={service.href} className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.08]">
              <Network className="mb-5 h-5 w-5 text-blue-300" />
              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-white/35">{service.label}</span>
              <h3 className="mt-2 text-lg font-black">{service.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-blue-300">
                Conocer solución <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Network, Sparkles } from 'lucide-react'
import SectorIcon from '@/components/sector-icon'
import { sectors } from '@/lib/sectors-data'
import { getContactServiceFromHref, serviceCatalog } from '@/lib/service-relations'

export default function ServiceExplorer() {
  const [activeSectorSlug, setActiveSectorSlug] = useState(sectors[0].slug)
  const activeSector = useMemo(
    () => sectors.find((sector) => sector.slug === activeSectorSlug) ?? sectors[0],
    [activeSectorSlug],
  )
  const [activeNeedId, setActiveNeedId] = useState(activeSector.needs[0].id)

  const activeNeed = useMemo(
    () => activeSector.needs.find((need) => need.id === activeNeedId) ?? activeSector.needs[0],
    [activeNeedId, activeSector],
  )

  const recommended = useMemo(
    () => activeNeed.serviceHrefs.map((href) => serviceCatalog.find((service) => service.href === href)).filter(Boolean),
    [activeNeed],
  )

  const changeSector = (slug: string) => {
    const next = sectors.find((sector) => sector.slug === slug) ?? sectors[0]
    setActiveSectorSlug(next.slug)
    setActiveNeedId(next.needs[0].id)
  }

  const primaryService = recommended[0]
  const contactHref = primaryService
    ? `/contacto?sector=${encodeURIComponent(activeSector.slug)}&need=${encodeURIComponent(activeNeed.shortTitle)}&service=${encodeURIComponent(getContactServiceFromHref(primaryService.href))}`
    : `/contacto?sector=${encodeURIComponent(activeSector.slug)}&need=${encodeURIComponent(activeNeed.shortTitle)}`

  return (
    <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap">
          {sectors.map((sector) => {
            const selected = sector.slug === activeSector.slug
            return (
              <button
                key={sector.slug}
                type="button"
                onClick={() => changeSector(sector.slug)}
                aria-pressed={selected}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition ${
                  selected
                    ? 'border-slate-950 bg-slate-950 text-white shadow-lg'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-slate-950'
                }`}
              >
                <SectorIcon icon={sector.icon} className="h-4 w-4" />
                {sector.shortName}
              </button>
            )
          })}
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,.14)] lg:grid-cols-[.7fr_1.3fr]">
          <div className="border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">
              <Sparkles className="h-4 w-4" /> ¿Qué necesitas resolver?
            </div>
            <div className="space-y-2">
              {activeSector.needs.map((need, index) => {
                const selected = need.id === activeNeed.id
                return (
                  <button
                    key={need.id}
                    type="button"
                    onClick={() => setActiveNeedId(need.id)}
                    aria-pressed={selected}
                    className={`flex w-full items-center gap-3 rounded-xl border p-3.5 text-left transition ${
                      selected
                        ? 'border-blue-300/30 bg-blue-400/10 text-white'
                        : 'border-white/[0.07] bg-white/[0.035] text-slate-400 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-black ${selected ? 'bg-blue-400 text-slate-950' : 'bg-white/[0.07] text-white/45'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-bold sm:text-sm">{need.shortTitle}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative overflow-hidden p-5 sm:p-7 lg:p-8">
            <div className={`absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${activeSector.accent} opacity-20 blur-3xl`} />
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSector.slug}-${activeNeed.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                aria-live="polite"
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${activeSector.accent} text-white`}>
                    <SectorIcon icon={activeSector.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-blue-300">{activeSector.shortName}</p>
                    <h2 className="text-xl font-black text-white sm:text-2xl">{activeNeed.title}</h2>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{activeNeed.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-violet-300/15 bg-violet-400/10 px-3 py-2 text-xs font-bold text-violet-200">
                  <CheckCircle2 className="h-4 w-4" /> {activeNeed.outcome}
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {recommended.map((service) => service && (
                    <Link key={service.href} href={service.href} className="group rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.08]">
                      <Network className="mb-4 h-5 w-5 text-blue-300" />
                      <p className="text-[9px] font-black uppercase tracking-[0.14em] text-white/35">{service.category}</p>
                      <h3 className="mt-1.5 text-base font-black text-white">{service.shortTitle}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{service.description}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-300">Ver solución <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href={contactHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5">
                    Solicitar diagnóstico <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={`/sectores/${activeSector.slug}`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/[0.08]">
                    Ver contexto de {activeSector.shortName.toLowerCase()}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-7">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Acceso directo al catálogo técnico</p>
          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {serviceCatalog.map((service) => (
              <Link key={service.href} href={service.href} className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 transition hover:border-primary/30 hover:text-primary">
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Layers3, MoveRight } from 'lucide-react'
import { sectors } from '@/lib/sectors-data'
import SectorIcon from '@/components/sector-icon'

export default function SectorSelector({ showIntro = true, showAllLink = true }: { showIntro?: boolean; showAllLink?: boolean }) {
  const [activeSlug, setActiveSlug] = useState(sectors[0].slug)
  const active = useMemo(
    () => sectors.find((sector) => sector.slug === activeSlug) ?? sectors[0],
    [activeSlug],
  )

  return (
    <section id="sectores" className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-100/55 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showIntro && (
          <div className="mb-8 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                <Layers3 className="h-3.5 w-3.5" />
                Empieza por tu sector
              </div>
              <h2 className="text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl">
                ¿Qué tipo de negocio quieres mejorar?
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:justify-self-end lg:text-right">
              No necesitas conocer términos técnicos. Elige tu sector y te mostramos primero las soluciones que suelen tener mayor impacto en esa operación.
            </p>
          </div>
        )}

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap">
          {sectors.map((sector) => {
            const selected = sector.slug === active.slug
            return (
              <button
                key={sector.slug}
                type="button"
                onClick={() => setActiveSlug(sector.slug)}
                aria-pressed={selected}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
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

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,.14)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              aria-live="polite"
              className="grid lg:grid-cols-[1.05fr_.95fr]"
            >
              <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
                <div className={`absolute inset-0 bg-gradient-to-br ${active.accent} opacity-[0.16]`} />
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:34px_34px]" />
                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">{active.eyebrow}</p>
                  <h3 className="mt-3 max-w-2xl text-2xl font-black tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
                    {active.hero}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{active.description}</p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-3">
                    {active.services.slice(0, 3).map((service) => (
                      <div key={service.title} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-3 py-2.5 text-xs font-medium text-slate-200">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-300" />
                        {service.title}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/sectores/${active.slug}`}
                      className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
                    >
                      Ver soluciones para {active.shortName.toLowerCase()}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                    {showAllLink && (
                      <Link
                        href="/sectores"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.09]"
                      >
                        Explorar todos los sectores
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[310px] border-t border-white/10 bg-[#080719] p-5 sm:p-7 lg:border-l lg:border-t-0">
                <div className={`absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br ${active.accent} opacity-25 blur-3xl`} />
                <div className="relative flex h-full min-h-[270px] flex-col justify-between overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${active.accent} text-white shadow-lg`}>
                        <SectorIcon icon={active.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-white">{active.shortName}</p>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">{active.visualLabel}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-emerald-300/15 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300">Operación</span>
                  </div>

                  <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <div className="space-y-2">
                      {['Usuarios', 'Dispositivos', 'Servicios'].map((label) => (
                        <div key={label} className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-2 text-[10px] font-medium text-white/55">{label}</div>
                      ))}
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/10 text-blue-300">
                      <MoveRight className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      {active.services.slice(0, 3).map((service) => (
                        <div key={service.title} className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-3 py-2 text-[10px] font-medium text-white/70">{service.label}</div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {active.stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-white/[0.07] bg-white/[0.04] p-3 text-center">
                        <p className="text-sm font-black text-white">{stat.value}</p>
                        <p className="mt-1 text-[9px] leading-tight text-white/35">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

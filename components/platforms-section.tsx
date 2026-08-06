'use client'

import { motion } from 'framer-motion'
import {
  CalendarDays,
  ExternalLink,
  Factory,
  Gamepad2,
  ShoppingBag,
  Wifi,
} from 'lucide-react'
import { platforms } from '@/lib/site-data'

const iconByShortName = {
  RB: CalendarDays,
  SH: ShoppingBag,
  WF: Wifi,
  CI: Factory,
  AG: Gamepad2,
}

export default function PlatformsSection() {
  return (
    <section id="plataformas" className="relative border-y border-border bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Experiencia comprobable
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Plataformas y proyectos que ya puedes explorar
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-right">
            Productos propios y soluciones desarrolladas para clientes con objetivos distintos: reservas, comercio, conectividad, industria y entretenimiento.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = iconByShortName[platform.shortName as keyof typeof iconByShortName]
            const isPreparing = platform.status === 'En preparación'

            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/35 hover:shadow-xl sm:p-8"
              >
                <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-primary/5 transition-transform group-hover:scale-125" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          isPreparing
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        {platform.status}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {platform.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
                    {platform.name}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {platform.description}
                  </p>
                  <p className="mb-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {platform.audience}
                  </p>

                  <span className="inline-flex items-center gap-2 font-semibold text-primary">
                    {isPreparing ? 'Abrir dominio del proyecto' : 'Explorar proyecto'}
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

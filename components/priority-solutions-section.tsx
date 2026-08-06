'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Network, RadioTower, Wifi } from 'lucide-react'
import { prioritySolutions } from '@/lib/site-data'

const icons = [RadioTower, Wifi, Network]

export default function PrioritySolutionsSection() {
  return (
    <section className="relative border-y border-border bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.28),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Soluciones prioritarias
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              La infraestructura que conecta a tus clientes y mantiene tu operación en línea
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 lg:text-right">
            Diseñamos proyectos para restaurantes, hoteles, comercios, oficinas, industria y espacios con alta demanda de conectividad en todo México.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {prioritySolutions.map((solution, index) => {
            const Icon = icons[index]

            return (
              <motion.article
                key={solution.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.09] sm:p-7"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-400/10">
                    <Icon className="h-5 w-5 text-sky-300" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    {solution.label}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold">{solution.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {solution.description}
                </p>

                <ul className="mb-7 flex-1 space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-2 font-semibold text-sky-300"
                >
                  Conocer solución
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

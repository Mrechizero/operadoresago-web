'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CloudCog,
  Code2,
  Network,
  Radar,
  ShieldCheck,
  Wifi,
} from 'lucide-react'
import { serviceCategories } from '@/lib/site-data'

const categoryIcons = [Wifi, Network, CloudCog, Code2, Radar, ShieldCheck]

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-20 sm:py-24 lg:py-28">
      <div className="absolute left-1/2 top-0 h-px w-[min(800px,80%)] -translate-x-1/2 bg-[linear-gradient(to_right,transparent,oklch(0.55_0.2_250/0.5),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Lo que hacemos</p>
          <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Servicios organizados para resolver, no para confundir</h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            La portada muestra las áreas principales. El catálogo completo vive en su propia sección para que cada visitante encuentre rápidamente la solución adecuada.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => {
            const Icon = categoryIcons[index]
            const preview = category.services.slice(0, 3)

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">{category.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                <ul className="mb-6 flex-1 space-y-2.5">
                  {preview.map((service) => (
                    <li key={service.title} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {service.title}
                    </li>
                  ))}
                </ul>
                <Link href={`/servicios#${category.id}`} className="inline-flex items-center gap-2 font-semibold text-primary">
                  Explorar esta área
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8 lg:flex-row lg:text-left"
        >
          <div>
            <h3 className="mb-2 text-xl font-bold sm:text-2xl">¿Necesitas combinar varios servicios?</h3>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              Podemos integrar conectividad, software, monitoreo y seguridad dentro de una sola propuesta técnica.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/servicios" className="rounded-xl border border-primary/25 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
              Ver catálogo completo
            </Link>
            <Link href="/contacto" className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Solicitar evaluación
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, CloudCog, Code2, Radar, Wifi } from 'lucide-react'
import NetworkCanvas from './network-canvas'

const capabilities = [
  { value: 'Redes', label: 'Conectividad e infraestructura' },
  { value: 'Apps', label: 'Desarrollo web y multiplataforma' },
  { value: 'Cloud', label: 'Servicios administrados' },
  { value: 'IoT', label: 'Monitoreo y automatización' },
]

const badges = [
  { icon: Wifi, label: 'Infraestructura empresarial' },
  { icon: Code2, label: 'Software a la medida' },
  { icon: Radar, label: 'Monitoreo proactivo' },
]

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <NetworkCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.14),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_top,white,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs">
              Infraestructura • Software • Monitoreo • Seguridad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Tecnología que conecta,
            <br />
            <span className="text-primary">automatiza y hace crecer</span>
            <br />
            tu negocio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mb-9 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            Integramos conectividad, infraestructura, desarrollo de aplicaciones, cloud,
            ciberseguridad y monitoreo en soluciones claras para empresas que quieren operar mejor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-11 flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4"
          >
            <Link
              href="/servicios"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:text-base"
            >
              Explorar servicios
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#plataformas"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white/90 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white sm:text-base"
            >
              Ver plataformas propias
              <CloudCog className="h-4 w-4 text-primary" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-border/80 bg-white/90 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm sm:text-sm"
              >
                <Icon className="h-3.5 w-3.5 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border lg:grid-cols-4"
        >
          {capabilities.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center bg-card px-3 py-5 transition-colors hover:bg-slate-50 sm:py-6">
              <span className="mb-1 text-xl font-bold text-primary sm:text-2xl">{value}</span>
              <span className="text-center text-[10px] leading-tight text-muted-foreground sm:text-xs">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="h-5 w-5 text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

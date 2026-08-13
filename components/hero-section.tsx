'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Layers3, MapPinned, Sparkles } from 'lucide-react'
import HeroServiceCarousel from './hero-service-carousel'

const proofPoints = [
  'Cobertura en todo México',
  'Implementación y soporte',
  'Soluciones escalables',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#f8faff_0%,#eef3ff_50%,#f8fafc_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_15%,rgba(59,130,246,.16),transparent_26%),radial-gradient(circle_at_95%_10%,rgba(99,102,241,.18),transparent_28%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(rgba(37,99,235,.28)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative mx-auto grid max-w-[1480px] items-center gap-9 px-4 pb-12 pt-22 sm:gap-10 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-26 xl:grid-cols-[0.8fr_1.2fr] xl:gap-14 xl:pt-28 2xl:gap-18">
        <div className="mx-auto max-w-3xl text-center xl:mx-0 xl:max-w-2xl xl:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur-xl sm:text-xs"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Infraestructura digital para empresas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-balance text-[2.35rem] font-bold leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-[3.5rem] xl:text-[3.75rem] 2xl:text-[4.25rem]"
          >
            Conectamos tu negocio.
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Tú haces que crezca.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg xl:mx-0"
          >
            Portal cautivo, WiFi administrado, redes de datos, monitoreo y plataformas digitales para empresas que necesitan operar mejor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row xl:justify-start"
          >
            <Link
              href="/contacto"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(37,99,235,.28)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(37,99,235,.34)] sm:w-auto"
            >
              Solicitar diagnóstico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/sectores"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-xl transition hover:border-primary/35 hover:bg-white sm:w-auto"
            >
              Elegir mi sector
              <Layers3 className="h-4 w-4 text-primary" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 grid gap-3 text-left sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3"
          >
            {proofPoints.map((point, index) => (
              <div key={point} className="flex items-center justify-center gap-2 rounded-xl border border-white/70 bg-white/60 px-3 py-3 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-lg xl:justify-start 2xl:justify-center">
                {index === 0 ? <MapPinned className="h-4 w-4 shrink-0 text-primary" /> : <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />}
                <span>{point}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full min-w-0 max-w-4xl xl:mx-0 xl:max-w-none"
        >
          <HeroServiceCarousel />
        </motion.div>
      </div>
    </section>
  )
}

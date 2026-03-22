'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Wifi, Globe, Shield } from 'lucide-react'
import NetworkCanvas from './network-canvas'

const stats = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '200+', label: 'Proyectos implementados' },
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '24/7', label: 'Soporte técnico' },
]

const badges = [
  { icon: Wifi, label: 'Conectividad Empresarial' },
  { icon: Globe, label: 'Infraestructura Global' },
  { icon: Shield, label: 'Seguridad Avanzada' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated network background */}
      <div className="absolute inset-0">
        <NetworkCanvas />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.55_0.2_250/0.15),transparent)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(to_top,oklch(0.07_0.01_250),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[oklch(0.55_0.2_250/0.4)] bg-[oklch(0.55_0.2_250/0.1)] backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">
              Soluciones Empresariales de Alto Nivel
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-tight mb-6"
          >
            Soluciones en{' '}
            <span className="text-primary [text-shadow:0_0_40px_oklch(0.55_0.2_250/0.6)]">
              Telecomunicaciones
            </span>{' '}
            y Conectividad Empresarial
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Implementamos infraestructura tecnológica confiable para empresas.
            Conectividad, seguridad, domótica y comunicación unificada en un solo socio estratégico.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-[oklch(0.62_0.2_250)] active:scale-95 transition-all duration-200 shadow-[0_0_32px_oklch(0.55_0.2_250/0.45)] hover:shadow-[0_0_48px_oklch(0.55_0.2_250/0.65)] group"
            >
              Solicitar cotización
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-[oklch(0.55_0.2_250/0.08)] backdrop-blur-sm text-foreground font-semibold text-base hover:bg-[oklch(0.55_0.2_250/0.15)] hover:border-primary/50 active:scale-95 transition-all duration-200"
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.14_0.02_250/0.7)] backdrop-blur-sm border border-border/80 text-muted-foreground text-sm"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden max-w-3xl mx-auto"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-card flex flex-col items-center justify-center py-6 px-4 hover:bg-[oklch(0.14_0.02_250)] transition-colors"
            >
              <span className="text-3xl font-bold text-primary mb-1">{value}</span>
              <span className="text-xs text-muted-foreground text-center leading-tight">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          aria-hidden
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

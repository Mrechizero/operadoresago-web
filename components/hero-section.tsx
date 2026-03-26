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
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-[linear-gradient(to_top,oklch(0.07_0.01_250),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[oklch(0.55_0.2_250/0.4)] bg-[oklch(0.55_0.2_250/0.1)] backdrop-blur-sm mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[10px] sm:text-xs font-semibold tracking-widest uppercase whitespace-nowrap">
              Soluciones Empresariales de Alto Nivel
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.2] sm:leading-tight mb-4 sm:mb-6"
          >
            Soluciones en{' '}
            <span className="text-primary [text-shadow:0_0_40px_oklch(0.55_0.2_250/0.6)] whitespace-nowrap">
              Telecomunicaciones
            </span>{' '}
            y Conectividad Empresarial
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
          >
            Implementamos infraestructura tecnológica confiable para empresas.
            Conectividad, seguridad, domótica y comunicación unificada en un solo socio estratégico.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14 px-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-[oklch(0.62_0.2_250)] active:scale-95 transition-all duration-200 shadow-[0_0_32px_oklch(0.55_0.2_250/0.45)] hover:shadow-[0_0_48px_oklch(0.55_0.2_250/0.65)] group"
            >
              Solicitar cotización
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-border bg-[oklch(0.55_0.2_250/0.08)] backdrop-blur-sm text-foreground font-semibold text-sm sm:text-base hover:bg-[oklch(0.55_0.2_250/0.15)] hover:border-primary/50 active:scale-95 transition-all duration-200"
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center px-4"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[oklch(0.14_0.02_250/0.7)] backdrop-blur-sm border border-border/80 text-muted-foreground text-xs sm:text-sm"
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden max-w-3xl mx-auto"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-card flex flex-col items-center justify-center py-4 sm:py-6 px-3 sm:px-4 hover:bg-[oklch(0.14_0.02_250)] transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-bold text-primary mb-0.5 sm:mb-1">
                {value}
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          aria-hidden
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
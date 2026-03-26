'use client'

import { motion } from 'framer-motion'
import { SearchCode, Lightbulb, Rocket, LifeBuoy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: SearchCode,
    title: 'Análisis',
    description:
      'Realizamos un site survey y diagnóstico completo de tu infraestructura actual, identificando necesidades, riesgos y oportunidades de mejora tecnológica.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Diseño de solución',
    description:
      'Creamos una arquitectura personalizada, seleccionamos la tecnología más adecuada y presentamos una propuesta técnico-económica detallada y transparente.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementación',
    description:
      'Ejecutamos el proyecto con ingenieros certificados, garantizando calidad en cada etapa, mínima interrupción operativa y cumplimiento de tiempos.',
  },
  {
    number: '04',
    icon: LifeBuoy,
    title: 'Soporte continuo',
    description:
      'Brindamos mantenimiento preventivo, monitoreo proactivo y soporte técnico especializado para asegurar el máximo rendimiento a largo plazo.',
  },
]

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(to_right,transparent,oklch(0.55_0.2_250/0.3),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Metodología
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-3 sm:mb-5 px-4">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Un proceso estructuido que garantiza resultados superiores en cada proyecto,
            sin importar su escala o complejidad.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-border z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Step circle */}
                <div className="relative mb-4 sm:mb-5 lg:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-card border border-border flex items-center justify-center group hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-[10px] font-mono font-bold text-primary bg-card border border-primary/40 rounded-md px-1.5 py-0.5">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-foreground text-lg sm:text-xl mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-primary/25 bg-[oklch(0.55_0.2_250/0.07)] backdrop-blur-sm p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1 sm:mb-2">
              Comencemos con el análisis de tu empresa
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Sin costo y sin compromiso. Nuestros ingenieros evalúan tu infraestructura actual.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-[oklch(0.62_0.2_250)] active:scale-95 transition-all shadow-[0_0_24px_oklch(0.55_0.2_250/0.35)] whitespace-nowrap"
          >
            Agendar evaluación
          </a>
        </motion.div>
      </div>
    </section>
  )
}
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
    <section id="proceso" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(to_right,transparent,oklch(0.55_0.2_250/0.3),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Metodología
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-5">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Un proceso estructurado que garantiza resultados superiores en cada proyecto,
            sin importar su escala o complejidad.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-border z-0" />

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center lg:text-left lg:items-start"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center group hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-[10px] font-mono font-bold text-primary bg-card border border-primary/40 rounded-md px-1.5 py-0.5">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-foreground text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
          className="mt-16 rounded-2xl border border-primary/25 bg-[oklch(0.55_0.2_250/0.07)] backdrop-blur-sm p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
              Comencemos con el análisis de tu empresa
            </h3>
            <p className="text-muted-foreground">
              Sin costo y sin compromiso. Nuestros ingenieros evalúan tu infraestructura actual.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-[oklch(0.62_0.2_250)] active:scale-95 transition-all shadow-[0_0_24px_oklch(0.55_0.2_250/0.35)] whitespace-nowrap"
          >
            Agendar evaluación
          </a>
        </motion.div>
      </div>
    </section>
  )
}

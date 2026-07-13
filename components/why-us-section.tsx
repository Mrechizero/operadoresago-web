'use client'

import { motion } from 'framer-motion'
import { Layers3, Radar, Settings, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Layers3,
    title: 'Visión integral',
    description:
      'No vemos la red, el software y el soporte como piezas aisladas. Diseñamos soluciones que funcionan juntas dentro de la operación real.',
    stat: 'Integral',
    statLabel: 'de punta a punta',
  },
  {
    icon: Radar,
    title: 'Monitoreo proactivo',
    description:
      'Incorporamos visibilidad, alertas y seguimiento para detectar condiciones anormales antes de que se conviertan en fallas mayores.',
    stat: 'Visible',
    statLabel: 'con alertas',
  },
  {
    icon: Settings,
    title: 'Soluciones a la medida',
    description:
      'Partimos de tus procesos, prioridades y presupuesto para construir una ruta tecnológica realista y escalable.',
    stat: 'A medida',
    statLabel: 'según tu operación',
  },
  {
    icon: ShieldCheck,
    title: 'Continuidad y seguridad',
    description:
      'Consideramos acceso, respaldos, segmentación, mantenimiento y reducción de riesgos desde el diseño de cada proyecto.',
    stat: 'Seguro',
    statLabel: 'por diseño',
  },
]

export default function WhyUsSection() {
  return (
    <section id="por-que-nosotros" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,oklch(0.55_0.2_250/0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Nuestra forma de trabajar</p>
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">Un solo aliado para conectar tecnología y operación</h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Combinamos infraestructura, desarrollo y seguimiento técnico para evitar soluciones desconectadas o difíciles de mantener.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="mb-5">
                <span className="text-2xl font-bold text-primary">{reason.stat}</span>
                <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">{reason.statLabel}</span>
              </div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-bold">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

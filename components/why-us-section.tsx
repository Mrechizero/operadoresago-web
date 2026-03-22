'use client'

import { motion } from 'framer-motion'
import { Server, HeadphonesIcon, Settings, Award } from 'lucide-react'

const reasons = [
  {
    icon: Server,
    title: 'Infraestructura confiable',
    description:
      'Diseñamos e implementamos redes robustas con equipos de grado industrial y redundancia garantizada para mantener tu negocio siempre activo.',
    stat: '99.9%',
    statLabel: 'uptime',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte técnico especializado',
    description:
      'Nuestro equipo de ingenieros certificados está disponible 24/7 para resolver cualquier incidencia y minimizar el tiempo de inactividad.',
    stat: '24/7',
    statLabel: 'disponibilidad',
  },
  {
    icon: Settings,
    title: 'Soluciones a la medida',
    description:
      'Cada empresa es única. Analizamos tu operación y diseñamos una arquitectura tecnológica personalizada que se adapta a tus procesos y presupuesto.',
    stat: '100%',
    statLabel: 'personalizado',
  },
  {
    icon: Award,
    title: 'Experiencia comprobada',
    description:
      'Más de 10 años implementando proyectos de telecomunicaciones en sectores industriales, comerciales y de servicios en toda la región.',
    stat: '10+',
    statLabel: 'años en el mercado',
  },
]

export default function WhyUsSection() {
  return (
    <section id="por-que-nosotros" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,oklch(0.55_0.2_250/0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Nuestra ventaja
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-5">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Somos el socio tecnológico que tu empresa necesita para crecer sin límites de conectividad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-[0_8px_48px_oklch(0.55_0.2_250/0.1)] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,oklch(0.55_0.2_250/0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Stat */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{r.stat}</span>
                <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wider">{r.statLabel}</span>
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-bold text-foreground text-lg mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

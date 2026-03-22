'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Más de 10 años especializados en telecomunicaciones',
  'Ingenieros certificados y en constante capacitación',
  'Proyectos en sectores industrial, comercial y de servicios',
  'Compromiso con SLAs y tiempos de entrega definidos',
  'Alianzas con fabricantes líderes del sector',
  'Soluciones escalables que crecen con tu empresa',
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_50%,oklch(0.55_0.2_250/0.05),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Quiénes somos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
              Tu socio estratégico en{' '}
              <span className="text-primary">tecnología</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                <strong className="text-foreground">Operadores AGO</strong> es una empresa mexicana
                especializada en telecomunicaciones y soluciones tecnológicas para el sector empresarial.
                Nacimos con la misión de democratizar el acceso a infraestructura de clase mundial
                para empresas de todos los tamaños.
              </p>
              <p>
                Nuestro equipo de ingenieros y técnicos certificados combina experiencia de campo
                con las últimas tecnologías del mercado, garantizando proyectos entregados a tiempo,
                dentro del presupuesto y con el más alto estándar de calidad.
              </p>
              <p>
                Desde la conectividad hasta la domótica inteligente, somos el aliado tecnológico
                que transforma la infraestructura de tu empresa en una ventaja competitiva real.
              </p>
            </div>

            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-[oklch(0.62_0.2_250)] active:scale-95 transition-all shadow-[0_0_24px_oklch(0.55_0.2_250/0.3)]"
            >
              Contáctanos hoy
            </a>
          </motion.div>

          {/* Right: highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {/* Large feature card */}
            <div className="sm:col-span-2 rounded-2xl border border-primary/25 bg-[oklch(0.55_0.2_250/0.08)] p-7">
              <div className="text-5xl font-bold text-primary mb-1">200+</div>
              <div className="text-foreground font-semibold mb-2">Proyectos implementados</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empresas de manufactura, retail, salud, gobierno y servicios confían en nosotros para
                su infraestructura tecnológica crítica.
              </p>
            </div>

            {/* Highlights */}
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground leading-snug">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

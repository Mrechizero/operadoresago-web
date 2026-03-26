'use client'

import { motion } from 'framer-motion'
import {
  Radio,
  Network,
  Globe,
  Zap,
  Phone,
  Smartphone,
  Cpu,
  ShieldCheck,
  Home,
  Wrench,
  MapPin,
  ArrowRight,
} from 'lucide-react'

interface Service {
  icon: React.ElementType
  name: string
  description: string
}

interface Category {
  label: string
  color: string
  services: Service[]
}

const categories: Category[] = [
  {
    label: 'Conectividad',
    color: 'oklch(0.55 0.2 250)',
    services: [
      {
        icon: Radio,
        name: 'Radio Enlaces',
        description:
          'Conexiones inalámbricas de alta velocidad punto a punto para distancias críticas sin depender de fibra.',
      },
      {
        icon: Network,
        name: 'Lan to Lan',
        description:
          'Interconexión de redes locales entre sucursales con latencia mínima y alto desempeño.',
      },
      {
        icon: Globe,
        name: 'Internet Dedicado',
        description:
          'Ancho de banda exclusivo y garantizado 24/7, ideal para operaciones críticas de negocio.',
      },
      {
        icon: Zap,
        name: 'Internet Simétrico',
        description:
          'Velocidades idénticas de subida y bajada para videoconferencias, VPN y nube empresarial.',
      },
    ],
  },
  {
    label: 'Comunicación',
    color: 'oklch(0.65 0.18 200)',
    services: [
      {
        icon: Phone,
        name: 'PBX IP',
        description:
          'Central telefónica basada en VoIP con extensiones ilimitadas, IVR y grabación de llamadas.',
      },
      {
        icon: Smartphone,
        name: 'App Multiplataforma',
        description:
          'Comunicación unificada en iOS, Android y escritorio para equipos distribuidos y trabajo remoto.',
      },
    ],
  },
  {
    label: 'Tecnología e Integración',
    color: 'oklch(0.6 0.2 290)',
    services: [
      {
        icon: Cpu,
        name: 'Integración de sistemas',
        description:
          'Conectamos plataformas heterogéneas bajo un ecosistema unificado y escalable.',
      },
      {
        icon: ShieldCheck,
        name: 'Seguridad electrónica',
        description:
          'CCTV, control de acceso y alarmas integradas para proteger instalaciones y activos.',
      },
      {
        icon: Home,
        name: 'Domótica IoT',
        description:
          'Automatización inteligente de instalaciones: iluminación, clima, accesos y sensores en tiempo real.',
      },
    ],
  },
  {
    label: 'Soporte y Análisis',
    color: 'oklch(0.62 0.2 160)',
    services: [
      {
        icon: Wrench,
        name: 'Mantenimiento',
        description:
          'Planes preventivos y correctivos para mantener tu infraestructura al 100% de rendimiento.',
      },
      {
        icon: MapPin,
        name: 'Site Survey',
        description:
          'Análisis técnico de sitio para diseñar la solución óptima antes de cualquier implementación.',
      },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-24 lg:py-32 relative">
      {/* Section glow - versión corregida */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[clamp(250px,80%,800px)] h-px" 
        style={{
          background: 'linear-gradient(to right, transparent, oklch(0.55 0.2 250 / 0.6), transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Lo que hacemos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-3 sm:mb-5 px-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Soluciones especializadas de telecomunicaciones diseñadas para cubrir cada necesidad
            tecnológica de su empresa, desde conectividad hasta automatización.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12 sm:space-y-16">
          {categories.map((cat, ci) => (
            <div key={cat.label}>
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <div
                  className="h-px flex-1 max-w-7.5 sm:max-w-10"
                  style={{ background: cat.color }}
                />
                <span
                  className="text-[10px] sm:text-xs font-bold tracking-widest uppercase px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border"
                  style={{
                    color: cat.color,
                    borderColor: `${cat.color}44`,
                    background: `${cat.color}14`,
                  }}
                >
                  {cat.label}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: `linear-gradient(to right, ${cat.color}44, transparent)` }}
                />
              </motion.div>

              {/* Service cards - versión responsive corregida */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`
                  grid gap-4 sm:gap-5
                  ${cat.services.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : ''}
                  ${cat.services.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : ''}
                  ${cat.services.length === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : ''}
                `}
              >
                {cat.services.map((svc) => (
                  <motion.div
                    key={svc.name}
                    variants={cardVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative rounded-2xl border border-border bg-card p-5 sm:p-6 cursor-default overflow-hidden hover:border-[oklch(0.55_0.2_250/0.5)] transition-all duration-300 hover:shadow-[0_8px_40px_oklch(0.55_0.2_250/0.12)]"
                  >
                    {/* Hover glow layer */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at top left, ${cat.color}12, transparent 70%)`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${cat.color}18`,
                        border: `1px solid ${cat.color}30`,
                        boxShadow: `0 0 0 0 ${cat.color}00`,
                      }}
                    >
                      <svc.icon
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5"
                        style={{ color: cat.color }}
                      />
                    </div>

                    <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1.5 sm:mb-2 leading-tight">
                      {svc.name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Arrow */}
                    <div
                      className="mt-3 sm:mt-4 flex items-center gap-1 text-[10px] sm:text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
                      style={{ color: cat.color }}
                    >
                      Saber más <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-5 px-4">
            ¿Necesitas una solución a medida? Contáctanos y diseñamos el proyecto ideal para tu empresa.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-[oklch(0.62_0.2_250)] active:scale-95 transition-all shadow-[0_0_24px_oklch(0.55_0.2_250/0.35)] hover:shadow-[0_0_36px_oklch(0.55_0.2_250/0.55)] group"
          >
            Solicitar cotización
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
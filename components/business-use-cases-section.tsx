'use client'

import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  Building2,
  Factory,
  GraduationCap,
  Hotel,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'

interface UseCase {
  title: string
  description: string
  icon: LucideIcon
}

const useCases: UseCase[] = [
  {
    title: 'Restaurantes y cafeterías',
    description: 'WiFi para invitados, portal personalizado y una red separada para operación y punto de venta.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Hoteles y hospedaje',
    description: 'Cobertura por zonas, control de acceso y monitoreo centralizado para huéspedes y personal.',
    icon: Hotel,
  },
  {
    title: 'Comercios y plazas',
    description: 'Conectividad para visitantes, locales, cámaras, terminales y servicios digitales.',
    icon: Store,
  },
  {
    title: 'Oficinas y corporativos',
    description: 'Redes documentadas, segmentación, VPN, monitoreo y continuidad para equipos de trabajo.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Industria y almacenes',
    description: 'Infraestructura para dispositivos, sensores, operación, videovigilancia y procesos críticos.',
    icon: Factory,
  },
  {
    title: 'Escuelas y espacios públicos',
    description: 'Acceso administrado, políticas de navegación y cobertura para grandes cantidades de usuarios.',
    icon: GraduationCap,
  },
]

export default function BusinessUseCasesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-200/35 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Soluciones por industria</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Tecnología adaptada al lugar donde trabajas
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 lg:justify-self-end lg:text-right sm:text-lg">
            No instalamos lo mismo en todos lados. Diseñamos cada solución según el espacio, la cantidad de usuarios, la operación y los objetivos del negocio.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-950">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
          <Building2 className="h-4 w-4 text-primary" />
          Proyectos para una sucursal o implementaciones multisede en todo México
        </div>
      </div>
    </section>
  )
}

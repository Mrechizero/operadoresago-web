'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Building2, Sparkles } from 'lucide-react'

interface ClientItem {
  name: string
  shortName: string
  sector: string
  href: string
  gradient: string
  glow: string
}

const clients: ClientItem[] = [
  {
    name: '4JC Enterprises',
    shortName: '4J',
    sector: 'Global sourcing',
    href: 'https://4jc-enterprises.com/',
    gradient: 'from-blue-500 via-indigo-500 to-violet-500',
    glow: 'bg-blue-500/20',
  },
  {
    name: 'SUKOI',
    shortName: 'SK',
    sector: 'Gastronomía',
    href: 'https://www.sukoi.mx/',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    glow: 'bg-orange-500/20',
  },
  {
    name: 'CEAS Industrial',
    shortName: 'CI',
    sector: 'Industria y automatización',
    href: 'https://electronica-industrial.operadoresago.com/',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    glow: 'bg-cyan-500/20',
  },
  {
    name: 'ReservaBella',
    shortName: 'RB',
    sector: 'SaaS · Reservas',
    href: 'https://reservabella.com/',
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-400',
    glow: 'bg-fuchsia-500/20',
  },
  {
    name: 'Shoopper.me',
    shortName: 'SH',
    sector: 'E-commerce',
    href: 'https://shoopper.me/',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
    glow: 'bg-violet-500/20',
  },
  {
    name: 'Inside LED',
    shortName: 'IL',
    sector: 'Proyecto web',
    href: 'https://insideled.com.mx/',
    gradient: 'from-emerald-400 via-cyan-400 to-blue-500',
    glow: 'bg-emerald-500/20',
  },
  {
    name: 'Diseño y Carpintería Pachuca',
    shortName: 'DC',
    sector: 'Diseño y carpintería',
    href: 'https://disenoycarpinteriapachuca.com/',
    gradient: 'from-amber-500 via-yellow-500 to-orange-500',
    glow: 'bg-amber-500/20',
  },
]

function ClientPreview({ client, compact = false }: { client: ClientItem; compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#080719] ${compact ? 'h-24' : 'h-36'}`}>
      <div className={`absolute -right-10 -top-12 h-32 w-32 rounded-full ${client.glow} blur-3xl`} />
      <div className="flex h-7 items-center justify-between border-b border-white/[0.07] px-3">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        </div>
        <span className="h-1.5 w-12 rounded-full bg-white/10" />
      </div>

      <div className="grid h-[calc(100%-1.75rem)] grid-cols-[.85fr_1.15fr] gap-3 p-3">
        <div className="flex flex-col justify-between rounded-xl border border-white/[0.06] bg-white/[0.035] p-3">
          <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${client.gradient} text-[10px] font-black text-white shadow-lg`}>
            {client.shortName}
          </span>
          <div>
            <span className="mb-1 block h-1.5 w-10 rounded-full bg-white/15" />
            <span className="block h-1.5 w-16 rounded-full bg-white/[0.08]" />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.035] p-3">
          <div className={`absolute inset-x-3 top-3 h-12 rounded-lg bg-gradient-to-br ${client.gradient} opacity-80`} />
          <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-1.5">
            <span className="h-7 rounded-md bg-white/[0.08]" />
            <span className="h-7 rounded-md bg-white/[0.06]" />
            <span className="h-7 rounded-md bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ClientCard({ client, duplicate = false, compact = false }: { client: ClientItem; duplicate?: boolean; compact?: boolean }) {
  return (
    <a
      href={client.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate || undefined}
      className={`group/card block shrink-0 rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.08] ${compact ? 'w-[250px] sm:w-[280px]' : 'w-[280px] sm:w-[320px]'}`}
    >
      <ClientPreview client={client} compact={compact} />
      <div className="flex items-end justify-between gap-4 px-2 pb-2 pt-4">
        <div className="min-w-0">
          <p className="truncate text-base font-bold text-white">{client.name}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
            {client.sector}
          </p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/65 transition group-hover/card:border-violet-300/30 group-hover/card:bg-violet-400/15 group-hover/card:text-white">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
        </span>
      </div>
    </a>
  )
}

export default function ClientsSection({ compact = false }: { compact?: boolean }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="clientes" className={`relative overflow-hidden bg-[#070615] text-white ${compact ? 'py-12 sm:py-14 lg:py-16' : 'py-20 sm:py-24 lg:py-28'}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(59,130,246,.17),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(168,85,247,.18),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${compact ? 'mb-7 lg:mb-8' : 'mb-11 lg:mb-14'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-7 lg:grid-cols-[1fr_.65fr] lg:items-end"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-400/[0.08] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">
              <Sparkles className="h-3.5 w-3.5" />
              Trabajo que ya está en línea
            </div>
            <h2 className={`max-w-4xl font-black tracking-[-0.035em] ${compact ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'}`}>
              Empresas y proyectos que <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">confían en nuestro trabajo.</span>
            </h2>
          </div>
          <div className="lg:pb-1 lg:text-right">
            <p className="text-sm leading-7 text-white/50 sm:text-base">
              Proyectos de distintos sectores, construidos para operar, comunicar y crecer con una presencia digital profesional.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-white/35">
              <Building2 className="h-4 w-4" />
              Selecciona un proyecto para visitarlo
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        {!shouldReduceMotion && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#070615] to-transparent sm:w-28 lg:w-40" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#070615] to-transparent sm:w-28 lg:w-40" />
          </>
        )}

        {shouldReduceMotion ? (
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:px-6 lg:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {clients.map((client) => (
              <div key={client.name} className="snap-center">
                <ClientCard client={client} compact={compact} />
              </div>
            ))}
          </div>
        ) : (
          <div className="group/marquee overflow-hidden">
            <div className="flex w-max gap-4 px-2 [animation:ago-client-marquee_44s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
              {clients.map((client) => (
                <ClientCard key={`primary-${client.name}`} client={client} compact={compact} />
              ))}
              {clients.map((client) => (
                <ClientCard key={`duplicate-${client.name}`} client={client} duplicate compact={compact} />
              ))}
            </div>
          </div>
        )}
      </div>

    </section>
  )
}

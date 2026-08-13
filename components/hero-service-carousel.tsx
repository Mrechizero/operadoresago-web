'use client'

import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  AppWindow,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  LockKeyhole,
  Network,
  RadioTower,
  Router,
  ServerCog,
  ShieldCheck,
  Users,
  Wifi,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { AGO_BRAND_GLOW, AGO_BRAND_GRADIENT_MEDIUM } from '@/lib/brand'

interface ServiceSlide {
  id: string
  eyebrow: string
  title: string
  description: string
  href: string
  cta: string
  icon: LucideIcon
  visual: 'portal' | 'wifi' | 'network' | 'monitoring' | 'hardware' | 'software'
  accent: string
  glow: string
}

const slides: ServiceSlide[] = [
  {
    id: 'portal',
    eyebrow: 'Experiencia y captación',
    title: 'Portal cautivo inteligente',
    description: 'Convierte el acceso WiFi en una experiencia con tu marca, registro autorizado y comunicación directa con tus visitantes.',
    href: '/servicios/portal-cautivo',
    cta: 'Conocer portal cautivo',
    icon: RadioTower,
    visual: 'portal',
    accent: AGO_BRAND_GRADIENT_MEDIUM,
    glow: AGO_BRAND_GLOW,
  },
  {
    id: 'wifi',
    eyebrow: 'Cobertura y control',
    title: 'WiFi administrado',
    description: 'Redes inalámbricas estables, segmentadas y supervisadas para negocios, sucursales y espacios con alta demanda.',
    href: '/servicios/wifi-administrado',
    cta: 'Explorar WiFi administrado',
    icon: Wifi,
    visual: 'wifi',
    accent: AGO_BRAND_GRADIENT_MEDIUM,
    glow: AGO_BRAND_GLOW,
  },
  {
    id: 'redes',
    eyebrow: 'Infraestructura profesional',
    title: 'Redes de datos',
    description: 'Diseño, cableado, racks, switching, seguridad y documentación para una infraestructura preparada para crecer.',
    href: '/servicios/redes-datos',
    cta: 'Ver soluciones de red',
    icon: Network,
    visual: 'network',
    accent: AGO_BRAND_GRADIENT_MEDIUM,
    glow: AGO_BRAND_GLOW,
  },
  {
    id: 'monitoreo',
    eyebrow: 'Continuidad operativa',
    title: 'Monitoreo web',
    description: 'Supervisión de disponibilidad, certificados, rendimiento y respuesta para detectar incidencias antes que tus clientes.',
    href: '/servicios/monitoreo-web',
    cta: 'Conocer monitoreo web',
    icon: Activity,
    visual: 'monitoring',
    accent: AGO_BRAND_GRADIENT_MEDIUM,
    glow: AGO_BRAND_GLOW,
  },
  {
    id: 'hardware',
    eyebrow: 'Visibilidad técnica',
    title: 'Monitoreo de hardware',
    description: 'Estado de servidores, CPU, memoria, discos, temperatura y conectividad desde una vista centralizada.',
    href: '/servicios/monitoreo-hardware',
    cta: 'Ver monitoreo de hardware',
    icon: ServerCog,
    visual: 'hardware',
    accent: AGO_BRAND_GRADIENT_MEDIUM,
    glow: AGO_BRAND_GLOW,
  },
  {
    id: 'software',
    eyebrow: 'Software y automatización',
    title: 'Plataformas a la medida',
    description: 'Diseñamos sitios, aplicaciones y sistemas que convierten procesos manuales en experiencias digitales claras y medibles.',
    href: '/servicios/desarrollo',
    cta: 'Explorar desarrollo',
    icon: AppWindow,
    visual: 'software',
    accent: AGO_BRAND_GRADIENT_MEDIUM,
    glow: AGO_BRAND_GLOW,
  },
]

function PortalVisual() {
  return (
    <div className="relative flex h-full items-center justify-center px-4 py-6 sm:px-8 sm:py-8">
      <div className="absolute left-5 top-9 hidden w-40 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl sm:block">
        <div className="mb-3 flex items-center gap-2 text-xs text-white/70">
          <Users className="h-4 w-4 text-blue-300" />
          Nuevos registros
        </div>
        <p className="text-3xl font-bold text-white">+128</p>
        <div className="mt-3 flex h-10 items-end gap-1">
          {[35, 55, 44, 74, 62, 88, 76].map((height, index) => (
            <span key={index} className="flex-1 rounded-t bg-blue-300/70" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-[190px] sm:w-[235px] rounded-[2.4rem] border-[6px] border-slate-950 bg-slate-950 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.55)]">
        <div className="overflow-hidden rounded-[1.9rem] bg-white">
          <div className="h-28 bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-500 p-5 text-white">
            <div className="flex items-center justify-between">
              <Wifi className="h-6 w-6" />
              <span className="rounded-full bg-white/15 px-2 py-1 text-[9px] uppercase tracking-wider">WiFi Guest</span>
            </div>
            <p className="mt-6 text-lg font-bold">Bienvenido</p>
            <p className="text-[10px] text-white/75">Conéctate y disfruta tu visita</p>
          </div>
          <div className="space-y-3 p-5">
            <div className="h-10 rounded-xl border border-slate-200 bg-slate-50" />
            <div className="h-10 rounded-xl border border-slate-200 bg-slate-50" />
            <div className="flex h-10 items-center justify-center rounded-xl bg-slate-950 text-xs font-semibold text-white">
              Acceder a internet
            </div>
            <div className="flex items-center justify-center gap-2 text-[9px] text-slate-400">
              <LockKeyhole className="h-3 w-3" /> Acceso protegido
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-4 hidden w-40 sm:bottom-12 sm:right-7 sm:block sm:w-44 rounded-2xl border border-blue-300/20 bg-slate-950/75 p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2 text-xs text-white/70">
          <CheckCircle2 className="h-4 w-4 text-blue-300" />
          Acceso autorizado
        </div>
        <p className="mt-2 text-xs text-white/50">Portal personalizado activo</p>
      </div>
    </div>
  )
}

function WifiVisual() {
  return (
    <div className="flex h-full items-center justify-center p-5 sm:p-8">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/15">
              <Wifi className="h-5 w-5 text-blue-300" />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Red empresarial</p>
              <p className="text-[10px] text-white/45">Administración centralizada</p>
            </div>
          </div>
          <span className="rounded-full bg-indigo-400/15 px-3 py-1 text-[10px] font-semibold text-blue-300">Operativa</span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3 sm:gap-3 sm:p-5">
          {[
            ['4', 'Sucursales'],
            ['128', 'Usuarios'],
            ['99.9%', 'Disponibilidad'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-2.5 sm:rounded-2xl sm:p-4">
              <p className="text-base font-bold text-white sm:text-2xl">{value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/45">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 px-3 pb-3 sm:grid-cols-[1.35fr_.65fr] sm:px-5 sm:pb-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 sm:rounded-2xl sm:p-4">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-medium text-white/70">Tráfico de red</p>
              <BarChart3 className="h-4 w-4 text-blue-300" />
            </div>
            <div className="flex h-24 items-end gap-2">
              {[44, 68, 52, 82, 64, 92, 74, 88].map((height, index) => (
                <span key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-violet-300" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {['Lobby', 'Terraza', 'Oficinas'].map((zone, index) => (
              <div key={zone} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-300" />
                  <span className="text-[11px] text-white/70">{zone}</span>
                </div>
                <span className="text-[10px] text-white/35">AP {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function NetworkVisual() {
  const nodes = [
    { label: 'Internet', icon: Globe2, className: 'left-1/2 top-5 -translate-x-1/2' },
    { label: 'Firewall', icon: ShieldCheck, className: 'left-1/2 top-[30%] -translate-x-1/2' },
    { label: 'Switch', icon: Router, className: 'left-1/2 top-[55%] -translate-x-1/2' },
    { label: 'WiFi', icon: Wifi, className: 'bottom-28 left-[3%] sm:bottom-24 sm:left-[14%]' },
    { label: 'Servidores', icon: ServerCog, className: 'bottom-28 left-1/2 -translate-x-1/2 sm:bottom-24' },
    { label: 'Usuarios', icon: Users, className: 'bottom-28 right-[3%] sm:bottom-24 sm:right-[12%]' },
  ]

  return (
    <div className="relative h-full min-h-[330px] overflow-hidden p-3 sm:min-h-[430px] sm:p-6">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 430" aria-hidden="true">
        <defs>
          <linearGradient id="network-line" x1="0" x2="1">
            <stop offset="0" stopColor="rgba(59,130,246,.15)" />
            <stop offset=".5" stopColor="rgba(139,92,246,.9)" />
            <stop offset="1" stopColor="rgba(59,130,246,.15)" />
          </linearGradient>
        </defs>
        <path d="M300 75 L300 145 L300 235" stroke="url(#network-line)" strokeWidth="3" fill="none" />
        <path d="M300 235 C300 300 110 285 110 355" stroke="url(#network-line)" strokeWidth="3" fill="none" />
        <path d="M300 235 L300 355" stroke="url(#network-line)" strokeWidth="3" fill="none" />
        <path d="M300 235 C300 300 490 285 490 355" stroke="url(#network-line)" strokeWidth="3" fill="none" />
        {[75, 145, 235, 355].map((y, index) => (
          <circle key={y} cx="300" cy={y} r="5" fill={index % 2 ? '#38bdf8' : '#6ee7b7'} />
        ))}
      </svg>

      {nodes.map(({ label, icon: Icon, className }) => (
        <div key={label} className={`absolute ${className}`}>
          <div className="flex min-w-[4.5rem] flex-col items-center rounded-xl sm:min-w-24 sm:rounded-2xl border border-white/10 bg-slate-950/75 px-2.5 py-2.5 shadow-xl sm:px-4 sm:py-3 backdrop-blur-xl">
            <Icon className="mb-1.5 h-5 w-5 text-blue-300" />
            <span className="text-[10px] font-medium text-white/70">{label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function MonitoringVisual() {
  return (
    <div className="flex h-full items-center justify-center p-5 sm:p-8">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950/75 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">Estado de servicios</p>
            <p className="text-[10px] text-white/45">Actualización en tiempo real</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-400/15 px-3 py-1.5 text-[10px] font-semibold text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-300" /> Todos operativos
          </span>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            ['99.98%', 'Uptime'],
            ['184 ms', 'Respuesta'],
            ['12', 'Servicios'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="text-xl font-bold text-white">{value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">{label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs text-white/65">Disponibilidad — últimas 24 h</p>
            <Activity className="h-4 w-4 text-blue-300" />
          </div>
          <svg viewBox="0 0 520 130" className="h-32 w-full" aria-hidden="true">
            <defs>
              <linearGradient id="monitor-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgba(52,211,153,.45)" />
                <stop offset="1" stopColor="rgba(52,211,153,0)" />
              </linearGradient>
            </defs>
            <path d="M0 92 C40 82,55 84,84 62 C112 40,130 72,160 57 C196 39,215 49,244 36 C279 20,310 58,342 42 C376 25,400 48,430 31 C462 12,486 26,520 18 L520 130 L0 130 Z" fill="url(#monitor-area)" />
            <path d="M0 92 C40 82,55 84,84 62 C112 40,130 72,160 57 C196 39,215 49,244 36 C279 20,310 58,342 42 C376 25,400 48,430 31 C462 12,486 26,520 18" fill="none" stroke="#6ee7b7" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function HardwareVisual() {
  return (
    <div className="flex h-full items-center justify-center p-5 sm:p-8">
      <div className="grid w-full max-w-xl gap-3 sm:grid-cols-[.8fr_1.2fr]">
        <div className="hidden space-y-3 sm:block">
          {[
            ['CPU', '36%', 36],
            ['RAM', '58%', 58],
            ['Disco', '71%', 71],
          ].map(([label, value, progress]) => (
            <div key={label as string} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="text-white/55">{label}</span>
                <span className="font-semibold text-white">{value}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-400 to-violet-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Servidor principal</p>
              <p className="text-[10px] text-white/40">Salud del equipo</p>
            </div>
            <span className="rounded-full bg-indigo-400/15 px-3 py-1 text-[10px] text-blue-300">Estable</span>
          </div>
          <div className="relative mx-auto mb-5 flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full border-[9px] sm:border-[12px] border-white/10">
            <div className="absolute inset-[-9px] rounded-full border-[9px] sm:inset-[-12px] sm:border-[12px] border-transparent border-r-violet-400 border-t-blue-300" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">92</p>
              <p className="text-[9px] uppercase tracking-wider text-white/40">Salud</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white/[0.05] p-3 text-center">
              <p className="text-sm font-semibold text-white">42 °C</p>
              <p className="text-[9px] text-white/40">Temperatura</p>
            </div>
            <div className="rounded-xl bg-white/[0.05] p-3 text-center">
              <p className="text-sm font-semibold text-white">18 d</p>
              <p className="text-[9px] text-white/40">Actividad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SoftwareVisual() {
  const projects = [
    {
      name: 'ReservaBella',
      label: 'SaaS · Reservas',
      short: 'RB',
      gradient: 'from-blue-500 via-indigo-500 to-violet-500',
      className: 'left-[2%] top-[9%] z-20 w-[76%] sm:left-[4%] sm:top-[8%] sm:w-[72%]',
      delay: 0,
    },
    {
      name: 'Shoopper.me',
      label: 'E-commerce',
      short: 'SH',
      gradient: 'from-blue-500 via-indigo-500 to-violet-500',
      className: 'right-[1%] top-[33%] z-30 w-[68%] sm:right-[2%] sm:top-[31%] sm:w-[64%]',
      delay: 0.35,
    },
    {
      name: 'Ago WiFi',
      label: 'Conectividad',
      short: 'WF',
      gradient: 'from-blue-500 via-indigo-500 to-violet-500',
      className: 'bottom-[10%] left-[8%] z-40 w-[72%] sm:bottom-[8%] sm:left-[12%] sm:w-[68%]',
      delay: 0.7,
    },
  ]

  return (
    <div className="relative h-full min-h-[330px] overflow-hidden px-3 py-5 sm:min-h-[440px] sm:px-6 sm:py-7">
      <div className="absolute left-[8%] top-[8%] h-44 w-44 rounded-full bg-violet-500/15 blur-3xl sm:h-60 sm:w-60" />
      <div className="absolute bottom-[6%] right-[4%] h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl sm:h-64 sm:w-64" />

      <div className="absolute left-3 top-4 z-50 hidden flex-col gap-2 sm:flex">
        {['WEB', 'SAAS', 'UX', 'DATA'].map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: [0.28, 0.85, 0.28], x: 0 }}
            transition={{ duration: 3.4, delay: index * 0.32, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[9px] font-semibold tracking-[0.26em] text-white/45"
          >
            {item}
          </motion.span>
        ))}
      </div>

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 3, 0, -2, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-[12%] rounded-[2rem] border border-violet-300/10 bg-violet-500/[0.045]"
      />

      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 24, rotate: index === 1 ? 2 : -1 }}
          animate={{
            opacity: 1,
            y: [0, index % 2 ? -8 : 7, 0],
            rotate: index === 1 ? [1.2, 0.2, 1.2] : [-0.8, 0.2, -0.8],
          }}
          transition={{
            opacity: { duration: 0.5, delay: project.delay },
            y: { duration: 6 + index, repeat: Infinity, ease: 'easeInOut', delay: project.delay },
            rotate: { duration: 7 + index, repeat: Infinity, ease: 'easeInOut', delay: project.delay },
          }}
          className={`absolute ${project.className}`}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090719]/95 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:rounded-[1.6rem]">
            <div className="flex h-7 items-center justify-between border-b border-white/[0.07] px-3 sm:h-8 sm:px-4">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              </div>
              <span className="h-1.5 w-12 rounded-full bg-white/10 sm:w-16" />
            </div>

            <div className="grid grid-cols-[.82fr_1.18fr] gap-2 p-2.5 sm:gap-3 sm:p-4">
              <div className="flex min-h-20 flex-col justify-between rounded-xl border border-white/[0.06] bg-white/[0.035] p-2.5 sm:min-h-24 sm:p-3">
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${project.gradient} text-[9px] font-black text-white shadow-lg sm:h-8 sm:w-8`}>
                  {project.short}
                </span>
                <div>
                  <p className="text-[10px] font-bold text-white sm:text-xs">{project.name}</p>
                  <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-white/35 sm:text-[8px]">{project.label}</p>
                </div>
              </div>

              <div className="relative min-h-20 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.035] p-2.5 sm:min-h-24 sm:p-3">
                <div className={`h-8 rounded-lg bg-gradient-to-r ${project.gradient} opacity-85 sm:h-10`} />
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  <span className="h-4 rounded bg-white/[0.08] sm:h-5" />
                  <span className="h-4 rounded bg-white/[0.055] sm:h-5" />
                  <span className="h-4 rounded bg-white/[0.035] sm:h-5" />
                </div>
                <div className="mt-2 flex gap-1">
                  <span className="h-1 flex-1 rounded-full bg-white/10" />
                  <span className={`h-1 w-8 rounded-full bg-gradient-to-r ${project.gradient}`} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        animate={{ opacity: [0.32, 0.8, 0.32], x: [0, 8, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-5 right-5 z-50 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/45 backdrop-blur-xl sm:bottom-7 sm:right-7 sm:px-4 sm:text-[9px]"
      >
        Diseño · Desarrollo · Operación
      </motion.div>
    </div>
  )
}

function ServiceVisual({ type }: { type: ServiceSlide['visual'] }) {
  switch (type) {
    case 'portal':
      return <PortalVisual />
    case 'wifi':
      return <WifiVisual />
    case 'network':
      return <NetworkVisual />
    case 'monitoring':
      return <MonitoringVisual />
    case 'hardware':
      return <HardwareVisual />
    case 'software':
      return <SoftwareVisual />
  }
}

export default function HeroServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const activeSlide = slides[activeIndex]
  const ActiveIcon = activeSlide.icon

  useEffect(() => {
    if (paused || shouldReduceMotion) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 5600)

    return () => window.clearInterval(timer)
  }, [paused, shouldReduceMotion])

  const nextSlide = () => setActiveIndex((current) => (current + 1) % slides.length)
  const previousSlide = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)

  const visibleTabs = useMemo(() => slides.map(({ id, title, icon }) => ({ id, title, icon })), [])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false)
      }}
    >
      <div className="relative min-h-[380px] overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950 shadow-[0_30px_100px_rgba(15,23,42,0.36)] sm:min-h-[460px] sm:rounded-[2rem] md:min-h-[500px] xl:h-[clamp(430px,calc(100svh-10rem),520px)] xl:min-h-0 2xl:h-[clamp(460px,calc(100svh-10rem),540px)]">
        <div className={`absolute -right-16 -top-16 h-64 w-64 rounded-full ${activeSlide.glow} blur-3xl transition-colors duration-700`} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide.id}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 42, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -42, scale: 0.98 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            aria-live="polite"
          >
            <ServiceVisual type={activeSlide.visual} />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div className="max-w-md">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                <ActiveIcon className="h-4 w-4 text-white/80" />
                {activeSlide.eyebrow}
              </div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">{activeSlide.title}</h2>
              <p className="mt-2 hidden max-w-lg text-xs leading-5 text-white/55 md:block">
                {activeSlide.description}
              </p>
              <Link
                href={activeSlide.href}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 sm:hidden"
              >
                Ver solución
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <Link
              href={activeSlide.href}
              className="hidden shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xl transition hover:bg-white/20 sm:inline-flex"
            >
              {activeSlide.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={previousSlide}
          className="absolute left-3 top-[42%] sm:top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/50 text-white/75 backdrop-blur-xl transition hover:bg-slate-950/80 hover:text-white sm:left-5"
          aria-label="Mostrar servicio anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-[42%] sm:top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/50 text-white/75 backdrop-blur-xl transition hover:bg-slate-950/80 hover:text-white sm:right-5"
          aria-label="Mostrar siguiente servicio"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:grid-cols-6 xl:mt-3">
        {visibleTabs.map(({ id, title, icon: Icon }, index) => {
          const isActive = activeIndex === index

          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative min-w-0 overflow-hidden rounded-xl border px-2 py-2.5 text-center transition sm:rounded-2xl sm:px-3 sm:py-3 xl:py-2.5 ${
                isActive
                  ? 'border-primary/40 bg-primary/10 text-primary shadow-sm'
                  : 'border-slate-200 bg-white/75 text-slate-500 hover:border-primary/25 hover:text-slate-800'
              }`}
              aria-label={`Mostrar ${title}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <Icon className="mx-auto mb-1.5 h-4 w-4" />
              <span className="block truncate text-[9px] font-semibold sm:text-[10px]">{title}</span>
              {isActive && !shouldReduceMotion && (
                <motion.span
                  layoutId="hero-carousel-progress"
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${activeSlide.accent}`}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Blocks, Eye, Handshake, Search, ShieldCheck, Wrench } from 'lucide-react'

const stages = [
  {
    id: 'diagnostico',
    label: 'Diagnóstico',
    icon: Search,
    title: 'Primero entendemos la operación.',
    description: 'Revisamos contexto, infraestructura, usuarios, puntos críticos y objetivos antes de proponer equipos o plataformas.',
    proof: 'Menos compras por intuición y un alcance técnico más claro.',
  },
  {
    id: 'diseno',
    label: 'Diseño',
    icon: Blocks,
    title: 'La solución se diseña como un sistema.',
    description: 'Conectamos red, software, seguridad y monitoreo para evitar piezas aisladas que después sean difíciles de administrar.',
    proof: 'Arquitectura pensada para crecer por usuarios, áreas o sucursales.',
  },
  {
    id: 'implementacion',
    label: 'Implementación',
    icon: Wrench,
    title: 'Implementamos por etapas comprobables.',
    description: 'Configuramos, probamos y documentamos cada fase para reducir interrupciones y mantener visibilidad sobre lo que cambia.',
    proof: 'Pruebas, documentación y entregables que pueden mantenerse.',
  },
  {
    id: 'seguimiento',
    label: 'Seguimiento',
    icon: Eye,
    title: 'La operación continúa después de la entrega.',
    description: 'Cuando el proyecto lo requiere, incorporamos monitoreo, soporte y evolución para detectar incidencias y planear mejoras.',
    proof: 'Más contexto para decidir cuándo ajustar, ampliar o renovar.',
  },
]

const principles = [
  { icon: Handshake, label: 'Cercanía', text: 'Alcance y prioridades explicados con claridad.' },
  { icon: ShieldCheck, label: 'Responsabilidad', text: 'Continuidad, seguridad y mantenimiento desde el diseño.' },
]

export default function AboutModel() {
  const [activeId, setActiveId] = useState(stages[0].id)
  const active = stages.find((stage) => stage.id === activeId) ?? stages[0]

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_28px_80px_rgba(15,23,42,.14)]">
      <div className="flex gap-2 overflow-x-auto border-b border-white/10 p-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => setActiveId(stage.id)}
            aria-pressed={active.id === stage.id}
            className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
              active.id === stage.id ? 'bg-white text-slate-950' : 'text-slate-400 hover:bg-white/[0.06] hover:text-white'
            }`}
          >
            <span className="text-[9px] font-black opacity-50">{String(index + 1).padStart(2, '0')}</span>
            {stage.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          aria-live="polite"
          className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_.72fr]"
        >
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
              <active.icon className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">{active.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{active.description}</p>
            <div className="mt-5 rounded-xl border border-emerald-300/15 bg-emerald-400/10 px-4 py-3 text-xs font-bold leading-6 text-emerald-300">{active.proof}</div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {principles.map((principle) => (
              <div key={principle.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <principle.icon className="h-5 w-5 text-blue-300" />
                <h3 className="mt-3 text-sm font-black text-white">{principle.label}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">{principle.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

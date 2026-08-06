'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Map, PanelsTopLeft, Sparkles } from 'lucide-react'

const BASE_VISITS = 999
const WEEKLY_INCREMENT = 20
const START_DATE_UTC = Date.UTC(2026, 6, 20)
const WEEK_MS = 7 * 24 * 60 * 60 * 1000

type VisitMetricsResponse = {
  totalVisits: number
  weeklyIncrement: number
}

function getLocalFallbackVisits(now = Date.now()) {
  const elapsedWeeks = Math.max(
    0,
    Math.floor((now - START_DATE_UTC) / WEEK_MS),
  )

  return BASE_VISITS + elapsedWeeks * WEEKLY_INCREMENT
}

function animateNumber(
  from: number,
  to: number,
  update: (value: number) => void,
  duration = 900,
): () => void {
  const startedAt = performance.now()
  let animationFrame = 0

  const animate = (now: number) => {
    const progress = Math.min(1, (now - startedAt) / duration)
    const eased = 1 - Math.pow(1 - progress, 3)
    update(Math.round(from + (to - from) * eased))

    if (progress < 1) animationFrame = requestAnimationFrame(animate)
  }

  animationFrame = requestAnimationFrame(animate)
  return () => cancelAnimationFrame(animationFrame)
}

function isValidMetrics(value: unknown): value is VisitMetricsResponse {
  if (!value || typeof value !== 'object') return false

  const metrics = value as Partial<VisitMetricsResponse>
  return (
    typeof metrics.totalVisits === 'number' &&
    Number.isFinite(metrics.totalVisits) &&
    typeof metrics.weeklyIncrement === 'number' &&
    Number.isFinite(metrics.weeklyIncrement)
  )
}

export default function ImpactStrip() {
  const [visits, setVisits] = useState(BASE_VISITS)

  useEffect(() => {
    const controller = new AbortController()
    let stopAnimation: () => void = () => {}

    async function loadVisitCounter() {
      try {
        const response = await fetch('/api/impact-metrics', {
          method: 'POST',
          cache: 'no-store',
          credentials: 'same-origin',
          signal: controller.signal,
        })

        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const data: unknown = await response.json()
        if (!isValidMetrics(data)) throw new Error('Respuesta inválida')

        stopAnimation = animateNumber(
          Math.max(BASE_VISITS, data.totalVisits - 80),
          data.totalVisits,
          setVisits,
        )
      } catch (error) {
        if ((error as Error).name === 'AbortError') return

        const fallback = getLocalFallbackVisits()
        stopAnimation = animateNumber(
          Math.max(BASE_VISITS, fallback - 80),
          fallback,
          setVisits,
        )
        console.error('No fue posible cargar el contador:', error)
      }
    }

    void loadVisitCounter()

    return () => {
      controller.abort()
      stopAnimation()
    }
  }, [])

  const formattedVisits = useMemo(
    () => new Intl.NumberFormat('es-MX').format(visits),
    [visits],
  )

  const metrics = [
    {
      icon: Activity,
      value: `${formattedVisits}+`,
      label: 'Visitas al sitio',
      note: null,
    },
    {
      icon: Map,
      value: 'México',
      label: 'Cobertura nacional',
      note: 'Proyectos remotos y despliegues en sitio',
    },
    {
      icon: PanelsTopLeft,
      value: '5',
      label: 'Plataformas y proyectos',
      note: 'ReservaBella, Shoopper.me, Ago WiFi, Ago Games y CEAS',
    },
    {
      icon: Sparkles,
      value: '3',
      label: 'Soluciones prioritarias',
      note: 'WiFi, portal cautivo y redes de datos',
    },
  ]

  return (
    <section aria-label="Indicadores de Operadores AGO" className="relative z-20 -mt-8 pb-14 sm:-mt-10 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-border bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
              className="group relative overflow-hidden p-5 sm:p-6 lg:border-r lg:last:border-r-0"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <metric.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="relative text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">{metric.label}</div>
              {metric.note ? (
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{metric.note}</p>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Activity, ArrowLeft, Zap } from 'lucide-react'

export const energiaDisclaimer =
  'Energia es una aplicación independiente desarrollada por AGO TECH. No está afiliada, patrocinada ni representa oficialmente a la Comisión Federal de Electricidad (CFE).'

export function EnergiaMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 ${compact ? 'h-9 w-9' : 'h-11 w-11'}`}>
        <Zap className={compact ? 'h-4 w-4' : 'h-5 w-5'} fill="currentColor" />
      </span>
      <span className={`${compact ? 'text-base' : 'text-xl'} font-black tracking-[-0.04em] text-slate-950`}>Energia</span>
    </span>
  )
}

export function EnergiaDisclaimer() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
      <strong>Importante:</strong> {energiaDisclaimer}
    </div>
  )
}

export function EnergiaLegalHeader({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(59,130,246,.12),transparent_30%),radial-gradient(circle_at_88%_0%,rgba(139,92,246,.1),transparent_28%)]" />
      <div className="relative mx-auto max-w-4xl">
        <Link href="/energia" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-indigo-700">
          <ArrowLeft className="h-4 w-4" /> Volver a Energia
        </Link>
        <div className="mb-5 flex items-center gap-3"><EnergiaMark compact /><span className="text-slate-300">/</span><span className="text-sm font-semibold text-slate-500">{label}</span></div>
        <h1 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
      </div>
    </section>
  )
}

export function EnergiaSupportCard() {
  return (
    <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-6 sm:p-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm"><Activity className="h-5 w-5" /></div>
      <h2 className="mt-5 text-xl font-black tracking-[-0.03em] text-slate-950">¿Necesitas ayuda?</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">Escríbenos si no puedes acceder a tu cuenta o tienes dudas sobre tus datos.</p>
      <a href="mailto:contacto@operadoresago.com" className="mt-5 inline-flex rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">contacto@operadoresago.com</a>
    </div>
  )
}

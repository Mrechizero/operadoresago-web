import Link from 'next/link'
import { ArrowRight, Layers3, Network } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[78vh] items-center bg-slate-50 px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_28px_80px_rgba(15,23,42,.16)] sm:p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-300">404 · Ruta no encontrada</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">No necesitas volver al inicio para encontrar una solución.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">Continúa por el contexto que te resulte más útil: sector, catálogo técnico o diagnóstico directo.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Link href="/sectores" className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:bg-white/[0.08]"><Layers3 className="h-5 w-5 text-blue-300" /><h2 className="mt-4 font-black">Explorar sectores</h2><span className="mt-2 inline-flex items-center gap-1 text-xs text-blue-300">Elegir contexto <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span></Link>
            <Link href="/servicios" className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:bg-white/[0.08]"><Network className="h-5 w-5 text-blue-300" /><h2 className="mt-4 font-black">Ver servicios</h2><span className="mt-2 inline-flex items-center gap-1 text-xs text-blue-300">Abrir catálogo <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span></Link>
            <Link href="/contacto" className="group rounded-2xl border border-blue-300/20 bg-blue-400/10 p-5 transition hover:bg-blue-400/15"><ArrowRight className="h-5 w-5 text-blue-300" /><h2 className="mt-4 font-black">Solicitar diagnóstico</h2><span className="mt-2 inline-flex items-center gap-1 text-xs text-blue-300">Contarnos tu caso <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span></Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

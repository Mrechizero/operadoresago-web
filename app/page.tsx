import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ImpactStrip from '@/components/impact-strip'
import SectorSelector from '@/components/sector-selector'
import ClientsSection from '@/components/clients-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImpactStrip />
      <SectorSelector />
      <ClientsSection compact />

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-4 w-4" /> Diagnóstico antes de venderte equipo
            </div>
            <h2 className="max-w-3xl text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl lg:text-4xl">¿Tu negocio no encaja exactamente en un sector?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">Cuéntanos qué quieres conectar, mejorar o automatizar. Partimos de la operación actual y construimos una ruta clara.</p>
          </div>
          <Link href="/contacto" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5">
            Solicitar diagnóstico
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Layers3 } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AboutModel from '@/components/about-model'

export const metadata: Metadata = {
  title: 'Nosotros | Operadores AGO',
  description:
    'Conoce el enfoque de Operadores AGO para diagnosticar, diseñar, implementar y acompañar soluciones tecnológicas para empresas en México.',
}

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-18">
        <section className="relative overflow-hidden bg-white px-4 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(59,130,246,.12),transparent_28%),radial-gradient(circle_at_85%_5%,rgba(139,92,246,.10),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary">Sobre Operadores AGO</div>
              <h1 className="mt-5 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">Tecnología conectada con la <span className="text-primary">realidad de tu negocio.</span></h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Integramos infraestructura, conectividad, software y monitoreo alrededor de una misma pregunta: ¿qué necesita la operación para funcionar mejor y crecer sin empezar desde cero?</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/sectores" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"><Layers3 className="h-4 w-4" /> Ver enfoque por sector</Link>
                <Link href="/contacto" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-primary/30 hover:text-primary">Hablemos <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>

            <AboutModel />
          </div>
        </section>

        <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 sm:p-7">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Misión</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950">Convertir tecnología en capacidad operativa.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Diseñamos soluciones confiables, comprensibles y escalables que conecten personas, equipos y procesos con menos complejidad innecesaria.</p>
            </div>
            <div className="rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-6 sm:p-7">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Visión</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-slate-950">Ser un aliado tecnológico que pueda evolucionar contigo.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Buscamos que cada arquitectura pueda incorporar nuevas sedes, usuarios, plataformas y necesidades sin reconstruir todo desde cero.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

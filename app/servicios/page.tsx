import Link from 'next/link'
import { ArrowRight, Layers3, Network } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ServiceExplorer from '@/components/service-explorer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Servicios tecnológicos | Operadores AGO',
  description: 'Explora portal cautivo, WiFi administrado, redes de datos, conectividad, VPN, desarrollo y monitoreo según el sector y problema que necesitas resolver.',
  path: '/servicios',
})
export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main id="contenido-principal" tabIndex={-1} className="min-h-screen bg-slate-50 pt-18">
        <section className="relative overflow-hidden bg-white px-4 pb-10 pt-12 text-center sm:px-6 sm:pb-12 sm:pt-16 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(59,130,246,.12),transparent_28%),radial-gradient(circle_at_85%_5%,rgba(139,92,246,.10),transparent_28%)]" />
          <div className="relative mx-auto max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
              <Network className="h-4 w-4" /> Catálogo guiado
            </div>
            <h1 className="text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">No recorras todo el catálogo. <span className="text-primary">Empieza por tu problema.</span></h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">Elige tu sector y la necesidad más cercana a tu operación. Te mostramos primero las soluciones que tienen sentido en ese contexto.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/sectores" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5"><Layers3 className="h-4 w-4" /> Ver sectores</Link>
              <Link href="/contacto" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-primary/30 hover:text-primary">Solicitar diagnóstico <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        <ServiceExplorer />

        <section className="bg-white px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-7 text-center sm:p-9 lg:flex-row lg:text-left">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">¿No encuentras exactamente lo que buscas?</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">Podemos combinar infraestructura, software y monitoreo en una sola ruta.</h2>
            </div>
            <Link href="/contacto?service=Otro%20servicio" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">Cuéntanos tu caso <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

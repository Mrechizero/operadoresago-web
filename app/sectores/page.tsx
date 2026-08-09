import Link from 'next/link'
import { ArrowRight, Layers3 } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SectorSelector from '@/components/sector-selector'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Soluciones por sector | Operadores AGO',
  description: 'Tecnología, conectividad, WiFi, redes, monitoreo y software organizados por tipo de negocio y operación.',
  path: '/sectores',
})
export default function SectoresPage() {
  return (
    <>
      <Navbar />
      <main id="contenido-principal" tabIndex={-1} className="min-h-screen bg-slate-50 pt-18">
        <section className="relative overflow-hidden bg-white px-4 pb-8 pt-12 text-center sm:px-6 sm:pb-10 sm:pt-16 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,.12),transparent_28%),radial-gradient(circle_at_90%_5%,rgba(139,92,246,.12),transparent_28%)]" />
          <div className="relative mx-auto max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">
              <Layers3 className="h-4 w-4" /> Soluciones por sector
            </div>
            <h1 className="text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">Empieza por tu operación, no por una lista de productos.</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">Selecciona el contexto más cercano a tu negocio y entra a una ruta de problemas, soluciones y servicios técnicos relacionados.</p>
          </div>
        </section>

        <SectorSelector showIntro={false} showAllLink={false} />

        <section className="bg-white px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-7 text-center sm:p-9 lg:flex-row lg:text-left">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Otro tipo de operación</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950 sm:text-3xl">Si tu negocio no aparece aquí, partimos de tu necesidad y construimos el contexto.</h2>
            </div>
            <Link href="/contacto?service=Otro%20servicio" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5">Contarnos el caso <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

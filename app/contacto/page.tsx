import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Contacto | Operadores AGO',
  description: 'Solicita un diagnóstico para conectividad, WiFi, redes de datos, desarrollo, VPN y monitoreo tecnológico en México.',
  path: '/contacto',
})
export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="contenido-principal" tabIndex={-1} className="min-h-screen bg-slate-50 pt-18">
        <section className="relative overflow-hidden bg-white px-4 pb-8 pt-12 text-center sm:px-6 sm:pb-10 sm:pt-16 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(59,130,246,.12),transparent_28%),radial-gradient(circle_at_85%_5%,rgba(139,92,246,.10),transparent_28%)]" />
          <div className="relative mx-auto max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary">Diagnóstico y contacto</div>
            <h1 className="mt-5 text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">Cuéntanos qué necesitas <span className="text-primary">resolver.</span></h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">Si llegaste desde un sector, problema o servicio específico, el formulario conservará ese contexto para que podamos responder con mayor precisión.</p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

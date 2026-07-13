import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Contacto | Operadores AGO',
  description:
    'Solicita información o una propuesta para conectividad, desarrollo, monitoreo, cloud, seguridad, WiFi e infraestructura tecnológica.',
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="mx-auto max-w-7xl px-4 pb-6 pt-16 sm:px-6 sm:pt-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              Contacto
            </div>
            <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
              Conversemos sobre el siguiente paso de <span className="text-primary">tu proyecto</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
              Cuéntanos qué quieres implementar, mejorar o supervisar. Revisaremos el contexto para orientarte hacia una solución realista.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

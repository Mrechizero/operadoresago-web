import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ContactSection from '@/components/contact-section'

export default function ContactoPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium">
              Contacto
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight">
              Solicita tu
              <span className="text-primary"> cotización</span>
            </h1>

            <p className="mt-8 text-xl text-muted-foreground">
              Cuéntanos sobre tu proyecto. Nuestro equipo analizará tus
              requerimientos y te contactará en menos de 24 horas para
              ayudarte a encontrar la mejor solución.
            </p>

          </div>

        </section>

        {/* Métricas rápidas */}
        <section className="max-w-7xl mx-auto px-6 pb-10">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-3xl p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary">
                &lt; 24 hrs
              </div>

              <div className="mt-2 text-muted-foreground">
                Tiempo promedio de respuesta
              </div>
            </div>

            <div className="border rounded-3xl p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary">
                Nacional
              </div>

              <div className="mt-2 text-muted-foreground">
                Cobertura en todo México
              </div>
            </div>

            <div className="border rounded-3xl p-6 bg-card text-center">
              <div className="text-3xl font-bold text-primary">
                Empresarial
              </div>

              <div className="mt-2 text-muted-foreground">
                Atención especializada
              </div>
            </div>

          </div>

        </section>

        {/* Formulario existente */}
        <ContactSection />

      </main>

      <Footer />
    </>
  )
}
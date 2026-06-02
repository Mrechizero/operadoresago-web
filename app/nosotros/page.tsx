import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function NosotrosPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium">
              Sobre Operadores AGO
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight">
              Tecnología que conecta
              <span className="text-primary"> negocios.</span>
            </h1>

            <p className="mt-8 text-xl text-muted-foreground">
              Diseñamos, implementamos y administramos soluciones de
              conectividad, telecomunicaciones, seguridad y transformación
              digital para empresas de todos los tamaños.
            </p>

          </div>
        </section>

        {/* Misión */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 rounded-3xl border bg-card">
              <h2 className="text-3xl font-bold mb-4">
                Nuestra Misión
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Proporcionar soluciones tecnológicas confiables,
                escalables y seguras que permitan a nuestros clientes
                optimizar sus procesos, mejorar su comunicación y
                fortalecer su infraestructura digital.
              </p>
            </div>

            <div className="p-8 rounded-3xl border bg-card">
              <h2 className="text-3xl font-bold mb-4">
                Nuestra Visión
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Ser el socio tecnológico de referencia en México para
                empresas que buscan innovación, conectividad y
                transformación digital.
              </p>
            </div>

          </div>
        </section>

        {/* Valores */}
        <section className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Nuestros Valores
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-3xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Confianza
              </h3>
              <p className="text-muted-foreground">
                Relaciones duraderas basadas en resultados.
              </p>
            </div>

            <div className="border rounded-3xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Innovación
              </h3>
              <p className="text-muted-foreground">
                Tecnologías modernas para cada necesidad.
              </p>
            </div>

            <div className="border rounded-3xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Seguridad
              </h3>
              <p className="text-muted-foreground">
                Protección y continuidad operativa.
              </p>
            </div>

            <div className="border rounded-3xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Servicio
              </h3>
              <p className="text-muted-foreground">
                Atención cercana y soporte especializado.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}
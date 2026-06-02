import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function InternetPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-4 pb-10">

          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium">
              Conectividad
            </div>

            <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight">
              Soluciones de
              <span className="text-primary"> Internet</span>
            </h1>

            <p className="mt-8 text-xl text-muted-foreground">
              Conectividad confiable para hogares, comercios,
              empresas y corporativos con soluciones diseñadas
              para cada necesidad.
            </p>

          </div>

        </section>

        {/* Servicios */}
        <section className="max-w-7xl mx-auto px-6 pb-16">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Empresarial */}
            <div className="rounded-3xl border border-border bg-card p-10">

              <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Empresas y Corporativos
              </div>

              <h2 className="text-4xl font-bold mt-6 mb-4">
                Internet Empresarial
              </h2>

              <p className="text-muted-foreground mb-8">
                Soluciones de conectividad de alta disponibilidad para
                empresas que requieren estabilidad, rendimiento y soporte especializado.
              </p>

              <div className="space-y-4">

                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold">Internet Dedicado</h3>
                  <p className="text-sm text-muted-foreground">
                    Ancho de banda exclusivo para aplicaciones críticas.
                  </p>
                </div>

                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold">Internet Simétrico</h3>
                  <p className="text-sm text-muted-foreground">
                    Misma velocidad de subida y bajada.
                  </p>
                </div>

                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold">Radio Enlaces</h3>
                  <p className="text-sm text-muted-foreground">
                    Conectividad inalámbrica de alta capacidad.
                  </p>
                </div>

                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold">LAN to LAN</h3>
                  <p className="text-sm text-muted-foreground">
                    Interconexión segura entre sucursales.
                  </p>
                </div>

                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold">VPN Empresarial</h3>
                  <p className="text-sm text-muted-foreground">
                    Acceso remoto seguro para colaboradores y sedes.
                  </p>
                </div>

                <div className="border rounded-xl p-4">
                  <h3 className="font-semibold">WiFi Empresarial</h3>
                  <p className="text-sm text-muted-foreground">
                    Cobertura profesional para oficinas y corporativos.
                  </p>
                </div>

              </div>

              <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  Los servicios empresariales se cotizan de forma personalizada
                  de acuerdo con cobertura, factibilidad técnica, ancho de banda,
                  SLA y requerimientos del proyecto.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex mt-8 text-primary font-semibold hover:underline"
              >
                Solicitar evaluación →
              </Link>

            </div>

            {/* Residencial */}
            <div className="rounded-3xl border border-border bg-card p-10">

              <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Hogar
              </div>

              <h2 className="text-4xl font-bold mt-6 mb-4">
                Internet Residencial
              </h2>

              <p className="text-muted-foreground mb-8">
                Planes accesibles para hogares que necesitan estabilidad
                para navegación, streaming, videollamadas y entretenimiento.
              </p>

              <div className="space-y-5">

                {/* Plan Básico */}
                <div className="border rounded-2xl p-6">
                  <h3 className="text-2xl font-bold">
                    Plan Básico
                  </h3>

                  <p className="text-4xl font-bold text-primary mt-3">
                    $220
                    <span className="text-lg text-muted-foreground font-normal">
                      /mes
                    </span>
                  </p>

                  <p className="mt-3 text-muted-foreground">
                    20 Mbps - Ilimitado
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>✓ Navegación web</li>
                    <li>✓ Redes sociales</li>
                    <li>✓ Clases en línea</li>
                  </ul>
                </div>

                {/* Plan Familiar */}
                <div className="border-2 border-primary rounded-2xl p-6 relative shadow-lg">

                  <span className="absolute -top-3 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </span>

                  <h3 className="text-2xl font-bold">
                    Plan Familiar
                  </h3>

                  <p className="text-4xl font-bold text-primary mt-3">
                    $299
                    <span className="text-lg text-muted-foreground font-normal">
                      /mes
                    </span>
                  </p>

                  <p className="mt-3 text-muted-foreground">
                    40 Mbps - Ilimitado
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>✓ Streaming HD</li>
                    <li>✓ Videollamadas</li>
                    <li>✓ Múltiples dispositivos</li>
                  </ul>
                </div>

                {/* Plan Premium */}
                <div className="border rounded-2xl p-6">
                  <h3 className="text-2xl font-bold">
                    Plan Premium
                  </h3>

                  <p className="text-4xl font-bold text-primary mt-3">
                    $699
                    <span className="text-lg text-muted-foreground font-normal">
                      /mes
                    </span>
                  </p>

                  <p className="mt-3 text-muted-foreground">
                    100 Mbps - Ilimitado
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>✓ Streaming 4K</li>
                    <li>✓ Home Office</li>
                    <li>✓ Gaming</li>
                    <li>✓ Hogares conectados</li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Información importante */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">

            <h3 className="text-2xl font-bold mb-4">
              Información importante
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">

              <div>
                ✓ Los precios mostrados corresponden a renta mensual.
              </div>

              <div>
                ✓ La instalación tiene un costo adicional.
              </div>

              <div>
                ✓ Cobertura sujeta a validación técnica.
              </div>

              <div>
                ✓ Aplican restricciones según zona geográfica.
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="rounded-3xl bg-primary text-white p-12 text-center">

            <h2 className="text-4xl font-bold mb-4">
              ¿Necesitas conectividad confiable?
            </h2>

            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Nuestro equipo puede ayudarte a elegir la mejor solución
              para tu hogar, negocio o empresa.
            </p>

            <Link
              href="/contacto"
              className="inline-block mt-8 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Solicitar cotización
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  )
}
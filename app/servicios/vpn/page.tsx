import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import {
  Shield,
  Network,
  Globe,
  Lock,
  CheckCircle,
} from 'lucide-react'

export default function VPNPage() {
  const plans = [
    {
      name: 'VPN Starter',
      price: '$499',
      features: [
        '1 Router MikroTik incluido',
        '1 túnel VPN',
        'Usuarios ilimitados',
        'Acceso remoto seguro',
      ],
    },
    {
      name: 'VPN Business',
      price: '$899',
      popular: true,
      features: [
        '2 sucursales conectadas',
        'VPN Site-to-Site',
        'Monitoreo básico',
        'Soporte empresarial',
      ],
    },
    {
      name: 'VPN Corporate',
      price: '$1499',
      features: [
        'Hasta 5 sedes',
        'WireGuard o IPSec',
        'Monitoreo avanzado',
        'Alta disponibilidad',
      ],
    },
  ]

  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-8 pb-10 text-center">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium">
            VPN Empresarial
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            Conecta tus oficinas
            <br />
            <span className="text-primary">
              de forma segura.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
            Implementamos soluciones VPN seguras para conectar
            sucursales, usuarios remotos y aplicaciones críticas
            mediante tecnologías WireGuard, IPSec y MikroTik.
          </p>

        </section>

        {/* BENEFICIOS */}
        <section className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 border rounded-2xl bg-card">
              <Shield className="mb-4 text-primary" />

              <h3 className="font-semibold mb-2">
                Seguridad
              </h3>

              <p className="text-sm text-muted-foreground">
                Tráfico cifrado de extremo a extremo.
              </p>
            </div>

            <div className="p-6 border rounded-2xl bg-card">
              <Network className="mb-4 text-primary" />

              <h3 className="font-semibold mb-2">
                Sucursales
              </h3>

              <p className="text-sm text-muted-foreground">
                Conecta oficinas como si estuvieran en la misma red.
              </p>
            </div>

            <div className="p-6 border rounded-2xl bg-card">
              <Globe className="mb-4 text-primary" />

              <h3 className="font-semibold mb-2">
                Acceso Remoto
              </h3>

              <p className="text-sm text-muted-foreground">
                Trabaja desde cualquier lugar de forma segura.
              </p>
            </div>

            <div className="p-6 border rounded-2xl bg-card">
              <Lock className="mb-4 text-primary" />

              <h3 className="font-semibold mb-2">
                Protección
              </h3>

              <p className="text-sm text-muted-foreground">
                Evita exponer servicios críticos a Internet.
              </p>
            </div>

          </div>

        </section>

        {/* PLANES */}
        <section className="max-w-7xl mx-auto px-6 py-12">

          <div className="text-center mb-12">

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium mb-4">
              Planes VPN
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Elige la solución ideal
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-8 bg-card transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-primary shadow-lg'
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-4 text-5xl font-bold">
                  {plan.price}

                  <span className="text-lg text-muted-foreground font-normal">
                    /mes
                  </span>
                </div>

                <div className="mt-8 space-y-4">

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />

                      <span className="text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>

                <Link
                  href="/contacto"
                  className="mt-8 block w-full py-3 rounded-xl bg-primary text-white text-center font-medium hover:opacity-90 transition"
                >
                  Solicitar información
                </Link>

              </div>
            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="rounded-3xl bg-primary text-white p-10 text-center">

            <h2 className="text-4xl font-bold mb-4">
              ¿Necesitas conectar varias sedes?
            </h2>

            <p className="max-w-3xl mx-auto text-lg opacity-90">
              Diseñamos soluciones VPN empresariales para
              oficinas, sucursales, teletrabajo y acceso seguro
              a recursos corporativos.
            </p>

            <Link
              href="/contacto"
              className="inline-block mt-8 px-8 py-4 rounded-xl bg-white text-primary font-semibold hover:scale-105 transition"
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
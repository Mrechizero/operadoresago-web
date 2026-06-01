   import Navbar from '@/components/navbar'
   import Footer from '@/components/footer'
   import { Shield, Network, Globe, Lock, CheckCircle } from 'lucide-react'

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
    <main className="pt-24">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-primary font-medium">
          VPN Empresarial
        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight">
          Conecta tus oficinas
          <br />
          <span className="text-primary">de forma segura.</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-xl text-muted-foreground">
          Implementamos soluciones VPN seguras para conectar
          sucursales, usuarios remotos y aplicaciones críticas
          mediante tecnologías WireGuard, IPSec y MikroTik.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="p-6 border rounded-2xl">
            <Shield className="mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Seguridad</h3>
            <p className="text-sm text-muted-foreground">
              Tráfico cifrado de extremo a extremo.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <Network className="mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Sucursales</h3>
            <p className="text-sm text-muted-foreground">
              Conecta oficinas como si estuvieran en la misma red.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <Globe className="mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Acceso Remoto</h3>
            <p className="text-sm text-muted-foreground">
              Trabaja desde cualquier lugar.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <Lock className="mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Protección</h3>
            <p className="text-sm text-muted-foreground">
              Evita exponer servicios críticos a Internet.
            </p>
          </div>

        </div>
      </section>

      {/* PLANES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Planes VPN
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.popular
                  ? 'border-primary shadow-lg'
                  : ''
              }`}
            >
              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-4 text-5xl font-bold">
                {plan.price}
                <span className="text-lg text-muted-foreground">
                  /mes
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full py-3 rounded-xl bg-primary text-white font-medium">
                Solicitar información
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
} 
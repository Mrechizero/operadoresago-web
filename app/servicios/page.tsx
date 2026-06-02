import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const services = [
  {
    title: 'VPN Empresarial',
    description: 'Conecta sucursales y usuarios remotos mediante túneles seguros.',
    href: '/servicios/vpn',
  },
 {
  title: 'Internet',
  description: 'Conectividad para empresas, corporativos y Residenciales.',
  href: '/servicios/internet',
},
  {
    title: 'PBX IP',
    description: 'Telefonía empresarial moderna y escalable.',
    href: '#',
  },
  {
    title: 'Call Center',
    description: 'Soluciones para atención y seguimiento de clientes.',
    href: '#',
  },
  {
    title: 'Hosting',
    description: 'Hospedaje web, correo empresarial y VPS.',
    href: '#',
  },
  {
    title: 'Desarrollo Web',
    description: 'Sitios web, sistemas empresariales e integraciones.',
    href: '#',
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              Nuestros Servicios
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones tecnológicas diseñadas para empresas,
              comercios y organizaciones que necesitan
              conectividad, comunicación y seguridad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group"
              >
                <div className="h-full rounded-3xl border border-border bg-card p-8 hover:shadow-xl transition-all duration-300">

                  <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6 text-primary font-medium">
                    Ver más →
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const serviceCategories = [
  {
    title: 'Conectividad',
    services: [
      {
        title: 'Internet',
        description:
          'Conectividad para empresas, corporativos y residenciales.',
        href: '/servicios/internet',
      },
      {
        title: 'VPN Empresarial',
        description:
          'Conecta sucursales y usuarios remotos mediante túneles seguros.',
        href: '/servicios/vpn',
      },
      {
        title: 'Radio Enlaces',
        description:
          'Conectividad inalámbrica de alta capacidad para sitios remotos.',
        href: '/contacto',
      },
      {
        title: 'LAN to LAN',
        description:
          'Interconexión segura y privada entre sucursales.',
        href: '/contacto',
      },
    ],
  },

  {
    title: 'Comunicaciones',
    services: [
      {
        title: 'PBX IP',
        description:
          'Telefonía empresarial moderna y escalable.',
        href: '/contacto',
      },
      {
        title: 'Call Center',
        description:
          'Plataformas omnicanal para atención y ventas.',
        href: '/contacto',
      },
      {
        title: 'SMS Masivos',
        description:
          'Campañas, notificaciones y alertas empresariales.',
        href: '/contacto',
      },
    ],
  },

  {
    title: 'Cloud y Desarrollo',
    services: [
      {
        title: 'Hosting',
        description:
          'Hospedaje web profesional y correo empresarial.',
        href: '/contacto',
      },
      {
        title: 'Cloud VPS',
        description:
          'Servidores virtuales para aplicaciones críticas.',
        href: '/contacto',
      },
      {
        title: 'Desarrollo Web',
        description:
          'Sitios corporativos, sistemas empresariales y e-commerce.',
        href: '/contacto',
      },
    ],
  },

  {
    title: 'Seguridad',
    services: [
      {
        title: 'Videovigilancia',
        description:
          'Monitoreo inteligente para hogares y empresas.',
        href: '/contacto',
      },
      {
        title: 'Control de Acceso',
        description:
          'Control de personal, visitantes y activos.',
        href: '/contacto',
      },
      {
        title: 'Ciberseguridad',
        description:
          'Firewalls, monitoreo y protección empresarial.',
        href: '/contacto',
      },
    ],
  },

  {
    title: 'WiFi Inteligente',
    services: [
      {
        title: 'Portal Cautivo',
        description:
          'WiFi para hoteles, restaurantes y comercios.',
        href: '/contacto',
      },
      {
        title: 'WiFi Empresarial',
        description:
          'Cobertura profesional para oficinas y corporativos.',
        href: '/contacto',
      },
      {
        title: 'Analítica de Visitantes',
        description:
          'Estadísticas, marketing y captación de clientes.',
        href: '/contacto',
      },
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">

        <section className="max-w-7xl mx-auto px-6 py-12">

          <div className="text-center mb-12">

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium mb-6">
              Catálogo de Servicios
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Soluciones Tecnológicas
            </h1>

            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Infraestructura, conectividad, comunicaciones,
              seguridad y desarrollo tecnológico para empresas,
              comercios y organizaciones.
            </p>

          </div>

          {serviceCategories.map((category) => (
            <section key={category.title} className="mb-14">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-primary" />

                <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold uppercase tracking-wider">
                  {category.title}
                </span>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                {category.services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group"
                  >
                    <div
                      className="
                        h-full
                        rounded-3xl
                        border
                        border-border
                        bg-card
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary/30
                        hover:shadow-xl
                      "
                    >
                      <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>

                      <p className="text-muted-foreground text-sm leading-relaxed">
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
          ))}

        </section>

      </main>

      <Footer />
    </>
  )
}
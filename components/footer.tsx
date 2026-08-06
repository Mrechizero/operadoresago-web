import Link from 'next/link'
import { EarthLockIcon, ExternalLink, MessageCircle } from 'lucide-react'
import { platforms } from '@/lib/site-data'

const serviceLinks = [
  { label: 'Portal cautivo', href: '/servicios/portal-cautivo' },
  { label: 'WiFi administrado', href: '/servicios/wifi-administrado' },
  { label: 'Redes de datos', href: '/servicios/redes-datos' },
  { label: 'Desarrollo de software', href: '/servicios/desarrollo' },
  { label: 'Catálogo completo', href: '/servicios' },
]

const companyLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Plataformas', href: '/#plataformas' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

const whatsappUrl =
  'https://wa.me/527713189879?text=Hola%2C%20vengo%20de%20la%20web%20de%20Operadores%20AGO%20y%20me%20gustar%C3%ADa%20conocer%20sus%20servicios.'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 lg:px-8">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-md">
                <EarthLockIcon className="h-4.5 w-4.5 text-primary-foreground" />
              </span>
              <span className="font-bold text-foreground">
                Operadores <span className="text-primary">AGO</span>
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Portal cautivo, WiFi administrado, redes de datos y desarrollo tecnológico para empresas en todo México.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">Servicios</h4>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">Plataformas</h4>
            <ul className="space-y-3">
              {platforms.map((platform) => (
                <li key={platform.href}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {platform.name} <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">Operadores AGO</h4>
            <ul className="mb-6 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} Operadores AGO. Todos los derechos reservados.</p>
          <a href="mailto:admin@operadoresago.com" className="transition-colors hover:text-primary">
            Privacidad y términos: admin@operadoresago.com
          </a>
        </div>
      </div>
    </footer>
  )
}

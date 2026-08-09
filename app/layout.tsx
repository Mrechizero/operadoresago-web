import type { Metadata, Viewport } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/whatsapp-button'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://web.operadoresago.com'

export const metadata: Metadata = {
  title: {
    default: 'Operadores AGO | Portal cautivo, WiFi administrado y redes de datos',
    template: '%s',
  },
  description:
    'Portal cautivo, WiFi administrado, diseño e implementación de redes de datos, desarrollo de software y monitoreo para empresas en todo México.',
  keywords: [
    'portal cautivo México',
    'WiFi administrado',
    'redes de datos empresariales',
    'diseño de redes',
    'cableado estructurado',
    'telecomunicaciones',
    'desarrollo de software',
    'monitoreo web',
    'monitoreo de hardware',
    'internet empresarial',
    'VPN empresarial',
    'ciberseguridad',
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Operadores AGO | Portal cautivo, WiFi administrado y redes de datos',
    description: 'Conectividad que funciona, experiencias que atraen clientes y tecnología que crece contigo.',
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'Operadores AGO',
    images: [{ url: '/social-image.avif', width: 1200, height: 630, alt: 'Operadores AGO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operadores AGO | Portal cautivo, WiFi administrado y redes de datos',
    description: 'Soluciones de conectividad e infraestructura para empresas en todo México.',
    images: ['/social-image.avif'],
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'Operadores AGO',
  url: SITE_URL,
  email: 'contacto@operadoresago.com',
  areaServed: {
    '@type': 'Country',
    name: 'México',
  },
  description:
    'Portal cautivo, WiFi administrado, redes de datos, desarrollo de software y monitoreo para empresas.',
  knowsAbout: [
    'Portal cautivo',
    'WiFi administrado',
    'Redes de datos',
    'Cableado estructurado',
    'Desarrollo de software',
    'Monitoreo tecnológico',
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

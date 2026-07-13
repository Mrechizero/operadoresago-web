import type { Metadata, Viewport } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/whatsapp-button'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://web.operadoresago.com'

export const metadata: Metadata = {
  title: {
    default: 'Operadores AGO | Infraestructura, software y monitoreo',
    template: '%s',
  },
  description:
    'Soluciones de conectividad, infraestructura, desarrollo web y multiplataforma, cloud, monitoreo, ciberseguridad y WiFi administrado para empresas.',
  keywords: [
    'telecomunicaciones',
    'desarrollo de software',
    'monitoreo web',
    'monitoreo de hardware',
    'internet empresarial',
    'VPN empresarial',
    'WiFi administrado',
    'ciberseguridad',
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Operadores AGO | Infraestructura, software y monitoreo',
    description: 'Tecnología que conecta, automatiza y hace crecer tu negocio.',
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'Operadores AGO',
    images: [{ url: '/social-image.avif', width: 1200, height: 630, alt: 'Operadores AGO' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operadores AGO | Infraestructura, software y monitoreo',
    description: 'Tecnología que conecta, automatiza y hace crecer tu negocio.',
    images: ['/social-image.avif'],
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

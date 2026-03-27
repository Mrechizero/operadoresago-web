import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import WhatsAppButton from '@/components/whatsapp-button'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

// URL base - toma del entorno o usa el dominio real
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://web.operadoresago.com'

export const metadata: Metadata = {
  title: 'Operadores AGO | Telecomunicaciones y Soluciones Tecnológicas',
  description:
    'Implementamos infraestructura tecnológica confiable para empresas. Radio enlaces, internet dedicado, PBX IP, seguridad electrónica, domótica IoT y más.',
  keywords: [
    'telecomunicaciones',
    'internet dedicado',
    'radio enlace',
    'PBX IP',
    'seguridad electrónica',
    'domótica',
    'conectividad empresarial',
  ],
  metadataBase: new URL(SITE_URL), // ← Esto resuelve URLs relativas
  openGraph: {
    title: 'Operadores AGO | Telecomunicaciones y Soluciones Tecnológicas',
    description:
      'Implementamos infraestructura tecnológica confiable para empresas.',
    type: 'website',
    locale: 'es_MX',
    url: SITE_URL,
    siteName: 'Operadores AGO',
    images: [
      {
        url: '/social-image.avif',  // ← URL relativa, se resolverá con metadataBase
        width: 1200,
        height: 630,
        alt: 'Operadores AGO - Telecomunicaciones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operadores AGO | Telecomunicaciones y Soluciones Tecnológicas',
    description: 'Implementamos infraestructura tecnológica confiable para empresas.',
    images: ['/social-image.avif'],  // ← URL relativa
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  )
}
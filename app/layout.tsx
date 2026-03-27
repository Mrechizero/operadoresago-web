import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import WhatsAppButton from '@/components/whatsapp-button'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

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
  openGraph: {
    title: 'Operadores AGO | Telecomunicaciones y Soluciones Tecnológicas',
    description:
      'Implementamos infraestructura tecnológica confiable para empresas.',
    type: 'website',
    locale: 'es_MX',
    url: 'https://web.operadoresago.com',
    siteName: 'Operadores AGO',
    images: [
      {
        url: 'public/social-image.png',
        width: 1200,
        height: 630,
        alt: 'Operadores AGO - Telecomunicaciones',
      },
    ],
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
        {/* ✅ Agregamos el botón de WhatsApp aquí */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
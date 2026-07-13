import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://web.operadoresago.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/servicios',
    '/servicios/internet',
    '/servicios/vpn',
    '/servicios/desarrollo',
    '/servicios/monitoreo-web',
    '/servicios/monitoreo-hardware',
    '/nosotros',
    '/contacto',
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/servicios' ? 0.9 : 0.7,
  }))
}

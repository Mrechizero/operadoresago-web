import type { MetadataRoute } from 'next'
import { sectors } from '@/lib/sectors-data'
import { SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/sectores',
    ...sectors.map((sector) => `/sectores/${sector.slug}`),
    '/servicios',
    '/servicios/portal-cautivo',
    '/servicios/wifi-administrado',
    '/servicios/redes-datos',
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
    priority: route === '' ? 1 : route === '/sectores' || route === '/servicios' ? 0.9 : route.startsWith('/sectores/') ? 0.8 : 0.7,
  }))
}

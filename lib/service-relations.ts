export const contactServiceValues = [
  'Portal cautivo',
  'WiFi administrado',
  'Diseño e implementación de redes',
  'Internet empresarial',
  'VPN empresarial',
  'Desarrollo web o aplicación',
  'Monitoreo web',
  'Monitoreo de hardware',
  'Otro servicio',
] as const

export type ContactServiceValue = (typeof contactServiceValues)[number]

export interface ServiceGuideItem {
  href: string
  title: string
  shortTitle: string
  category: string
  description: string
  contactValue: ContactServiceValue
}

export const serviceCatalog: ServiceGuideItem[] = [
  {
    href: '/servicios/portal-cautivo',
    title: 'Portal cautivo',
    shortTitle: 'Portal cautivo',
    category: 'Experiencia WiFi',
    description: 'Acceso WiFi con identidad de marca, registro autorizado y una experiencia controlada para visitantes.',
    contactValue: 'Portal cautivo',
  },
  {
    href: '/servicios/wifi-administrado',
    title: 'WiFi administrado',
    shortTitle: 'WiFi administrado',
    category: 'Conectividad',
    description: 'Cobertura, segmentación, administración centralizada y soporte para redes inalámbricas empresariales.',
    contactValue: 'WiFi administrado',
  },
  {
    href: '/servicios/redes-datos',
    title: 'Diseño e implementación de redes',
    shortTitle: 'Redes de datos',
    category: 'Infraestructura',
    description: 'Cableado, switching, WiFi, segmentación, racks, pruebas y documentación de la red empresarial.',
    contactValue: 'Diseño e implementación de redes',
  },
  {
    href: '/servicios/internet',
    title: 'Internet empresarial',
    shortTitle: 'Internet empresarial',
    category: 'Conectividad',
    description: 'Enlaces y alternativas de conectividad dimensionadas según cobertura, capacidad y continuidad requerida.',
    contactValue: 'Internet empresarial',
  },
  {
    href: '/servicios/vpn',
    title: 'VPN empresarial',
    shortTitle: 'VPN empresarial',
    category: 'Interconexión',
    description: 'Conexión segura entre sucursales, usuarios remotos y servicios internos sin exponer recursos críticos.',
    contactValue: 'VPN empresarial',
  },
  {
    href: '/servicios/desarrollo',
    title: 'Desarrollo web y aplicaciones',
    shortTitle: 'Desarrollo a la medida',
    category: 'Software',
    description: 'Sitios, sistemas, e-commerce, aplicaciones, automatizaciones e integraciones construidas alrededor de la operación.',
    contactValue: 'Desarrollo web o aplicación',
  },
  {
    href: '/servicios/monitoreo-web',
    title: 'Monitoreo web',
    shortTitle: 'Monitoreo web',
    category: 'Continuidad',
    description: 'Disponibilidad, tiempos de respuesta, certificados, dominio y alertas para servicios digitales.',
    contactValue: 'Monitoreo web',
  },
  {
    href: '/servicios/monitoreo-hardware',
    title: 'Monitoreo de hardware',
    shortTitle: 'Monitoreo de hardware',
    category: 'Continuidad',
    description: 'Visibilidad de servidores, routers, switches, recursos, conectividad y condiciones de infraestructura.',
    contactValue: 'Monitoreo de hardware',
  },
]

export function getServiceGuide(href: string) {
  return serviceCatalog.find((service) => service.href === href)
}

export function getContactServiceFromHref(href: string): ContactServiceValue {
  return getServiceGuide(href)?.contactValue ?? 'Otro servicio'
}

export function isContactServiceValue(value: string): value is ContactServiceValue {
  return (contactServiceValues as readonly string[]).includes(value)
}

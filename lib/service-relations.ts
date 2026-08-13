export const contactServiceValues = [
  'Portal cautivo',
  'WiFi administrado',
  'Diseño e implementación de redes',
  'Internet empresarial',
  'Internet residencial',
  'VPN empresarial',
  'Radio enlaces y LAN to LAN',
  'PBX IP',
  'Call Center',
  'SMS y notificaciones',
  'Desarrollo web o aplicación',
  'Cloud VPS y hosting',
  'Correo corporativo',
  'Monitoreo web',
  'Monitoreo de hardware',
  'Respaldos y recuperación',
  'Ciberseguridad',
  'Videovigilancia',
  'Control de acceso',
  'Domótica e IoT',
  'Otro servicio',
] as const

export type ContactServiceValue = (typeof contactServiceValues)[number]

export type ServiceGroupId =
  | 'wifi-redes'
  | 'conectividad'
  | 'comunicaciones'
  | 'software-cloud'
  | 'continuidad-seguridad'

export interface ServiceGroup {
  id: ServiceGroupId
  title: string
  shortTitle: string
  description: string
}

export interface ServiceGuideItem {
  href: string
  title: string
  shortTitle: string
  category: string
  group: ServiceGroupId
  description: string
  contactValue: ContactServiceValue
  sectorSlugs?: string[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'wifi-redes',
    title: 'WiFi y redes',
    shortTitle: 'WiFi y redes',
    description: 'Acceso, cobertura e infraestructura para conectar usuarios, equipos y visitantes.',
  },
  {
    id: 'conectividad',
    title: 'Conectividad',
    shortTitle: 'Conectividad',
    description: 'Internet, interconexión y enlaces dimensionados según la operación y la cobertura disponible.',
  },
  {
    id: 'comunicaciones',
    title: 'Comunicaciones',
    shortTitle: 'Comunicaciones',
    description: 'Telefonía, atención y canales empresariales para coordinar equipos y clientes.',
  },
  {
    id: 'software-cloud',
    title: 'Software y cloud',
    shortTitle: 'Software y cloud',
    description: 'Aplicaciones, hosting y servicios digitales administrados alrededor de la operación.',
  },
  {
    id: 'continuidad-seguridad',
    title: 'Continuidad y seguridad',
    shortTitle: 'Continuidad y seguridad',
    description: 'Monitoreo, respaldos y controles para reducir exposición y mejorar la continuidad operativa.',
  },
]

export const serviceCatalog: ServiceGuideItem[] = [
  {
    href: '/servicios/portal-cautivo',
    title: 'Portal cautivo',
    shortTitle: 'Portal cautivo',
    category: 'Experiencia WiFi',
    group: 'wifi-redes',
    description: 'Acceso WiFi con identidad de marca, registro autorizado y una experiencia controlada para visitantes.',
    contactValue: 'Portal cautivo',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'educacion'],
  },
  {
    href: '/servicios/wifi-administrado',
    title: 'WiFi administrado',
    shortTitle: 'WiFi administrado',
    category: 'Conectividad',
    group: 'wifi-redes',
    description: 'Cobertura, segmentación, administración centralizada y soporte para redes inalámbricas empresariales.',
    contactValue: 'WiFi administrado',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/redes-datos',
    title: 'Diseño e implementación de redes',
    shortTitle: 'Redes de datos',
    category: 'Infraestructura',
    group: 'wifi-redes',
    description: 'Cableado, switching, WiFi, segmentación, racks, pruebas y documentación de la red empresarial.',
    contactValue: 'Diseño e implementación de redes',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/internet-empresarial',
    title: 'Internet empresarial',
    shortTitle: 'Internet empresarial',
    category: 'Solución a la medida',
    group: 'conectividad',
    description: 'Enlaces empresariales dimensionados según ubicación, capacidad, criticidad, continuidad y factibilidad técnica.',
    contactValue: 'Internet empresarial',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/internet-residencial',
    title: 'Internet residencial',
    shortTitle: 'Internet residencial',
    category: 'Hogar',
    group: 'conectividad',
    description: 'Planes residenciales con navegación ilimitada y opciones de velocidad para distintos perfiles de uso en el hogar.',
    contactValue: 'Internet residencial',
  },
  {
    href: '/servicios/vpn',
    title: 'VPN empresarial',
    shortTitle: 'VPN empresarial',
    category: 'Interconexión',
    group: 'conectividad',
    description: 'Conexión segura entre sucursales, usuarios remotos y servicios internos sin exponer recursos críticos.',
    contactValue: 'VPN empresarial',
    sectorSlugs: ['comercio', 'oficinas', 'industria', 'multisucursal'],
  },
  {
    href: '/servicios/radio-enlaces',
    title: 'Radio enlaces y LAN to LAN',
    shortTitle: 'Radio enlaces',
    category: 'Interconexión',
    group: 'conectividad',
    description: 'Interconexión entre ubicaciones cuando la fibra no es viable o se requiere una ruta privada entre puntos.',
    contactValue: 'Radio enlaces y LAN to LAN',
    sectorSlugs: ['oficinas', 'industria', 'multisucursal'],
  },
  {
    href: '/servicios/pbx-ip',
    title: 'PBX IP',
    shortTitle: 'PBX IP',
    category: 'Telefonía empresarial',
    group: 'comunicaciones',
    description: 'Telefonía IP con extensiones, IVR, administración y funciones de atención para equipos empresariales.',
    contactValue: 'PBX IP',
    sectorSlugs: ['hoteles', 'comercio', 'oficinas', 'multisucursal'],
  },
  {
    href: '/servicios/call-center',
    title: 'Call Center',
    shortTitle: 'Call Center',
    category: 'Atención',
    group: 'comunicaciones',
    description: 'Soluciones para organizar atención, ventas, seguimiento y control de llamadas dentro de una operación centralizada.',
    contactValue: 'Call Center',
    sectorSlugs: ['comercio', 'oficinas', 'multisucursal'],
  },
  {
    href: '/servicios/sms-notificaciones',
    title: 'SMS y notificaciones',
    shortTitle: 'SMS y notificaciones',
    category: 'Mensajería',
    group: 'comunicaciones',
    description: 'Canales de mensajería para campañas, alertas operativas y comunicación automatizada con clientes o equipos.',
    contactValue: 'SMS y notificaciones',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'oficinas', 'multisucursal'],
  },
  {
    href: '/servicios/desarrollo',
    title: 'Desarrollo web y aplicaciones',
    shortTitle: 'Desarrollo a la medida',
    category: 'Software',
    group: 'software-cloud',
    description: 'Sitios, sistemas, e-commerce, aplicaciones, automatizaciones e integraciones construidas alrededor de la operación.',
    contactValue: 'Desarrollo web o aplicación',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/cloud-hosting',
    title: 'Cloud VPS y hosting',
    shortTitle: 'Cloud y hosting',
    category: 'Infraestructura digital',
    group: 'software-cloud',
    description: 'Infraestructura administrada para alojar sitios, aplicaciones y servicios digitales con una operación definida.',
    contactValue: 'Cloud VPS y hosting',
    sectorSlugs: ['comercio', 'oficinas', 'industria', 'multisucursal'],
  },
  {
    href: '/servicios/correo-corporativo',
    title: 'Correo corporativo',
    shortTitle: 'Correo corporativo',
    category: 'Productividad',
    group: 'software-cloud',
    description: 'Cuentas empresariales con dominio propio y una administración centralizada de buzones, acceso y operación.',
    contactValue: 'Correo corporativo',
    sectorSlugs: ['comercio', 'oficinas', 'industria', 'multisucursal'],
  },
  {
    href: '/servicios/monitoreo-web',
    title: 'Monitoreo web',
    shortTitle: 'Monitoreo web',
    category: 'Continuidad',
    group: 'continuidad-seguridad',
    description: 'Disponibilidad, tiempos de respuesta, certificados, dominio y alertas para servicios digitales.',
    contactValue: 'Monitoreo web',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/monitoreo-hardware',
    title: 'Monitoreo de hardware',
    shortTitle: 'Monitoreo de hardware',
    category: 'Continuidad',
    group: 'continuidad-seguridad',
    description: 'Visibilidad de servidores, routers, switches, recursos, conectividad y condiciones de infraestructura.',
    contactValue: 'Monitoreo de hardware',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/respaldos',
    title: 'Respaldos y recuperación',
    shortTitle: 'Respaldos',
    category: 'Continuidad',
    group: 'continuidad-seguridad',
    description: 'Estrategias de respaldo y recuperación para reducir el impacto de pérdidas de información o fallas de servicio.',
    contactValue: 'Respaldos y recuperación',
    sectorSlugs: ['comercio', 'oficinas', 'industria', 'multisucursal'],
  },
  {
    href: '/servicios/ciberseguridad',
    title: 'Ciberseguridad',
    shortTitle: 'Ciberseguridad',
    category: 'Seguridad',
    group: 'continuidad-seguridad',
    description: 'Revisión de exposición, hardening, firewalls y mejoras de seguridad aplicadas a infraestructura y servicios digitales.',
    contactValue: 'Ciberseguridad',
    sectorSlugs: ['hoteles', 'comercio', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/videovigilancia',
    title: 'Videovigilancia',
    shortTitle: 'Videovigilancia',
    category: 'Seguridad física',
    group: 'continuidad-seguridad',
    description: 'CCTV y visualización remota integrados a una infraestructura de red preparada para operación y crecimiento.',
    contactValue: 'Videovigilancia',
    sectorSlugs: ['restaurantes', 'hoteles', 'comercio', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/control-acceso',
    title: 'Control de acceso',
    shortTitle: 'Control de acceso',
    category: 'Seguridad física',
    group: 'continuidad-seguridad',
    description: 'Gestión de entradas, personal, visitantes y áreas restringidas con una arquitectura integrada a la operación.',
    contactValue: 'Control de acceso',
    sectorSlugs: ['hoteles', 'oficinas', 'industria', 'educacion', 'multisucursal'],
  },
  {
    href: '/servicios/domotica-iot',
    title: 'Domótica e IoT',
    shortTitle: 'Domótica e IoT',
    category: 'Automatización',
    group: 'continuidad-seguridad',
    description: 'Automatización de iluminación, clima, sensores, accesos y alertas conectada a una red diseñada para esos dispositivos.',
    contactValue: 'Domótica e IoT',
    sectorSlugs: ['hoteles', 'oficinas', 'industria', 'educacion'],
  },
]

export function getServiceGuide(href: string) {
  return serviceCatalog.find((service) => service.href === href)
}

export function getServicesByGroup(groupId: ServiceGroupId) {
  return serviceCatalog.filter((service) => service.group === groupId)
}

export function getContactServiceFromHref(href: string): ContactServiceValue {
  return getServiceGuide(href)?.contactValue ?? 'Otro servicio'
}

export function isContactServiceValue(value: string): value is ContactServiceValue {
  return (contactServiceValues as readonly string[]).includes(value)
}

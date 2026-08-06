export type PlatformType = 'Plataforma propia' | 'Proyecto para cliente'

export interface PlatformItem {
  name: string
  shortName: string
  description: string
  href: string
  audience: string
  type: PlatformType
  status?: 'Disponible' | 'En preparación'
}

export interface ServiceItem {
  title: string
  description: string
  href: string
  external?: boolean
  featured?: boolean
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  services: ServiceItem[]
}

export const prioritySolutions = [
  {
    title: 'Portal cautivo',
    description:
      'Convierte el acceso WiFi de tus visitantes en una experiencia con tu marca, registro autorizado y datos útiles para mejorar la atención.',
    href: '/servicios/portal-cautivo',
    label: 'Captación y experiencia',
    benefits: ['Acceso personalizado', 'Base de datos autorizada', 'Promociones y fidelización'],
  },
  {
    title: 'WiFi administrado',
    description:
      'Diseñamos, instalamos y administramos redes inalámbricas estables para negocios con múltiples usuarios, áreas o sucursales.',
    href: '/servicios/wifi-administrado',
    label: 'Cobertura y control',
    benefits: ['Cobertura profesional', 'Segmentación de red', 'Monitoreo y soporte'],
  },
  {
    title: 'Diseño e implementación de redes',
    description:
      'Creamos la infraestructura cableada e inalámbrica que necesita tu operación, desde el levantamiento hasta la documentación final.',
    href: '/servicios/redes-datos',
    label: 'Infraestructura empresarial',
    benefits: ['Site survey', 'Cableado y racks', 'Configuración y puesta en marcha'],
  },
]

export const platforms: PlatformItem[] = [
  {
    name: 'ReservaBella',
    shortName: 'RB',
    description:
      'Plataforma SaaS para administrar citas, clientes, servicios y páginas de reservas para negocios de belleza, bienestar y atención profesional.',
    href: 'https://reservabella.com',
    audience: 'Salones, barberías, spas y profesionales',
    type: 'Plataforma propia',
    status: 'Disponible',
  },
  {
    name: 'Shoopper.me',
    shortName: 'SH',
    description:
      'Experiencia de compra en línea de productos originales como bolsos, ropa, maquillaje, accesorios y otros artículos de moda y belleza.',
    href: 'https://shoopper.me',
    audience: 'Compradores de moda, belleza y accesorios',
    type: 'Plataforma propia',
    status: 'Disponible',
  },
  {
    name: 'Ago WiFi',
    shortName: 'WF',
    description:
      'Portal cautivo y WiFi administrado para ofrecer acceso, captar datos autorizados, conocer visitantes y mejorar la experiencia del cliente.',
    href: 'https://wifi.operadoresago.com',
    audience: 'Restaurantes, hoteles, comercios y eventos',
    type: 'Plataforma propia',
    status: 'Disponible',
  },
  {
    name: 'CEAS Industrial',
    shortName: 'CI',
    description:
      'Proyecto comercial desarrollado para presentar servicios de reparación, mantenimiento y automatización de maquinaria industrial textil.',
    href: 'https://electronica-industrial.operadoresago.com',
    audience: 'Industria textil y empresas con maquinaria especializada',
    type: 'Proyecto para cliente',
    status: 'Disponible',
  },
  {
    name: 'Ago Games',
    shortName: 'AG',
    description:
      'Arcade en línea de Operadores AGO, preparado para reunir experiencias de juego desde cualquier dispositivo.',
    href: 'https://games.operadoresago.com',
    audience: 'Jugadores y comunidades digitales',
    type: 'Plataforma propia',
    status: 'En preparación',
  },
]

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'wifi',
    title: 'WiFi inteligente',
    description:
      'Cobertura, acceso administrado y analítica para convertir la red WiFi en una herramienta del negocio.',
    services: [
      {
        title: 'Portal cautivo',
        description: 'Acceso personalizado para visitantes con identidad de marca, registro autorizado y analítica.',
        href: '/servicios/portal-cautivo',
        featured: true,
      },
      {
        title: 'WiFi administrado',
        description: 'Diseño de cobertura, implementación, segmentación, monitoreo y soporte de red.',
        href: '/servicios/wifi-administrado',
        featured: true,
      },
      {
        title: 'Analítica de visitantes',
        description: 'Indicadores de conexión y comportamiento para apoyar decisiones comerciales.',
        href: 'https://wifi.operadoresago.com',
        external: true,
      },
    ],
  },
  {
    id: 'conectividad',
    title: 'Conectividad e infraestructura',
    description:
      'Redes estables y seguras para conectar oficinas, sucursales, equipos y usuarios.',
    services: [
      {
        title: 'Diseño e implementación de redes de datos',
        description: 'Site survey, cableado, racks, switching, WiFi y documentación técnica.',
        href: '/servicios/redes-datos',
        featured: true,
      },
      {
        title: 'Internet empresarial',
        description: 'Enlaces dedicados, simétricos y soluciones de conectividad según cobertura.',
        href: '/servicios/internet',
      },
      {
        title: 'VPN empresarial',
        description: 'Conexión segura entre sucursales, colaboradores remotos y servicios internos.',
        href: '/servicios/vpn',
      },
      {
        title: 'Radio enlaces y LAN to LAN',
        description: 'Interconexión entre sedes cuando la fibra no es viable o se requiere una red privada.',
        href: '/contacto',
      },
    ],
  },
  {
    id: 'comunicaciones',
    title: 'Comunicaciones empresariales',
    description:
      'Herramientas para atender, coordinar y mantener comunicados a clientes y equipos.',
    services: [
      {
        title: 'PBX IP',
        description: 'Telefonía IP con extensiones, IVR, grabación y administración centralizada.',
        href: '/contacto',
        featured: true,
      },
      {
        title: 'Call Center',
        description: 'Soluciones para atención, ventas, seguimiento y control de llamadas.',
        href: '/contacto',
      },
      {
        title: 'SMS y notificaciones',
        description: 'Mensajes para campañas, alertas operativas y comunicación con clientes.',
        href: '/contacto',
      },
    ],
  },
  {
    id: 'desarrollo',
    title: 'Desarrollo, cloud y automatización',
    description:
      'Sitios, sistemas y aplicaciones que convierten procesos manuales en experiencias digitales.',
    services: [
      {
        title: 'Desarrollo web y multiplataforma',
        description: 'Páginas, sistemas, e-commerce y aplicaciones para web, Android e iOS.',
        href: '/servicios/desarrollo',
        featured: true,
      },
      {
        title: 'Integración de sistemas',
        description: 'Conexión de APIs, plataformas, bases de datos y procesos empresariales.',
        href: '/servicios/desarrollo',
      },
      {
        title: 'Cloud VPS y hosting',
        description: 'Infraestructura administrada para alojar sitios y aplicaciones críticas.',
        href: '/contacto',
      },
      {
        title: 'Correo corporativo',
        description: 'Cuentas empresariales administradas con dominio propio.',
        href: '/contacto',
      },
    ],
  },
  {
    id: 'monitoreo',
    title: 'Monitoreo y continuidad operativa',
    description:
      'Visibilidad proactiva para detectar fallas antes de que afecten a clientes y operaciones.',
    services: [
      {
        title: 'Monitoreo web',
        description: 'Disponibilidad, SSL, dominio, tiempos de respuesta y alertas de sitios web.',
        href: '/servicios/monitoreo-web',
        featured: true,
      },
      {
        title: 'Monitoreo de hardware',
        description: 'Estado de servidores, CPU, memoria, discos, temperatura, red y dispositivos.',
        href: '/servicios/monitoreo-hardware',
        featured: true,
      },
      {
        title: 'Respaldos y recuperación',
        description: 'Estrategias de respaldo y continuidad para servicios e información crítica.',
        href: '/contacto',
      },
    ],
  },
  {
    id: 'seguridad',
    title: 'Seguridad e IoT',
    description:
      'Protección física y digital con soluciones integradas para instalaciones y activos.',
    services: [
      {
        title: 'Ciberseguridad',
        description: 'Hardening, firewalls, revisión de exposición y mejora de seguridad web.',
        href: '/contacto',
        featured: true,
      },
      {
        title: 'Videovigilancia',
        description: 'CCTV y visualización remota para hogares, comercios y empresas.',
        href: '/contacto',
      },
      {
        title: 'Control de acceso',
        description: 'Gestión de entradas, personal, visitantes y áreas restringidas.',
        href: '/contacto',
      },
      {
        title: 'Domótica e IoT',
        description: 'Automatización de iluminación, clima, sensores, accesos y alertas.',
        href: '/contacto',
      },
    ],
  },
]

import { AGO_BRAND_GRADIENT, AGO_BRAND_GRADIENT_SOFT } from '@/lib/brand'

export type SectorIconKey =
  | 'restaurant'
  | 'hotel'
  | 'commerce'
  | 'office'
  | 'industry'
  | 'education'
  | 'multisite'

export interface SectorService {
  title: string
  description: string
  href: string
  label: string
}

export interface SectorNeed {
  id: string
  title: string
  shortTitle: string
  description: string
  outcome: string
  serviceHrefs: string[]
}

export interface SectorItem {
  slug: string
  name: string
  shortName: string
  icon: SectorIconKey
  eyebrow: string
  hero: string
  description: string
  accent: string
  accentSoft: string
  visualLabel: string
  stats: Array<{ value: string; label: string }>
  services: SectorService[]
  needs: SectorNeed[]
}

export const sectors: SectorItem[] = [
  {
    slug: 'restaurantes',
    name: 'Restaurantes y cafeterías',
    shortName: 'Restaurantes',
    icon: 'restaurant',
    eyebrow: 'Hospitalidad y gastronomía',
    hero: 'Conectividad que atiende al cliente sin detener la operación.',
    description:
      'Separamos la experiencia de tus invitados de la red operativa y conectamos POS, equipos, colaboradores y servicios digitales con una arquitectura pensada para el ritmo del negocio.',
    accent: AGO_BRAND_GRADIENT,
    accentSoft: AGO_BRAND_GRADIENT_SOFT,
    visualLabel: 'Experiencia + operación',
    stats: [
      { value: 'WiFi', label: 'para invitados' },
      { value: 'VLAN', label: 'operación separada' },
      { value: '24/7', label: 'visibilidad opcional' },
    ],
    services: [
      { title: 'Portal cautivo', description: 'Acceso WiFi con la identidad de tu negocio y registro autorizado.', href: '/servicios/portal-cautivo', label: 'Clientes' },
      { title: 'WiFi administrado', description: 'Cobertura, segmentación y control para áreas de clientes y operación.', href: '/servicios/wifi-administrado', label: 'Conectividad' },
      { title: 'Redes de datos', description: 'Infraestructura para POS, cámaras, impresoras, APs y equipos internos.', href: '/servicios/redes-datos', label: 'Infraestructura' },
      { title: 'Desarrollo a la medida', description: 'Sitios, reservas, menús, automatizaciones y herramientas de operación.', href: '/servicios/desarrollo', label: 'Digital' },
    ],
    needs: [
      { id: 'wifi-clientes', title: 'Quiero ofrecer WiFi a mis clientes', shortTitle: 'WiFi para clientes', description: 'Creamos una red de invitados independiente de tu operación y una experiencia de acceso con tu marca.', outcome: 'Portal de acceso + red separada + administración centralizada.', serviceHrefs: ['/servicios/portal-cautivo', '/servicios/wifi-administrado'] },
      { id: 'red-inestable', title: 'Mi red se vuelve lenta o inestable', shortTitle: 'Fallas de red', description: 'Revisamos cobertura, saturación, cableado, equipos y segmentación para localizar los puntos débiles.', outcome: 'Una red documentada, ordenada y preparada para la demanda real.', serviceHrefs: ['/servicios/wifi-administrado', '/servicios/redes-datos'] },
      { id: 'presencia-digital', title: 'Necesito mejorar mi presencia o proceso digital', shortTitle: 'Plataforma digital', description: 'Diseñamos la capa digital que complementa tu operación: sitio, reservas, menús, campañas o integraciones.', outcome: 'Una experiencia digital conectada con la forma en que atiendes.', serviceHrefs: ['/servicios/desarrollo'] },
      { id: 'sucursales', title: 'Quiero administrar varias sucursales', shortTitle: 'Varias sucursales', description: 'Centralizamos conectividad, visibilidad y políticas para que cada sede opere bajo una misma estrategia.', outcome: 'Sucursales conectadas, estandarizadas y más fáciles de administrar.', serviceHrefs: ['/servicios/vpn', '/servicios/monitoreo-hardware', '/servicios/wifi-administrado'] },
    ],
  },
  {
    slug: 'hoteles',
    name: 'Hoteles y hospedaje',
    shortName: 'Hoteles',
    icon: 'hotel',
    eyebrow: 'Hospitalidad',
    hero: 'Una experiencia WiFi consistente desde recepción hasta la última habitación.',
    description:
      'Diseñamos cobertura por zonas, acceso para huéspedes, redes separadas para personal y servicios, y una operación que puede administrarse desde un solo punto.',
    accent: AGO_BRAND_GRADIENT,
    accentSoft: AGO_BRAND_GRADIENT_SOFT,
    visualLabel: 'Cobertura por zonas',
    stats: [
      { value: 'Guest', label: 'acceso controlado' },
      { value: 'Staff', label: 'red separada' },
      { value: 'Multi', label: 'zonas y sedes' },
    ],
    services: [
      { title: 'WiFi administrado', description: 'Cobertura planeada por habitaciones, áreas comunes y operación.', href: '/servicios/wifi-administrado', label: 'Cobertura' },
      { title: 'Portal cautivo', description: 'Acceso personalizado para huéspedes con políticas y experiencia de marca.', href: '/servicios/portal-cautivo', label: 'Huéspedes' },
      { title: 'Redes de datos', description: 'Backbone, switching, cableado y segmentación para servicios internos.', href: '/servicios/redes-datos', label: 'Infraestructura' },
      { title: 'Monitoreo tecnológico', description: 'Visibilidad de equipos y servicios para detectar incidencias con mayor rapidez.', href: '/servicios/monitoreo-hardware', label: 'Continuidad' },
    ],
    needs: [
      { id: 'cobertura', title: 'Tengo zonas con mala cobertura', shortTitle: 'Cobertura', description: 'Diseñamos la red según distribución, materiales, densidad y experiencia esperada en cada zona.', outcome: 'Cobertura más consistente y capacidad alineada al uso.', serviceHrefs: ['/servicios/wifi-administrado', '/servicios/redes-datos'] },
      { id: 'huespedes', title: 'Quiero controlar el acceso de huéspedes', shortTitle: 'Acceso huéspedes', description: 'Separamos invitados de la operación y personalizamos el acceso con la identidad del hotel.', outcome: 'Acceso administrado sin exponer la red interna.', serviceHrefs: ['/servicios/portal-cautivo', '/servicios/wifi-administrado'] },
      { id: 'operacion', title: 'Necesito separar huéspedes, personal y dispositivos', shortTitle: 'Segmentación', description: 'Creamos segmentos de red para reducir exposición y ordenar el tráfico de cada tipo de dispositivo.', outcome: 'Una infraestructura más clara, controlable y escalable.', serviceHrefs: ['/servicios/redes-datos', '/servicios/wifi-administrado'] },
      { id: 'multihotel', title: 'Administro más de una propiedad', shortTitle: 'Varias propiedades', description: 'Unificamos criterios, conectividad y monitoreo para reducir diferencias entre sedes.', outcome: 'Una operación multisede con mayor visibilidad.', serviceHrefs: ['/servicios/vpn', '/servicios/monitoreo-hardware'] },
    ],
  },
  {
    slug: 'comercio',
    name: 'Comercio y retail',
    shortName: 'Comercio',
    icon: 'commerce',
    eyebrow: 'Retail y atención al público',
    hero: 'Conecta ventas, clientes y dispositivos sin mezclar lo que debe permanecer separado.',
    description:
      'Diseñamos redes para terminales, cámaras, equipos internos y WiFi de clientes, con opciones para conectar sucursales y monitorear componentes críticos.',
    accent: AGO_BRAND_GRADIENT,
    accentSoft: AGO_BRAND_GRADIENT_SOFT,
    visualLabel: 'POS + clientes + seguridad',
    stats: [
      { value: 'POS', label: 'red operativa' },
      { value: 'Guest', label: 'WiFi separado' },
      { value: 'VPN', label: 'entre sucursales' },
    ],
    services: [
      { title: 'Redes de datos', description: 'Infraestructura para POS, inventario, cámaras y dispositivos de tienda.', href: '/servicios/redes-datos', label: 'Operación' },
      { title: 'WiFi administrado', description: 'Cobertura y segmentación para colaboradores y visitantes.', href: '/servicios/wifi-administrado', label: 'WiFi' },
      { title: 'VPN empresarial', description: 'Interconexión segura entre sucursales y servicios centrales.', href: '/servicios/vpn', label: 'Sucursales' },
      { title: 'Portal cautivo', description: 'Experiencia de acceso para clientes con identidad de marca.', href: '/servicios/portal-cautivo', label: 'Clientes' },
    ],
    needs: [
      { id: 'pos', title: 'Necesito estabilizar la red de cajas y terminales', shortTitle: 'POS y terminales', description: 'Separamos tráfico operativo y revisamos los puntos de red que sostienen la venta diaria.', outcome: 'Una base más predecible para terminales y sistemas de tienda.', serviceHrefs: ['/servicios/redes-datos'] },
      { id: 'clientes', title: 'Quiero ofrecer WiFi a visitantes', shortTitle: 'WiFi visitantes', description: 'Creamos una red independiente y una experiencia de acceso alineada a tu marca.', outcome: 'WiFi para clientes sin compartir la red interna.', serviceHrefs: ['/servicios/portal-cautivo', '/servicios/wifi-administrado'] },
      { id: 'sucursales', title: 'Quiero conectar mis sucursales', shortTitle: 'Sucursales', description: 'Diseñamos una arquitectura para interconectar sedes y acceder a servicios internos de forma segura.', outcome: 'Conectividad centralizada entre ubicaciones.', serviceHrefs: ['/servicios/vpn', '/servicios/redes-datos'] },
      { id: 'monitoreo', title: 'Quiero detectar fallas antes de que afecten ventas', shortTitle: 'Monitoreo', description: 'Supervisamos infraestructura y servicios seleccionados para acelerar la detección de incidencias.', outcome: 'Más visibilidad sobre los componentes que sostienen la operación.', serviceHrefs: ['/servicios/monitoreo-hardware', '/servicios/monitoreo-web'] },
    ],
  },
  {
    slug: 'oficinas',
    name: 'Oficinas y corporativos',
    shortName: 'Oficinas',
    icon: 'office',
    eyebrow: 'Operación corporativa',
    hero: 'Una red ordenada para equipos que dependen de estar conectados todo el día.',
    description:
      'Integramos conectividad cableada e inalámbrica, acceso remoto, monitoreo y segmentación para que usuarios, servicios y dispositivos compartan infraestructura sin perder control.',
    accent: AGO_BRAND_GRADIENT,
    accentSoft: AGO_BRAND_GRADIENT_SOFT,
    visualLabel: 'Usuarios + servicios + sedes',
    stats: [
      { value: 'LAN', label: 'documentada' },
      { value: 'VPN', label: 'acceso seguro' },
      { value: 'NOC', label: 'visibilidad' },
    ],
    services: [
      { title: 'Redes de datos', description: 'Cableado, switching, VLAN, WiFi y documentación de infraestructura.', href: '/servicios/redes-datos', label: 'Base de red' },
      { title: 'VPN empresarial', description: 'Acceso remoto y conexión segura entre sedes.', href: '/servicios/vpn', label: 'Acceso' },
      { title: 'WiFi administrado', description: 'Cobertura y políticas para usuarios corporativos y visitantes.', href: '/servicios/wifi-administrado', label: 'Movilidad' },
      { title: 'Monitoreo', description: 'Seguimiento de servidores, red, web y componentes críticos.', href: '/servicios/monitoreo-hardware', label: 'Continuidad' },
    ],
    needs: [
      { id: 'red', title: 'La red creció sin una estructura clara', shortTitle: 'Ordenar la red', description: 'Levantamos la infraestructura actual y proponemos una arquitectura documentada y escalable.', outcome: 'Menos improvisación y una base técnica más fácil de mantener.', serviceHrefs: ['/servicios/redes-datos'] },
      { id: 'remoto', title: 'Necesito acceso remoto seguro', shortTitle: 'Trabajo remoto', description: 'Implementamos túneles VPN y políticas para acceder a recursos internos sin exponerlos directamente.', outcome: 'Acceso remoto controlado para colaboradores autorizados.', serviceHrefs: ['/servicios/vpn'] },
      { id: 'wifi', title: 'Tengo problemas de cobertura o capacidad WiFi', shortTitle: 'WiFi corporativo', description: 'Revisamos áreas, usuarios, interferencia y densidad para ajustar el diseño inalámbrico.', outcome: 'Una experiencia WiFi más consistente para el equipo.', serviceHrefs: ['/servicios/wifi-administrado'] },
      { id: 'monitoreo', title: 'Quiero saber qué falla y cuándo', shortTitle: 'Monitoreo', description: 'Centralizamos indicadores de infraestructura para detectar cambios y fallas con mayor rapidez.', outcome: 'Más contexto operativo antes de comenzar a diagnosticar.', serviceHrefs: ['/servicios/monitoreo-hardware', '/servicios/monitoreo-web'] },
    ],
  },
  {
    slug: 'industria',
    name: 'Industria y almacenes',
    shortName: 'Industria',
    icon: 'industry',
    eyebrow: 'Operación industrial',
    hero: 'Infraestructura digital para entornos donde una desconexión sí impacta la operación.',
    description:
      'Conectamos equipos, áreas, usuarios y servicios con redes documentadas, monitoreo de hardware, enlaces entre sedes y desarrollos adaptados al proceso.',
    accent: AGO_BRAND_GRADIENT,
    accentSoft: AGO_BRAND_GRADIENT_SOFT,
    visualLabel: 'Red + monitoreo + proceso',
    stats: [
      { value: 'LAN', label: 'industrial' },
      { value: 'HW', label: 'monitoreado' },
      { value: 'Site', label: 'interconectado' },
    ],
    services: [
      { title: 'Redes de datos', description: 'Diseño y despliegue de infraestructura cableada e inalámbrica.', href: '/servicios/redes-datos', label: 'Infraestructura' },
      { title: 'Monitoreo de hardware', description: 'Visibilidad de servidores, recursos y equipos seleccionados.', href: '/servicios/monitoreo-hardware', label: 'Operación' },
      { title: 'VPN empresarial', description: 'Conexión segura entre plantas, oficinas y servicios centrales.', href: '/servicios/vpn', label: 'Interconexión' },
      { title: 'Desarrollo a la medida', description: 'Herramientas digitales e integraciones para procesos específicos.', href: '/servicios/desarrollo', label: 'Automatización' },
    ],
    needs: [
      { id: 'infraestructura', title: 'Necesito ordenar o ampliar mi infraestructura', shortTitle: 'Infraestructura', description: 'Partimos de un levantamiento para diseñar cableado, switching, WiFi y distribución por áreas.', outcome: 'Una red con documentación y capacidad para crecer.', serviceHrefs: ['/servicios/redes-datos'] },
      { id: 'equipos', title: 'Quiero monitorear servidores y equipos', shortTitle: 'Monitoreo hardware', description: 'Centralizamos métricas y estados relevantes para facilitar la detección de incidentes.', outcome: 'Mayor visibilidad sobre recursos críticos.', serviceHrefs: ['/servicios/monitoreo-hardware'] },
      { id: 'sedes', title: 'Necesito conectar instalaciones', shortTitle: 'Conectar sedes', description: 'Implementamos conectividad privada entre ubicaciones de acuerdo con la infraestructura disponible.', outcome: 'Acceso seguro entre redes distribuidas.', serviceHrefs: ['/servicios/vpn', '/servicios/redes-datos'] },
      { id: 'proceso', title: 'Necesito digitalizar un proceso específico', shortTitle: 'Digitalización', description: 'Diseñamos software e integraciones a partir del flujo real de tu operación.', outcome: 'Una herramienta ajustada al proceso, no al revés.', serviceHrefs: ['/servicios/desarrollo'] },
    ],
  },
  {
    slug: 'educacion',
    name: 'Educación y espacios de alta demanda',
    shortName: 'Educación',
    icon: 'education',
    eyebrow: 'Escuelas y espacios públicos',
    hero: 'Conectividad preparada para muchos usuarios y distintos niveles de acceso.',
    description:
      'Diseñamos WiFi, segmentación, políticas de acceso e infraestructura para espacios donde la densidad de usuarios y dispositivos cambia a lo largo del día.',
    accent: AGO_BRAND_GRADIENT,
    accentSoft: AGO_BRAND_GRADIENT_SOFT,
    visualLabel: 'Alta densidad + control',
    stats: [
      { value: 'SSID', label: 'por perfil' },
      { value: 'WiFi', label: 'alta demanda' },
      { value: 'Policy', label: 'acceso' },
    ],
    services: [
      { title: 'WiFi administrado', description: 'Cobertura y capacidad para aulas, áreas comunes y espacios compartidos.', href: '/servicios/wifi-administrado', label: 'Cobertura' },
      { title: 'Portal cautivo', description: 'Acceso administrado para visitantes o grupos definidos.', href: '/servicios/portal-cautivo', label: 'Acceso' },
      { title: 'Redes de datos', description: 'Backbone, switching, cableado y segmentación.', href: '/servicios/redes-datos', label: 'Infraestructura' },
      { title: 'Monitoreo', description: 'Visibilidad de servicios y componentes seleccionados.', href: '/servicios/monitoreo-hardware', label: 'Continuidad' },
    ],
    needs: [
      { id: 'densidad', title: 'Tengo demasiados usuarios conectándose al mismo tiempo', shortTitle: 'Alta densidad', description: 'Dimensionamos capacidad y distribución de APs según zonas, horarios y cantidad de dispositivos.', outcome: 'Una red inalámbrica diseñada para la carga real.', serviceHrefs: ['/servicios/wifi-administrado'] },
      { id: 'acceso', title: 'Quiero controlar quién entra a la red', shortTitle: 'Control de acceso', description: 'Diseñamos redes y mecanismos de acceso independientes para perfiles o visitantes.', outcome: 'Acceso organizado sin compartir una sola red para todos.', serviceHrefs: ['/servicios/portal-cautivo', '/servicios/redes-datos'] },
      { id: 'infraestructura', title: 'Necesito modernizar la red del plantel', shortTitle: 'Modernización', description: 'Levantamos la red actual y proponemos una arquitectura cableada e inalámbrica documentada.', outcome: 'Una base preparada para nuevos dispositivos y servicios.', serviceHrefs: ['/servicios/redes-datos', '/servicios/wifi-administrado'] },
      { id: 'visibilidad', title: 'Necesito saber cuándo un servicio deja de responder', shortTitle: 'Visibilidad', description: 'Monitoreamos componentes seleccionados para detectar cambios de disponibilidad.', outcome: 'Más rapidez para identificar dónde comenzar a revisar.', serviceHrefs: ['/servicios/monitoreo-hardware', '/servicios/monitoreo-web'] },
    ],
  },
  {
    slug: 'multisucursal',
    name: 'Empresas multisucursal',
    shortName: 'Multisucursal',
    icon: 'multisite',
    eyebrow: 'Operación distribuida',
    hero: 'Una sola estrategia tecnológica para todas tus ubicaciones.',
    description:
      'Estandarizamos conectividad, acceso, monitoreo y herramientas digitales para reducir diferencias entre sedes y facilitar la administración central.',
    accent: AGO_BRAND_GRADIENT,
    accentSoft: AGO_BRAND_GRADIENT_SOFT,
    visualLabel: 'Control central + sedes',
    stats: [
      { value: 'HQ', label: 'control central' },
      { value: 'VPN', label: 'entre sedes' },
      { value: 'NOC', label: 'visibilidad' },
    ],
    services: [
      { title: 'VPN empresarial', description: 'Interconexión segura entre sucursales y recursos centrales.', href: '/servicios/vpn', label: 'Conectividad' },
      { title: 'WiFi administrado', description: 'Políticas y configuración consistentes entre ubicaciones.', href: '/servicios/wifi-administrado', label: 'Estandarización' },
      { title: 'Monitoreo', description: 'Visibilidad central de infraestructura y servicios seleccionados.', href: '/servicios/monitoreo-hardware', label: 'Control' },
      { title: 'Plataformas a la medida', description: 'Software centralizado para procesos que hoy viven separados por sede.', href: '/servicios/desarrollo', label: 'Operación' },
    ],
    needs: [
      { id: 'conectar', title: 'Necesito conectar mis sucursales', shortTitle: 'Conectar sedes', description: 'Diseñamos una arquitectura VPN para acceder a recursos entre ubicaciones autorizadas.', outcome: 'Sucursales comunicadas sobre una capa privada.', serviceHrefs: ['/servicios/vpn'] },
      { id: 'estandarizar', title: 'Cada sucursal tiene una red diferente', shortTitle: 'Estandarizar', description: 'Definimos una arquitectura repetible de switching, WiFi, segmentación y documentación.', outcome: 'Menos variaciones y una operación más fácil de soportar.', serviceHrefs: ['/servicios/redes-datos', '/servicios/wifi-administrado'] },
      { id: 'centralizar', title: 'Quiero ver el estado de todas las sedes', shortTitle: 'Monitoreo central', description: 'Centralizamos indicadores para identificar qué ubicación o servicio necesita atención.', outcome: 'Una vista común para infraestructura distribuida.', serviceHrefs: ['/servicios/monitoreo-hardware', '/servicios/monitoreo-web'] },
      { id: 'plataforma', title: 'Necesito centralizar un proceso de negocio', shortTitle: 'Plataforma central', description: 'Construimos herramientas que reúnen información y operación de varias ubicaciones.', outcome: 'Una capa digital común para procesos multisede.', serviceHrefs: ['/servicios/desarrollo'] },
    ],
  },
]

export const sectorsBySlug = Object.fromEntries(sectors.map((sector) => [sector.slug, sector])) as Record<string, SectorItem>

export function getSector(slug: string) {
  return sectorsBySlug[slug]
}

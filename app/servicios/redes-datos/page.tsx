import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Diseño e implementación de redes de datos | Operadores AGO',
  description:
    'Diseño, cableado estructurado, racks, switching, WiFi, segmentación y documentación de redes empresariales en México.',
}

export default function RedesDatosPage() {
  return (
    <ServiceDetailPage
      serviceHref="/servicios/redes-datos"
      eyebrow="Redes de datos"
      title="Infraestructura diseñada para operar con"
      highlight="orden, velocidad y seguridad"
      description="Planeamos e implementamos redes cableadas e inalámbricas para empresas, sucursales y proyectos nuevos, desde el diagnóstico inicial hasta la configuración, pruebas y documentación."
      benefits={[
        'Menos fallas provocadas por instalaciones improvisadas o sin documentación.',
        'Capacidad adecuada para usuarios, cámaras, telefonía, servidores, IoT y WiFi.',
        'Segmentación para separar servicios y reducir riesgos dentro de la red.',
        'Infraestructura preparada para mantenimiento, ampliaciones y nuevas sucursales.',
      ]}
      idealFor={[
        'Oficinas nuevas',
        'Remodelaciones',
        'Restaurantes',
        'Hoteles',
        'Comercios',
        'Industria',
        'Sucursales',
      ]}
      includes={[
        {
          title: 'Levantamiento técnico',
          description: 'Revisión de espacios, necesidades, servicios actuales, rutas y puntos críticos.',
        },
        {
          title: 'Diseño de red',
          description: 'Topología, capacidad, segmentación, direccionamiento y selección de equipos.',
        },
        {
          title: 'Cableado estructurado',
          description: 'Tendido, canalización, terminación, etiquetado y organización de puntos de red.',
        },
        {
          title: 'Racks y energía',
          description: 'Organización de switches, patch panels, respaldos y elementos de distribución.',
        },
        {
          title: 'Configuración',
          description: 'Switching, VLAN, routing, políticas, WiFi y servicios requeridos por la operación.',
        },
        {
          title: 'Pruebas y documentación',
          description: 'Validación de enlaces, inventario, diagramas y entrega de información técnica.',
        },
      ]}
    />
  )
}

import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Internet empresarial | Operadores AGO',
  description:
    'Soluciones de Internet empresarial, enlaces dedicados, simétricos, radio enlaces e interconexión para empresas y sucursales.',
}

export default function InternetPage() {
  return (
    <ServiceDetailPage
      serviceHref="/servicios/internet"
      eyebrow="Internet empresarial"
      title="Conectividad dimensionada para la"
      highlight="operación real"
      description="Evaluamos cobertura, capacidad, criticidad y alternativas disponibles para construir una conexión empresarial que responda a la forma en que trabajan tus usuarios, sistemas y sucursales."
      benefits={[
        'Capacidad alineada con aplicaciones, usuarios y tráfico de la operación.',
        'Opciones de continuidad y enlaces alternos cuando el proyecto lo requiere.',
        'Una ruta clara entre Internet, red local, WiFi y servicios internos.',
        'Factibilidad y alcance definidos antes de comprometer infraestructura.',
      ]}
      idealFor={[
        'Oficinas',
        'Comercios',
        'Industria',
        'Sucursales',
        'Servicios críticos',
        'Proyectos de expansión',
      ]}
      plans={[
        { name: 'Plan Básico', price: '$220', description: '20 Mbps · Ilimitado', features: ['Navegación web', 'Redes sociales', 'Clases en línea'] },
        { name: 'Plan Familiar', price: '$299', description: '40 Mbps · Ilimitado', badge: 'Más popular', features: ['Streaming HD', 'Videollamadas', 'Múltiples dispositivos'] },
        { name: 'Plan Premium', price: '$699', description: '100 Mbps · Ilimitado', features: ['Streaming 4K', 'Home Office', 'Gaming', 'Hogares conectados'] },
      ]}
      includes={[
        {
          title: 'Factibilidad técnica',
          description: 'Revisión de ubicación, cobertura, proveedor, medio disponible y capacidad requerida.',
        },
        {
          title: 'Internet dedicado',
          description: 'Alternativas de ancho de banda empresarial cuando la disponibilidad y el SLA son prioritarios.',
        },
        {
          title: 'Enlaces simétricos',
          description: 'Opciones para operaciones que necesitan una capacidad de subida consistente además de descarga.',
        },
        {
          title: 'Radio enlaces',
          description: 'Interconexión inalámbrica cuando la fibra no es viable o se necesita unir puntos específicos.',
        },
        {
          title: 'LAN to LAN',
          description: 'Diseño de conectividad privada entre ubicaciones y servicios seleccionados.',
        },
        {
          title: 'Continuidad',
          description: 'Diseño de enlaces alternos, failover y monitoreo cuando la criticidad del negocio lo justifica.',
        },
      ]}
    />
  )
}

import ServiceDetailPage from '@/components/service-detail-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'WiFi administrado para empresas en México | Operadores AGO',
  description: 'Diseño, instalación, segmentación, monitoreo y soporte de redes WiFi empresariales para comercios, restaurantes, hoteles, oficinas e industria.',
  path: '/servicios/wifi-administrado',
})
export default function WifiAdministradoPage() {
  return (
    <ServiceDetailPage
      serviceHref="/servicios/wifi-administrado"
      eyebrow="WiFi administrado"
      title="Cobertura estable, control centralizado y"
      highlight="soporte continuo"
      description="Diseñamos y administramos redes inalámbricas para negocios que necesitan conectar clientes, colaboradores, terminales y dispositivos sin perder rendimiento, seguridad ni visibilidad."
      benefits={[
        'Cobertura diseñada de acuerdo con áreas, materiales, usuarios y demanda real.',
        'Separación segura entre visitantes, operación, dispositivos y administración.',
        'Visibilidad sobre equipos, disponibilidad y condiciones de la red.',
        'Una ruta clara para crecer por áreas, pisos, sucursales o nuevos servicios.',
      ]}
      idealFor={[
        'Restaurantes y cafeterías',
        'Hoteles',
        'Oficinas',
        'Comercios',
        'Escuelas',
        'Clínicas',
        'Industria',
      ]}
      includes={[
        {
          title: 'Site survey',
          description: 'Levantamiento para identificar cobertura, interferencia, materiales y capacidad requerida.',
        },
        {
          title: 'Diseño de cobertura',
          description: 'Ubicación y dimensionamiento de puntos de acceso según la experiencia esperada.',
        },
        {
          title: 'Segmentación',
          description: 'Redes separadas para clientes, colaboradores, administración, IoT y equipos críticos.',
        },
        {
          title: 'Configuración centralizada',
          description: 'Controladores, políticas, límites, seguridad y administración desde una plataforma común.',
        },
        {
          title: 'Monitoreo',
          description: 'Seguimiento de disponibilidad, equipos conectados y condiciones generales de operación.',
        },
        {
          title: 'Soporte y evolución',
          description: 'Acompañamiento para ajustes, ampliaciones, mantenimiento y atención de incidencias.',
        },
      ]}
    />
  )
}

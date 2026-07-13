import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Monitoreo web | Operadores AGO',
  description:
    'Monitoreo de disponibilidad, certificados SSL, dominios, tiempos de respuesta y servicios web con alertas proactivas.',
}

export default function MonitoreoWebPage() {
  return (
    <ServiceDetailPage
      eyebrow="Monitoreo web"
      title="Detecta problemas antes de que los vea"
      highlight="tu cliente"
      description="Supervisamos los puntos críticos de tu presencia digital para identificar caídas, vencimientos y degradaciones de servicio con información útil para actuar."
      benefits={[
        'Mayor visibilidad sobre la disponibilidad real de sitios y aplicaciones.',
        'Alertas ante caídas, lentitud o errores en endpoints importantes.',
        'Seguimiento de certificados SSL y fechas críticas del dominio.',
        'Historial para analizar incidentes y respaldar decisiones de mejora.',
      ]}
      idealFor={[
        'Sitios corporativos',
        'Tiendas en línea',
        'Aplicaciones SaaS',
        'APIs',
        'Portales de clientes',
        'Servicios con SSL',
      ]}
      includes={[
        {
          title: 'Disponibilidad',
          description: 'Comprobaciones programadas sobre páginas, endpoints y servicios públicos.',
        },
        {
          title: 'Rendimiento',
          description: 'Registro de tiempos de respuesta para identificar degradaciones y tendencias.',
        },
        {
          title: 'Certificados SSL',
          description: 'Seguimiento de vigencia y alertas antes del vencimiento del certificado.',
        },
        {
          title: 'Dominio y DNS',
          description: 'Control de fechas y validaciones básicas para reducir riesgos de interrupción.',
        },
        {
          title: 'Alertas',
          description: 'Notificaciones configuradas según criticidad y responsables de atención.',
        },
        {
          title: 'Reportes',
          description: 'Resumen de disponibilidad, incidentes y comportamiento del servicio.',
        },
      ]}
    />
  )
}

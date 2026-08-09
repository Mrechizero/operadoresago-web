import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Portal cautivo para negocios en México | Operadores AGO',
  description:
    'Portal cautivo personalizado para restaurantes, hoteles, comercios y eventos: acceso WiFi con marca, registro autorizado, analítica y campañas.',
}

export default function PortalCautivoPage() {
  return (
    <ServiceDetailPage
      serviceHref="/servicios/portal-cautivo"
      eyebrow="Portal cautivo"
      title="Convierte tu WiFi en una experiencia que"
      highlight="atrae y conoce clientes"
      description="Creamos portales cautivos personalizados para que tus visitantes accedan a internet mediante una experiencia con tu marca, mientras tu negocio obtiene información autorizada y nuevas oportunidades de comunicación."
      benefits={[
        'Una bienvenida digital coherente con la identidad de tu negocio.',
        'Registro autorizado de visitantes para construir una base de datos propia.',
        'Promociones, avisos y beneficios visibles antes de navegar.',
        'Indicadores de conexión para conocer recurrencia, horarios y comportamiento.',
      ]}
      idealFor={[
        'Restaurantes',
        'Hoteles',
        'Cafeterías',
        'Plazas comerciales',
        'Clínicas',
        'Eventos',
        'Sucursales',
      ]}
      includes={[
        {
          title: 'Diseño personalizado',
          description: 'Portal con colores, logotipo, imágenes, mensajes y promociones alineados con tu marca.',
        },
        {
          title: 'Métodos de acceso',
          description: 'Registro mediante formularios o proveedores compatibles según la infraestructura disponible.',
        },
        {
          title: 'Base de datos autorizada',
          description: 'Concentración de registros y sesiones respetando los avisos y consentimientos definidos.',
        },
        {
          title: 'Analítica de uso',
          description: 'Indicadores de conexiones, recurrencia, horarios y comportamiento general de visitantes.',
        },
        {
          title: 'Integración con red',
          description: 'Configuración con controladores compatibles, segmentación y reglas de acceso.',
        },
        {
          title: 'Administración y soporte',
          description: 'Acompañamiento para mantener el portal, la autenticación y la experiencia disponibles.',
        },
      ]}
    />
  )
}

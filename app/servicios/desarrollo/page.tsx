import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Desarrollo web y multiplataforma | Operadores AGO',
  description:
    'Desarrollo de páginas, sistemas, e-commerce y aplicaciones para web, Android e iOS, con integraciones y automatización a la medida.',
}

export default function DesarrolloPage() {
  return (
    <ServiceDetailPage
      eyebrow="Desarrollo y automatización"
      title="Software diseñado alrededor de"
      highlight="tu operación"
      description="Creamos soluciones web y multiplataforma para digitalizar procesos, atender clientes, vender, administrar información e integrar servicios sin depender de herramientas aisladas."
      benefits={[
        'Una experiencia coherente para clientes, colaboradores y administradores.',
        'Procesos conectados con menos captura repetida y menos errores manuales.',
        'Arquitectura preparada para crecer por módulos, usuarios o sucursales.',
        'Acompañamiento técnico desde el análisis hasta la puesta en producción.',
      ]}
      idealFor={[
        'Empresas con procesos manuales',
        'Comercios y restaurantes',
        'Plataformas SaaS',
        'Apps internas',
        'E-commerce',
        'Integraciones con APIs',
      ]}
      includes={[
        {
          title: 'Sitios y portales web',
          description: 'Páginas corporativas, portales de clientes, paneles administrativos y experiencias responsivas.',
        },
        {
          title: 'Apps multiplataforma',
          description: 'Aplicaciones para Android, iOS y web con una experiencia consistente entre dispositivos.',
        },
        {
          title: 'Sistemas a la medida',
          description: 'Flujos administrativos, clientes, inventario, reservas, reportes y reglas propias del negocio.',
        },
        {
          title: 'Integraciones',
          description: 'APIs, pagos, correo, mensajería, autenticación, bases de datos y plataformas externas.',
        },
        {
          title: 'Infraestructura cloud',
          description: 'Despliegue, dominios, certificados, contenedores, respaldos y observabilidad.',
        },
        {
          title: 'Mejora continua',
          description: 'Evolución por fases para priorizar valor, reducir riesgos y controlar el alcance.',
        },
      ]}
    />
  )
}

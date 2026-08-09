import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'Monitoreo de hardware | Operadores AGO',
  description:
    'Supervisión de servidores, CPU, memoria, discos, temperatura, conectividad y dispositivos para anticipar fallas de infraestructura.',
}

export default function MonitoreoHardwarePage() {
  return (
    <ServiceDetailPage
      serviceHref="/servicios/monitoreo-hardware"
      eyebrow="Monitoreo de hardware"
      title="Conoce el estado de tu infraestructura"
      highlight="en todo momento"
      description="Centralizamos indicadores de servidores y dispositivos para detectar saturación, fallas, desconexiones y condiciones anormales antes de que se conviertan en una interrupción mayor."
      benefits={[
        'Detección temprana de saturación, falta de espacio y pérdida de conectividad.',
        'Menor dependencia de revisiones manuales y reportes tardíos.',
        'Historial de capacidad para planear mantenimientos y ampliaciones.',
        'Alertas priorizadas según el impacto de cada equipo o servicio.',
      ]}
      idealFor={[
        'Servidores físicos',
        'VPS y hosts',
        'Switches y routers',
        'NAS y almacenamiento',
        'UPS y sensores',
        'Sucursales remotas',
      ]}
      includes={[
        {
          title: 'CPU y memoria',
          description: 'Uso, carga y tendencias para detectar saturación o procesos anormales.',
        },
        {
          title: 'Discos y almacenamiento',
          description: 'Espacio disponible, crecimiento y condiciones que requieren mantenimiento.',
        },
        {
          title: 'Temperatura y energía',
          description: 'Lecturas disponibles de sensores, UPS y condiciones ambientales compatibles.',
        },
        {
          title: 'Red y conectividad',
          description: 'Disponibilidad, latencia, interfaces y pérdida de comunicación con dispositivos.',
        },
        {
          title: 'Servicios críticos',
          description: 'Supervisión de procesos y puertos necesarios para la operación de cada sistema.',
        },
        {
          title: 'Tableros y alertas',
          description: 'Visualización central y notificaciones para responsables técnicos y operativos.',
        },
      ]}
    />
  )
}

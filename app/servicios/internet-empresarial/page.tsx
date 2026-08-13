import ServiceDetailPage from '@/components/service-detail-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Internet empresarial a la medida | Operadores AGO',
  description: 'Internet empresarial dimensionado según ubicación, capacidad, criticidad, continuidad y factibilidad técnica. Soluciones a la medida para empresas y sucursales.',
  path: '/servicios/internet-empresarial',
})

export default function InternetEmpresarialPage() {
  return (
    <ServiceDetailPage
      serviceHref="/servicios/internet-empresarial"
      eyebrow="Internet empresarial"
      title="Conectividad empresarial diseñada según"
      highlight="tu operación"
      description="No tratamos el Internet empresarial como un paquete residencial con otro nombre. Revisamos ubicación, capacidad, aplicaciones, criticidad y opciones disponibles para definir una solución a la medida."
      benefits={[
        'Capacidad alineada con usuarios, aplicaciones y tráfico real de la empresa.',
        'Alternativas de continuidad cuando una sola conexión no es suficiente.',
        'Factibilidad técnica revisada antes de definir el alcance comercial.',
        'Integración con la red local, WiFi, VPN y monitoreo cuando el proyecto lo requiere.',
      ]}
      idealFor={['Oficinas', 'Comercios', 'Industria', 'Hoteles', 'Sucursales', 'Operaciones críticas']}
      includes={[
        { title: 'Levantamiento de necesidad', description: 'Revisamos usuarios, aplicaciones, horarios, sedes y dependencia operativa de la conectividad.' },
        { title: 'Factibilidad por ubicación', description: 'Validamos opciones disponibles y restricciones técnicas antes de proponer una arquitectura.' },
        { title: 'Capacidad adecuada', description: 'Dimensionamos el enlace según demanda y no únicamente por una velocidad comercial.' },
        { title: 'Continuidad', description: 'Podemos diseñar enlaces alternos y failover cuando la operación no puede depender de una sola ruta.' },
        { title: 'Interconexión', description: 'Integramos VPN, LAN to LAN o radio enlaces cuando existen varias ubicaciones.' },
        { title: 'Monitoreo', description: 'Cuando aplica, incorporamos visibilidad sobre disponibilidad y estado de la conectividad.' },
      ]}
    />
  )
}

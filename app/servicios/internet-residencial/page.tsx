import ServiceDetailPage from '@/components/service-detail-page'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Internet residencial | Operadores AGO',
  description: 'Planes de Internet residencial con opciones de 20, 40 y 100 Mbps sujetas a cobertura, instalación y factibilidad técnica.',
  path: '/servicios/internet-residencial',
})

export default function InternetResidencialPage() {
  return (
    <ServiceDetailPage
      serviceHref="/servicios/internet-residencial"
      eyebrow="Internet residencial"
      title="Planes de Internet para conectar"
      highlight="tu hogar"
      description="Esta es la oferta residencial con precios publicados. La disponibilidad final depende de cobertura, instalación y factibilidad técnica en el domicilio."
      benefits={[
        'Opciones de velocidad para navegación, clases, entretenimiento y trabajo desde casa.',
        'Consumo ilimitado dentro de las condiciones del servicio contratado.',
        'Selección sencilla entre tres perfiles de uso residencial.',
        'Validación de cobertura antes de confirmar la instalación.',
      ]}
      idealFor={['Hogares', 'Home office', 'Streaming', 'Clases en línea', 'Gaming', 'Múltiples dispositivos']}
      plans={[
        { name: 'Plan Básico', price: '$220', description: '20 Mbps · Ilimitado', features: ['Navegación web', 'Redes sociales', 'Clases en línea'] },
        { name: 'Plan Familiar', price: '$299', description: '40 Mbps · Ilimitado', badge: 'Más popular', features: ['Streaming HD', 'Videollamadas', 'Múltiples dispositivos'] },
        { name: 'Plan Premium', price: '$699', description: '100 Mbps · Ilimitado', features: ['Streaming 4K', 'Home Office', 'Gaming', 'Hogares conectados'] },
      ]}
      includes={[
        { title: 'Validación de cobertura', description: 'Confirmamos disponibilidad antes de avanzar con la contratación.' },
        { title: 'Plan de velocidad', description: 'Seleccionas la opción que mejor corresponde al número de usuarios y tipo de uso.' },
        { title: 'Instalación', description: 'El alcance de instalación se confirma según las condiciones del domicilio y la tecnología disponible.' },
        { title: 'Conectividad residencial', description: 'La solución está orientada a uso en hogar y se mantiene separada de la oferta empresarial a la medida.' },
      ]}
    />
  )
}

import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/service-detail-page'

export const metadata: Metadata = {
  title: 'VPN empresarial | Operadores AGO',
  description:
    'VPN empresarial para conectar sucursales, usuarios remotos y servicios internos mediante WireGuard, IPSec y tecnologías compatibles.',
}

export default function VPNPage() {
  return (
    <ServiceDetailPage
      serviceHref="/servicios/vpn"
      eyebrow="VPN empresarial"
      title="Conecta sedes y usuarios sin exponer"
      highlight="servicios críticos"
      description="Diseñamos túneles y políticas de acceso para que sucursales, colaboradores y sistemas compartan los recursos necesarios mediante una arquitectura controlada y documentada."
      benefits={[
        'Tráfico cifrado entre ubicaciones y usuarios autorizados.',
        'Menor exposición de servicios internos directamente a Internet.',
        'Acceso centralizado a recursos seleccionados entre sucursales.',
        'Arquitectura preparada para agregar nuevas sedes o perfiles de acceso.',
      ]}
      idealFor={[
        'Empresas multisucursal',
        'Oficinas',
        'Comercios',
        'Industria',
        'Teletrabajo',
        'Servicios internos',
      ]}
      plans={[
        { name: 'VPN Starter', price: '$499', features: ['1 Router MikroTik incluido', '1 túnel VPN', 'Usuarios ilimitados', 'Acceso remoto seguro'] },
        { name: 'VPN Business', price: '$899', badge: 'Más popular', features: ['2 sucursales conectadas', 'VPN Site-to-Site', 'Monitoreo básico', 'Soporte empresarial'] },
        { name: 'VPN Corporate', price: '$1499', features: ['Hasta 5 sedes', 'WireGuard o IPSec', 'Monitoreo avanzado', 'Alta disponibilidad'] },
      ]}
      includes={[
        {
          title: 'Site-to-site',
          description: 'Túneles entre routers o firewalls para conectar redes de diferentes ubicaciones.',
        },
        {
          title: 'Acceso remoto',
          description: 'Perfiles para colaboradores o responsables técnicos que necesitan entrar a recursos específicos.',
        },
        {
          title: 'WireGuard e IPSec',
          description: 'Selección de tecnología según compatibilidad, seguridad, rendimiento y operación.',
        },
        {
          title: 'Políticas de acceso',
          description: 'Definición de redes, rutas y recursos que pueden comunicarse a través del túnel.',
        },
        {
          title: 'Alta disponibilidad',
          description: 'Opciones de redundancia y failover cuando la conectividad entre sedes es crítica.',
        },
        {
          title: 'Documentación',
          description: 'Registro de topología, direccionamiento, parámetros y criterios de mantenimiento.',
        },
      ]}
    />
  )
}

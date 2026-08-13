import Link from 'next/link'
import { EarthLockIcon, ExternalLink, MessageCircle } from 'lucide-react'
import { platforms } from '@/lib/site-data'
import { sectors } from '@/lib/sectors-data'
import { serviceCatalog } from '@/lib/service-relations'

const whatsappUrl =
  'https://wa.me/527713189879?text=Hola%2C%20vengo%20de%20la%20web%20de%20Operadores%20AGO%20y%20me%20gustar%C3%ADa%20conocer%20sus%20servicios.'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-7 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_.8fr_.8fr_.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-md"><EarthLockIcon className="h-4.5 w-4.5 text-white" /></span>
              <span className="font-bold text-slate-950">Operadores <span className="text-primary">AGO</span></span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">Conectividad, infraestructura, software y monitoreo organizados alrededor del sector y la necesidad de cada operación.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-700"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <Link href="/contacto" className="rounded-xl bg-slate-950 px-3.5 py-2 text-xs font-bold text-white">Solicitar diagnóstico</Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[11px] text-slate-400">
              {platforms.slice(0, 3).map((platform) => (
                <a key={platform.href} href={platform.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition hover:text-primary">{platform.name}<ExternalLink className="h-3 w-3" /></a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Sectores</h4>
            <ul className="mt-4 space-y-2.5">
              {sectors.slice(0, 4).map((sector) => <li key={sector.slug}><Link href={`/sectores/${sector.slug}`} className="text-sm text-slate-600 transition hover:text-primary">{sector.shortName}</Link></li>)}
              <li><Link href="/sectores" className="text-sm font-bold text-primary">Ver todos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Servicios</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceCatalog.slice(0, 4).map((service) => <li key={service.href}><Link href={service.href} className="text-sm text-slate-600 transition hover:text-primary">{service.shortTitle}</Link></li>)}
              <li><Link href="/servicios" className="text-sm font-bold text-primary">Catálogo guiado</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">AGO TECH</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/" className="text-sm text-slate-600 transition hover:text-primary">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-sm text-slate-600 transition hover:text-primary">Nosotros</Link></li>
              <li><Link href="/contacto" className="text-sm text-slate-600 transition hover:text-primary">Contacto</Link></li>
              <li><a href="mailto:contacto@operadoresago.com" className="text-sm text-slate-600 transition hover:text-primary">contacto@operadoresago.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-[11px] text-slate-400 sm:flex-row">
          <p>© {year} Operadores AGO. Todos los derechos reservados.</p>
          <p>Tecnología, conectividad e infraestructura en México.</p>
        </div>
      </div>
    </footer>
  )
}

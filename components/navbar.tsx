'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, EarthLockIcon, Menu, Network, X } from 'lucide-react'
import { sectors } from '@/lib/sectors-data'
import SectorIcon from '@/components/sector-icon'
import { serviceCatalog } from '@/lib/service-relations'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sectorMenuOpen, setSectorMenuOpen] = useState(false)
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let lastScroll = window.scrollY

    const onScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 40)
      setVisible(currentScroll < 100 || currentScroll < lastScroll)
      lastScroll = currentScroll
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
      if (window.innerWidth < 1024) {
        setSectorMenuOpen(false)
        setServiceMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -90, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen || sectorMenuOpen || serviceMenuOpen
          ? 'border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl'
          : 'bg-white/75 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-2">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="Operadores AGO, inicio">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-md transition-transform group-hover:scale-105">
              <EarthLockIcon className="h-4.5 w-4.5 text-primary-foreground" />
            </span>
            <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
              Operadores <span className="text-primary">AGO</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
            <Link href="/" className="group relative whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground">
              Inicio
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="relative" onMouseLeave={() => setSectorMenuOpen(false)}>
              <button
                type="button"
                onClick={() => { setSectorMenuOpen((open) => !open); setServiceMenuOpen(false) }}
                onMouseEnter={() => { setSectorMenuOpen(true); setServiceMenuOpen(false) }}
                aria-expanded={sectorMenuOpen}
                className="group relative inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sectores
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${sectorMenuOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {sectorMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-4 w-[620px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_25px_80px_rgba(15,23,42,.18)]"
                  >
                    <div className="grid grid-cols-2 gap-1.5">
                      {sectors.map((sector) => (
                        <Link
                          key={sector.slug}
                          href={`/sectores/${sector.slug}`}
                          onClick={() => setSectorMenuOpen(false)}
                          className="group/sector flex items-center gap-3 rounded-2xl p-3 transition hover:bg-slate-50"
                        >
                          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${sector.accent} text-white shadow-sm`}>
                            <SectorIcon icon={sector.icon} className="h-4 w-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-bold text-slate-900">{sector.shortName}</span>
                            <span className="mt-0.5 block truncate text-[10px] text-slate-500">{sector.visualLabel}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/sectores"
                      onClick={() => setSectorMenuOpen(false)}
                      className="mt-2 flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-xs font-bold text-white transition hover:bg-slate-800"
                    >
                      Ver todos los sectores
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" onMouseLeave={() => setServiceMenuOpen(false)}>
              <button
                type="button"
                onClick={() => { setServiceMenuOpen((open) => !open); setSectorMenuOpen(false) }}
                onMouseEnter={() => { setServiceMenuOpen(true); setSectorMenuOpen(false) }}
                aria-expanded={serviceMenuOpen}
                className="group relative inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Servicios
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${serviceMenuOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {serviceMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-4 w-[620px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_25px_80px_rgba(15,23,42,.18)]"
                  >
                    <div className="grid grid-cols-2 gap-1.5">
                      {serviceCatalog.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServiceMenuOpen(false)}
                          className="group/service flex items-start gap-3 rounded-2xl p-3 transition hover:bg-slate-50"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Network className="h-4 w-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-bold text-slate-900">{service.shortTitle}</span>
                            <span className="mt-0.5 block text-[10px] leading-4 text-slate-500">{service.category}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/servicios"
                      onClick={() => setServiceMenuOpen(false)}
                      className="mt-2 flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-xs font-bold text-white transition hover:bg-slate-800"
                    >
                      Abrir catálogo guiado
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Link
            href="/contacto"
            className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg lg:inline-flex"
          >
            Solicitar cotización
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto px-5 py-4">
              <Link href="/" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Inicio</Link>

              <div className="px-3 pb-1 pt-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Sectores</div>
              <div className="grid grid-cols-2 gap-1.5">
                {sectors.map((sector) => (
                  <Link
                    key={sector.slug}
                    href={`/sectores/${sector.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2.5 text-xs font-semibold text-slate-700"
                  >
                    <SectorIcon icon={sector.icon} className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="truncate">{sector.shortName}</span>
                  </Link>
                ))}
              </div>
              <Link href="/sectores" onClick={() => setMenuOpen(false)} className="mt-1 rounded-lg px-3 py-3 text-sm font-semibold text-primary">Ver todos los sectores</Link>

              <div className="my-2 border-t border-slate-100" />
              <div className="px-3 pb-1 pt-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Servicios</div>
              <div className="grid grid-cols-2 gap-1.5">
                {serviceCatalog.slice(0, 6).map((service) => (
                  <Link key={service.href} href={service.href} onClick={() => setMenuOpen(false)} className="rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2.5 text-xs font-semibold text-slate-700">
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
              <Link href="/servicios" onClick={() => setMenuOpen(false)} className="mt-1 rounded-lg px-3 py-3 text-sm font-semibold text-primary">Abrir catálogo guiado</Link>

              <div className="my-2 border-t border-slate-100" />
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-lg bg-primary px-5 py-3.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Solicitar cotización
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

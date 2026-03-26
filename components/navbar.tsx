'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Por qué nosotros', href: '#por-que-nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cerrar menú al cambiar tamaño de pantalla (responsive)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[oklch(0.07_0.01_250/0.9)] backdrop-blur-xl border-b border-[oklch(0.55_0.2_250/0.2)] shadow-[0_4px_24px_oklch(0.55_0.2_250/0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 py-2 sm:py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_16px_oklch(0.55_0.2_250/0.6)] group-hover:shadow-[0_0_24px_oklch(0.55_0.2_250/0.8)] transition-all duration-300">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-foreground fill-current" />
            </div>
            <span className="text-foreground font-bold text-base sm:text-lg tracking-tight">
              Operadores <span className="text-primary">AGO</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contacto"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-[oklch(0.62_0.2_250)] active:scale-95 transition-all duration-200 shadow-[0_0_16px_oklch(0.55_0.2_250/0.4)] hover:shadow-[0_0_24px_oklch(0.55_0.2_250/0.6)] whitespace-nowrap"
            >
              Solicitar cotización
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[oklch(0.07_0.01_250/0.97)] backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground py-3 border-b border-border/50 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-5 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
              >
                Solicitar cotización
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
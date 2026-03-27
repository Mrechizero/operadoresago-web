// components/whatsapp-button.tsx
'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Ocultar al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Número de WhatsApp (cambia por el tuyo)
  const phoneNumber = "527713189879" // código país + número
  const message = "Hola, vengo de la web de Operadores AGO y me gustaría solicitar una cotización."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          
          {/* Panel expandido */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-72 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-green-500 px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Operadores AGO</p>
                    <p className="text-white/80 text-xs">Normalmente responde en minutos</p>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-none px-3 py-2">
                      <p className="text-sm text-gray-700 dark:text-gray-200">
                        ¡Hola! 👋 ¿En qué podemos ayudarte? Déjanos tu mensaje y te contactamos.
                      </p>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 bg-green-500 hover:bg-green-600 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">Abrir WhatsApp</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition" />
                  </a>
                </div>

                {/* Footer */}
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-[10px] text-gray-400 text-center">
                    Respuesta garantizada en 24h
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón principal */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Contactar por WhatsApp"
          >
            {/* Efecto pulso */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
            
            {/* Icono */}
            <MessageCircle className="w-7 h-7 text-white" />
            
            {/* Badge de notificación */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-white text-[10px] font-bold items-center justify-center">
                1
              </span>
            </span>
          </button>
        </div>
      )}
    </AnimatePresence>
  )
}
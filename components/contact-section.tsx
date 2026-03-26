'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+52 (771) 318-9879', href: 'tel:+527713189879' },
  { icon: Mail, label: 'Correo electrónico', value: 'admin@operadoresago.com', href: 'mailto:admin@operadoresago.com' },
  { icon: MapPin, label: 'Ubicación', value: 'México', href: '#' },
]

// URL de Google Apps Script - REEMPLAZA CON TU URL REAL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/TU_ID_AQUI/exec'

interface FormData {
  nombre: string
  empresa: string
  telefono: string
  correo: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  empresa?: string
  correo?: string
  mensaje?: string
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  
  const [form, setForm] = useState<FormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    mensaje: '',
  })
  
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    // Validar nombre
    if (!form.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    } else if (form.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }
    
    // Validar empresa
    if (!form.empresa.trim()) {
      newErrors.empresa = 'La empresa es requerida'
    } else if (form.empresa.trim().length < 2) {
      newErrors.empresa = 'La empresa debe tener al menos 2 caracteres'
    }
    
    // Validar correo
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/
    if (!form.correo.trim()) {
      newErrors.correo = 'El correo electrónico es requerido'
    } else if (!emailRegex.test(form.correo.trim())) {
      newErrors.correo = 'Ingresa un correo electrónico válido'
    }
    
    // Validar mensaje
    if (!form.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    } else if (form.mensaje.trim().length < 10) {
      newErrors.mensaje = 'Por favor proporciona más detalles (mínimo 10 caracteres)'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    setError('')
    
    try {
      // Enviar a Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necesario para Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nombre: form.nombre.trim(),
          empresa: form.empresa.trim(),
          telefono: form.telefono.trim(),
          correo: form.correo.trim(),
          mensaje: form.mensaje.trim(),
          timestamp: new Date().toISOString(),
        }),
      })
      
      // Con no-cors, no podemos leer la respuesta, asumimos éxito
      setSubmitted(true)
      setForm({
        nombre: '',
        empresa: '',
        telefono: '',
        correo: '',
        mensaje: '',
      })
      
    } catch (err) {
      console.error('Error al enviar:', err)
      setError('Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente o contáctanos directamente por teléfono.')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm({
      nombre: '',
      empresa: '',
      telefono: '',
      correo: '',
      mensaje: '',
    })
    setErrors({})
    setError('')
  }

  return (
    <section id="contacto" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(to_right,transparent,oklch(0.55_0.2_250/0.3),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,oklch(0.55_0.2_250/0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Hablemos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-3 sm:mb-5 px-4">
            Solicita tu cotización
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Cuéntanos sobre tu proyecto. Nuestros ingenieros se pondrán en contacto contigo
            en menos de 24 horas para diseñar la solución ideal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5 sm:space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-7 space-y-5 sm:space-y-6">
              <h3 className="font-bold text-foreground text-base sm:text-lg">
                Información de contacto
              </h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-3 sm:gap-4 group hover:translate-x-0.5 transition-transform duration-200"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-foreground font-medium text-xs sm:text-sm break-all">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/25 bg-[oklch(0.55_0.2_250/0.07)] p-5 sm:p-6 lg:p-7">
              <p className="text-foreground font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                Respuesta garantizada
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Respondemos todas las solicitudes en un plazo máximo de 24 horas hábiles.
                Para urgencias llámanos directamente.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-primary/30 bg-[oklch(0.55_0.2_250/0.08)] p-8 sm:p-12 text-center"
              >
                <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-primary mx-auto mb-4 sm:mb-5" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                  Mensaje enviado con éxito
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed px-2">
                  Gracias por contactarnos. Un asesor de Operadores AGO se comunicará contigo
                  en las próximas 24 horas.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 sm:mt-7 px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all text-xs sm:text-sm"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-9 space-y-4 sm:space-y-5"
                noValidate
              >
                {/* Error general */}
                {error && (
                  <div className="flex items-center gap-2 rounded-xl bg-destructive/10 border border-destructive/30 p-3 sm:p-4">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive shrink-0" />
                    <p className="text-destructive text-xs sm:text-sm">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1">
                    <label htmlFor="nombre" className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className={`w-full rounded-xl border ${
                        errors.nombre ? 'border-destructive focus:ring-destructive/40' : 'border-border focus:ring-primary/40'
                      } bg-secondary/50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    />
                    {errors.nombre && (
                      <p className="text-destructive text-[10px] sm:text-xs mt-1">{errors.nombre}</p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="empresa" className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Empresa *
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Mi Empresa S.A. de C.V."
                      className={`w-full rounded-xl border ${
                        errors.empresa ? 'border-destructive focus:ring-destructive/40' : 'border-border focus:ring-primary/40'
                      } bg-secondary/50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    />
                    {errors.empresa && (
                      <p className="text-destructive text-[10px] sm:text-xs mt-1">{errors.empresa}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1">
                    <label htmlFor="telefono" className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+52 (000) 000-0000"
                      className="w-full rounded-xl border border-border bg-secondary/50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="correo" className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Correo electrónico *
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      required
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                      className={`w-full rounded-xl border ${
                        errors.correo ? 'border-destructive focus:ring-destructive/40' : 'border-border focus:ring-primary/40'
                      } bg-secondary/50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                    />
                    {errors.correo && (
                      <p className="text-destructive text-[10px] sm:text-xs mt-1">{errors.correo}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="mensaje" className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Describe tus necesidades de telecomunicaciones, la cantidad de usuarios, ubicaciones, etc."
                    className={`w-full rounded-xl border ${
                      errors.mensaje ? 'border-destructive focus:ring-destructive/40' : 'border-border focus:ring-primary/40'
                    } bg-secondary/50 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none`}
                  />
                  {errors.mensaje && (
                    <p className="text-destructive text-[10px] sm:text-xs mt-1">{errors.mensaje}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-[oklch(0.62_0.2_250)] active:scale-[0.99] disabled:opacity-70 transition-all shadow-[0_0_24px_oklch(0.55_0.2_250/0.35)] hover:shadow-[0_0_36px_oklch(0.55_0.2_250/0.55)] group"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
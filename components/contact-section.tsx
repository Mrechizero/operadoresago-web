'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+52 (771) 318-9879',
    href: 'tel:+527713189879'
  },
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: 'admin@operadoresago.com',
    href: 'mailto:admin@operadoresago.com'
  },
  {
    icon: MapPin,
    label: 'Cobertura',
    value: 'Toda la República Mexicana',
    href: undefined
  },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState({
    nombre: false,
    empresa: false,
    correo: false,
    mensaje: false
  })
  
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    servicio: 'Portal cautivo',
    mensaje: ''
  })
  
  const getValidationErrors = () => {
    const newErrors = { nombre: '', empresa: '', correo: '', mensaje: '' }
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/

    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es requerido'
    else if (form.nombre.trim().length < 2) newErrors.nombre = 'Mínimo 2 caracteres'
    else if (form.nombre.trim().length > 50) newErrors.nombre = 'Máximo 50 caracteres'

    if (!form.empresa.trim()) newErrors.empresa = 'La empresa es requerida'
    else if (form.empresa.trim().length < 2) newErrors.empresa = 'Mínimo 2 caracteres'

    if (!form.correo.trim()) newErrors.correo = 'El correo es requerido'
    else if (!emailRegex.test(form.correo.trim())) {
      newErrors.correo = 'Ingresa un correo válido (ej: nombre@empresa.com)'
    }

    if (!form.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido'
    else if (form.mensaje.trim().length < 10) {
      newErrors.mensaje = `Mínimo 10 caracteres (${form.mensaje.trim().length}/10)`
    } else if (form.mensaje.trim().length > 500) {
      newErrors.mensaje = `Máximo 500 caracteres (${form.mensaje.trim().length}/500)`
    }

    return newErrors
  }

  const validationErrors = getValidationErrors()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const validateForm = () => {
    const validationErrors = getValidationErrors()

    setTouched({ nombre: true, empresa: true, correo: true, mensaje: true })
    return Object.values(validationErrors).every((validationError) => !validationError)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    setError('')
    
    try {
      // Combinar empresa y teléfono dentro del mensaje
      const mensajeCompleto = `
📋 DATOS DE CONTACTO:
━━━━━━━━━━━━━━━━━━━━━
🏢 Empresa: ${form.empresa || 'No especificada'}
📞 Teléfono: ${form.telefono || 'No especificado'}
🧭 Servicio de interés: ${form.servicio}

💬 MENSAJE:
━━━━━━━━━━━━━━━━━━━━━
${form.mensaje}
      `.trim()
      
      // Payload compatible con el backend existente
      const payload = {
        name: form.nombre.trim(),
        email: form.correo.trim(),
        message: mensajeCompleto
      }
      
      // ✅ Usando ruta relativa (mismo dominio, evita Mixed Content)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Error al enviar')
      }
      
      setSubmitted(true)
      setForm({ nombre: '', empresa: '', telefono: '', correo: '', servicio: 'Portal cautivo', mensaje: '' })
      setTouched({ nombre: false, empresa: false, correo: false, mensaje: false })
      
    } catch (err) {
      console.error('Error:', err)
      setError('Error al enviar. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setForm({ nombre: '', empresa: '', telefono: '', correo: '', servicio: 'Portal cautivo', mensaje: '' })
    setTouched({ nombre: false, empresa: false, correo: false, mensaje: false })
    setError('')
  }

  const isFormValid = () =>
    Object.values(getValidationErrors()).every((validationError) => !validationError)

  return (
    <section id="contacto" className="py-20 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Hablemos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-3 sm:mb-5">
            Solicita tu cotización
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Cuéntanos qué necesitas y prepararemos una ruta clara para tu portal cautivo, red WiFi, infraestructura o desarrollo tecnológico.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">

  <div className="mb-8">
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
      Contacto directo
    </span>

    <h3 className="mt-4 text-2xl font-bold">
      Hablemos de tu proyecto
    </h3>

    <p className="mt-3 text-muted-foreground">
      Podemos ayudarte con portal cautivo, WiFi administrado, redes de datos, software, monitoreo y proyectos de infraestructura tecnológica.
    </p>
  </div>

  <div className="space-y-5">
    {contactInfo.map(({ icon: Icon, label, value, href }) => {
      const content = (
        <>
          <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
            <p className="text-foreground font-medium">{value}</p>
          </div>
        </>
      )

      return href ? (
        <a key={label} href={href} className="flex items-start gap-4 group hover:translate-x-1 transition">
          {content}
        </a>
      ) : (
        <div key={label} className="flex items-start gap-4">{content}</div>
      )
    })}
  </div>

  

</div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h3>
                <p className="text-muted-foreground mb-6">
                  Gracias por contactarnos. Revisaremos tu solicitud y nos comunicaremos contigo a la brevedad.
                </p>
                <button
                  onClick={resetForm}
                  className="px-5 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-5 sm:p-6 lg:p-8 space-y-4">
                
                {error && (
                  <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/30 p-3 rounded-xl">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase block mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Juan Pérez"
                      className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.nombre && validationErrors.nombre
                          ? 'border-destructive focus:ring-destructive/40 bg-destructive/5'
                          : touched.nombre && !validationErrors.nombre && form.nombre
                          ? 'border-green-500 focus:ring-green-500/40 bg-green-500/5'
                          : 'border-border bg-secondary/50 focus:ring-primary/40'
                      }`}
                    />
                    {touched.nombre && validationErrors.nombre && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.nombre}
                      </p>
                    )}
                    {touched.nombre && !validationErrors.nombre && form.nombre && (
                      <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Válido
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase block mb-1">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Mi Empresa S.A."
                      className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.empresa && validationErrors.empresa
                          ? 'border-destructive focus:ring-destructive/40 bg-destructive/5'
                          : touched.empresa && !validationErrors.empresa && form.empresa
                          ? 'border-green-500 focus:ring-green-500/40 bg-green-500/5'
                          : 'border-border bg-secondary/50 focus:ring-primary/40'
                      }`}
                    />
                    {touched.empresa && validationErrors.empresa && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.empresa}
                      </p>
                    )}
                    {touched.empresa && !validationErrors.empresa && form.empresa && (
                      <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Válido
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase block mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+52 (000) 000-0000"
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase block mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="correo"
                      value={form.correo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="juan@empresa.com"
                      className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                        touched.correo && validationErrors.correo
                          ? 'border-destructive focus:ring-destructive/40 bg-destructive/5'
                          : touched.correo && !validationErrors.correo && form.correo
                          ? 'border-green-500 focus:ring-green-500/40 bg-green-500/5'
                          : 'border-border bg-secondary/50 focus:ring-primary/40'
                      }`}
                    />
                    {touched.correo && validationErrors.correo && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {validationErrors.correo}
                      </p>
                    )}
                    {touched.correo && !validationErrors.correo && form.correo && (
                      <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Correo válido
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase block mb-1">
                    Servicio de interés
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <option>Portal cautivo</option>
                    <option>WiFi administrado</option>
                    <option>Diseño e implementación de redes</option>
                    <option>Desarrollo web o aplicación</option>
                    <option>Monitoreo tecnológico</option>
                    <option>Otro servicio</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase block mb-1">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe el servicio que buscas, el problema actual, cantidad de usuarios, ubicaciones o alcance esperado."
                    className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 resize-none ${
                      touched.mensaje && validationErrors.mensaje
                        ? 'border-destructive focus:ring-destructive/40 bg-destructive/5'
                        : touched.mensaje && !validationErrors.mensaje && form.mensaje
                        ? 'border-green-500 focus:ring-green-500/40 bg-green-500/5'
                        : 'border-border bg-secondary/50 focus:ring-primary/40'
                    }`}
                  />
                  {touched.mensaje && validationErrors.mensaje && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.mensaje}
                    </p>
                  )}
                  {touched.mensaje && !validationErrors.mensaje && form.mensaje && (
                    <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Mensaje válido
                    </p>
                  )}
                  {form.mensaje && !validationErrors.mensaje && (
                    <p className="text-muted-foreground text-xs mt-1 text-right">
                      {form.mensaje.trim().length}/500 caracteres
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading || !isFormValid()}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
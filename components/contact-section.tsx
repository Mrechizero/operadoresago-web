'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+52 (771) 318-9879', href: 'tel:+527713189879' },
  { icon: Mail, label: 'Correo electrónico', value: 'admin@operadoresago.com', href: 'mailto:admin@operadoresago.com' },
  { icon: MapPin, label: 'Ubicación', value: 'México', href: '#' },
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
    mensaje: ''
  })
  
  const [errors, setErrors] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    mensaje: ''
  })

  // Validación en tiempo real
  useEffect(() => {
    const newErrors = { nombre: '', empresa: '', correo: '', mensaje: '' }
    
    if (touched.nombre) {
      if (!form.nombre.trim()) {
        newErrors.nombre = 'El nombre es requerido'
      } else if (form.nombre.trim().length < 2) {
        newErrors.nombre = 'Mínimo 2 caracteres'
      } else if (form.nombre.trim().length > 50) {
        newErrors.nombre = 'Máximo 50 caracteres'
      }
    }
    
    if (touched.empresa) {
      if (!form.empresa.trim()) {
        newErrors.empresa = 'La empresa es requerida'
      } else if (form.empresa.trim().length < 2) {
        newErrors.empresa = 'Mínimo 2 caracteres'
      }
    }
    
    if (touched.correo) {
      const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/
      if (!form.correo.trim()) {
        newErrors.correo = 'El correo es requerido'
      } else if (!emailRegex.test(form.correo.trim())) {
        newErrors.correo = 'Ingresa un correo válido (ej: nombre@empresa.com)'
      }
    }
    
    if (touched.mensaje) {
      if (!form.mensaje.trim()) {
        newErrors.mensaje = 'El mensaje es requerido'
      } else if (form.mensaje.trim().length < 10) {
        newErrors.mensaje = `Mínimo 10 caracteres (${form.mensaje.trim().length}/10)`
      } else if (form.mensaje.trim().length > 500) {
        newErrors.mensaje = `Máximo 500 caracteres (${form.mensaje.trim().length}/500)`
      }
    }
    
    setErrors(newErrors)
  }, [form, touched])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
  }

  const validateForm = () => {
    setTouched({
      nombre: true,
      empresa: true,
      correo: true,
      mensaje: true
    })
    
    return !errors.nombre && !errors.empresa && !errors.correo && !errors.mensaje
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
      setForm({ nombre: '', empresa: '', telefono: '', correo: '', mensaje: '' })
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
    setForm({ nombre: '', empresa: '', telefono: '', correo: '', mensaje: '' })
    setErrors({ nombre: '', empresa: '', correo: '', mensaje: '' })
    setTouched({ nombre: false, empresa: false, correo: false, mensaje: false })
    setError('')
  }

  const isFormValid = () => {
    return (
      form.nombre.trim().length >= 2 &&
      form.empresa.trim().length >= 2 &&
      /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(form.correo.trim()) &&
      form.mensaje.trim().length >= 10 &&
      form.mensaje.trim().length <= 500
    )
  }

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
            Cuéntanos sobre tu proyecto. Te contactaremos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <h3 className="font-bold text-foreground mb-5">Información de contacto</h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-3 mb-4 group hover:translate-x-0.5 transition">
                  <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">{label}</p>
                    <p className="text-foreground text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h3>
                <p className="text-muted-foreground mb-6">
                  Gracias por contactarnos. Un asesor se comunicará contigo en las próximas 24 horas.
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
                        touched.nombre && errors.nombre
                          ? 'border-destructive focus:ring-destructive/40 bg-destructive/5'
                          : touched.nombre && !errors.nombre && form.nombre
                          ? 'border-green-500 focus:ring-green-500/40 bg-green-500/5'
                          : 'border-border bg-secondary/50 focus:ring-primary/40'
                      }`}
                    />
                    {touched.nombre && errors.nombre && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.nombre}
                      </p>
                    )}
                    {touched.nombre && !errors.nombre && form.nombre && (
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
                        touched.empresa && errors.empresa
                          ? 'border-destructive focus:ring-destructive/40 bg-destructive/5'
                          : touched.empresa && !errors.empresa && form.empresa
                          ? 'border-green-500 focus:ring-green-500/40 bg-green-500/5'
                          : 'border-border bg-secondary/50 focus:ring-primary/40'
                      }`}
                    />
                    {touched.empresa && errors.empresa && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.empresa}
                      </p>
                    )}
                    {touched.empresa && !errors.empresa && form.empresa && (
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
                        touched.correo && errors.correo
                          ? 'border-destructive focus:ring-destructive/40 bg-destructive/5'
                          : touched.correo && !errors.correo && form.correo
                          ? 'border-green-500 focus:ring-green-500/40 bg-green-500/5'
                          : 'border-border bg-secondary/50 focus:ring-primary/40'
                      }`}
                    />
                    {touched.correo && errors.correo && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.correo}
                      </p>
                    )}
                    {touched.correo && !errors.correo && form.correo && (
                      <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Correo válido
                      </p>
                    )}
                  </div>
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
                    placeholder="Describe tus necesidades de telecomunicaciones, cantidad de usuarios, ubicaciones, etc."
                    className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 resize-none ${
                      touched.mensaje && errors.mensaje
                        ? 'border-destructive focus:ring-destructive/40 bg-destructive/5'
                        : touched.mensaje && !errors.mensaje && form.mensaje
                        ? 'border-green-500 focus:ring-green-500/40 bg-green-500/5'
                        : 'border-border bg-secondary/50 focus:ring-primary/40'
                    }`}
                  />
                  {touched.mensaje && errors.mensaje && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.mensaje}
                    </p>
                  )}
                  {touched.mensaje && !errors.mensaje && form.mensaje && (
                    <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Mensaje válido
                    </p>
                  )}
                  {form.mensaje && !errors.mensaje && (
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
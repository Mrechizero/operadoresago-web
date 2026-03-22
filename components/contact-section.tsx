'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+52 (000) 000-0000' },
  { icon: Mail, label: 'Correo electrónico', value: 'contacto@operadoresago.com' },
  { icon: MapPin, label: 'Ubicación', value: 'México' },
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    mensaje: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(to_right,transparent,oklch(0.55_0.2_250/0.3),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,oklch(0.55_0.2_250/0.06),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Hablemos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-5">
            Solicita tu cotización
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cuéntanos sobre tu proyecto. Nuestros ingenieros se pondrán en contacto contigo
            en menos de 24 horas para diseñar la solución ideal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card p-7 space-y-6">
              <h3 className="font-bold text-foreground text-lg">Información de contacto</h3>
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-foreground font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/25 bg-[oklch(0.55_0.2_250/0.07)] p-7">
              <p className="text-foreground font-semibold mb-2">Respuesta garantizada</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
                className="rounded-2xl border border-primary/30 bg-[oklch(0.55_0.2_250/0.08)] p-12 text-center"
              >
                <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-5" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Mensaje enviado con éxito
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gracias por contactarnos. Un asesor de Operadores AGO se comunicará contigo
                  en las próximas 24 horas.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ nombre: '', empresa: '', telefono: '', correo: '', mensaje: '' }) }}
                  className="mt-7 px-6 py-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all text-sm"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-7 lg:p-9 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="nombre" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="empresa" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="telefono" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+52 (000) 000-0000"
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="correo" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
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
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="mensaje" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Describe tus necesidades de telecomunicaciones, la cantidad de usuarios, ubicaciones, etc."
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-[oklch(0.62_0.2_250)] active:scale-[0.99] disabled:opacity-70 transition-all shadow-[0_0_24px_oklch(0.55_0.2_250/0.35)] hover:shadow-[0_0_36px_oklch(0.55_0.2_250/0.55)] group"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

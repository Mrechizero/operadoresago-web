'use client'

import { useEffect, useState } from 'react'
import { AlertCircle, CheckCircle, CheckCircle2, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import { sectors } from '@/lib/sectors-data'
import { contactServiceValues, isContactServiceValue } from '@/lib/service-relations'

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+52 (771) 318-9879', href: 'tel:+527713189879' },
  { icon: Mail, label: 'Correo electrónico', value: 'contacto@operadoresago.com', href: 'mailto:contacto@operadoresago.com' },
  { icon: MapPin, label: 'Cobertura', value: 'Toda la República Mexicana', href: undefined },
]

const defaultForm = {
  nombre: '',
  empresa: '',
  telefono: '',
  correo: '',
  servicio: 'Portal cautivo',
  sector: 'No especificado',
  necesidad: '',
  mensaje: '',
  website: '',
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [confirmationSent, setConfirmationSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sourcePath, setSourcePath] = useState('/contacto')
  const [touched, setTouched] = useState({ nombre: false, empresa: false, correo: false, mensaje: false })
  const [form, setForm] = useState(defaultForm)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const url = new URL(window.location.href)
      const service = url.searchParams.get('service')
      const sectorSlug = url.searchParams.get('sector')
      const need = url.searchParams.get('need')
      const matchedSector = sectors.find((sector) => sector.slug === sectorSlug)

      setSourcePath(`${url.pathname}${url.search}`.slice(0, 240))
      setForm((previous) => ({
        ...previous,
        servicio: service && isContactServiceValue(service) ? service : previous.servicio,
        sector: matchedSector?.name ?? previous.sector,
        necesidad: need?.slice(0, 120) ?? previous.necesidad,
      }))
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  const getValidationErrors = () => {
    const validation = { nombre: '', empresa: '', correo: '', mensaje: '' }
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/

    if (!form.nombre.trim()) validation.nombre = 'El nombre es requerido'
    else if (form.nombre.trim().length < 2) validation.nombre = 'Mínimo 2 caracteres'
    else if (form.nombre.trim().length > 50) validation.nombre = 'Máximo 50 caracteres'

    if (!form.empresa.trim()) validation.empresa = 'La empresa es requerida'
    else if (form.empresa.trim().length < 2) validation.empresa = 'Mínimo 2 caracteres'

    if (!form.correo.trim()) validation.correo = 'El correo es requerido'
    else if (!emailRegex.test(form.correo.trim())) validation.correo = 'Ingresa un correo válido (ej: nombre@empresa.com)'

    if (!form.mensaje.trim()) validation.mensaje = 'El mensaje es requerido'
    else if (form.mensaje.trim().length < 10) validation.mensaje = `Mínimo 10 caracteres (${form.mensaje.trim().length}/10)`
    else if (form.mensaje.trim().length > 500) validation.mensaje = `Máximo 500 caracteres (${form.mensaje.trim().length}/500)`

    return validation
  }

  const validationErrors = getValidationErrors()
  const isFormValid = () => Object.values(getValidationErrors()).every((validationError) => !validationError)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target
    setTouched((previous) => ({ ...previous, [name]: true }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setTouched({ nombre: true, empresa: true, correo: true, mensaje: true })
    if (!isFormValid()) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nombre.trim(),
          company: form.empresa.trim(),
          phone: form.telefono.trim(),
          email: form.correo.trim(),
          service: form.servicio,
          sector: form.sector,
          need: form.necesidad.trim(),
          sourcePath,
          message: form.mensaje.trim(),
          website: form.website,
        }),
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Error al enviar')

      setConfirmationSent(result.confirmationSent === true)
      setSubmitted(true)
      setForm((previous) => ({
        ...previous,
        nombre: '',
        empresa: '',
        telefono: '',
        correo: '',
        mensaje: '',
        website: '',
      }))
      setTouched({ nombre: false, empresa: false, correo: false, mensaje: false })
    } catch (submitError) {
      console.error('Error:', submitError)
      setError('Error al enviar. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setConfirmationSent(false)
    setError('')
  }

  const hasContext = form.sector !== 'No especificado' || Boolean(form.necesidad)

  return (
    <section id="contacto" className="relative px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
        <aside className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,.13)] sm:p-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/15 bg-blue-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-blue-300">
            <Sparkles className="h-3.5 w-3.5" /> Contacto directo
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-[-0.03em]">Cuéntanos la operación, no solo el producto.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">Si vienes desde un sector o servicio, conservamos ese contexto para que la solicitud llegue mejor clasificada.</p>

          {hasContext && (
            <div className="mt-5 rounded-2xl border border-blue-300/15 bg-blue-400/10 p-4">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-blue-300">Contexto detectado</p>
              <p className="mt-2 text-sm font-bold text-white">{form.sector}</p>
              {form.necesidad && <p className="mt-1 text-xs leading-5 text-slate-300">Necesidad: {form.necesidad}</p>}
            </div>
          )}

          <div className="mt-7 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.07]"><Icon className="h-4.5 w-4.5 text-blue-300" /></span>
                  <span><span className="block text-[9px] font-black uppercase tracking-[0.14em] text-white/35">{label}</span><span className="mt-1 block text-sm font-bold text-white/85">{value}</span></span>
                </>
              )
              return href ? <a key={label} href={href} className="flex items-center gap-3 transition hover:translate-x-1">{content}</a> : <div key={label} className="flex items-center gap-3">{content}</div>
            })}
          </div>
        </aside>

        <div>
          {submitted ? (
            <div role="status" aria-live="polite" className="rounded-[1.75rem] border border-primary/25 bg-white p-8 text-center shadow-sm sm:p-12">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950">¡Solicitud recibida!</h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">Revisaremos la información y nos comunicaremos contigo a la brevedad.</p>
              {confirmationSent && <p className="mt-3 text-sm font-bold text-primary">También enviamos una confirmación al correo que registraste.</p>}
              <button onClick={resetForm} className="mt-6 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-primary/30 hover:text-primary">Enviar otra solicitud</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Sitio web</label>
                <input id="website" type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>

              {error && <div role="alert" className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 p-3"><AlertCircle className="h-4 w-4 text-destructive" /><p className="text-sm text-destructive">{error}</p></div>}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field htmlFor="nombre" label="Nombre completo *" error={touched.nombre ? validationErrors.nombre : ''} valid={touched.nombre && !validationErrors.nombre && Boolean(form.nombre)}>
                  <input id="nombre" type="text" name="nombre" autoComplete="name" value={form.nombre} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(touched.nombre && validationErrors.nombre)} aria-describedby={touched.nombre && validationErrors.nombre ? 'nombre-error' : undefined} placeholder="Juan Pérez" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary/35 focus:ring-2 focus:ring-primary/15" />
                </Field>
                <Field htmlFor="empresa" label="Empresa *" error={touched.empresa ? validationErrors.empresa : ''} valid={touched.empresa && !validationErrors.empresa && Boolean(form.empresa)}>
                  <input id="empresa" type="text" name="empresa" autoComplete="organization" value={form.empresa} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(touched.empresa && validationErrors.empresa)} aria-describedby={touched.empresa && validationErrors.empresa ? 'empresa-error' : undefined} placeholder="Mi Empresa S.A." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary/35 focus:ring-2 focus:ring-primary/15" />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field htmlFor="telefono" label="Teléfono">
                  <input id="telefono" type="tel" name="telefono" autoComplete="tel" inputMode="tel" value={form.telefono} onChange={handleChange} placeholder="+52 (000) 000-0000" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary/35 focus:ring-2 focus:ring-primary/15" />
                </Field>
                <Field htmlFor="correo" label="Correo electrónico *" error={touched.correo ? validationErrors.correo : ''} valid={touched.correo && !validationErrors.correo && Boolean(form.correo)}>
                  <input id="correo" type="email" name="correo" autoComplete="email" inputMode="email" value={form.correo} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(touched.correo && validationErrors.correo)} aria-describedby={touched.correo && validationErrors.correo ? 'correo-error' : undefined} placeholder="juan@empresa.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary/35 focus:ring-2 focus:ring-primary/15" />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field htmlFor="servicio" label="Servicio de interés">
                  <select id="servicio" name="servicio" value={form.servicio} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary/35 focus:ring-2 focus:ring-primary/15">
                    {contactServiceValues.map((service) => <option key={service}>{service}</option>)}
                  </select>
                </Field>
                <Field htmlFor="sector" label="Sector">
                  <select id="sector" name="sector" value={form.sector} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary/35 focus:ring-2 focus:ring-primary/15">
                    <option>No especificado</option>
                    {sectors.map((sector) => <option key={sector.slug} value={sector.name}>{sector.name}</option>)}
                    <option>Otro sector</option>
                  </select>
                </Field>
              </div>

              {form.necesidad && (
                <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-xs font-bold text-blue-800">Necesidad seleccionada: {form.necesidad}</div>
              )}

              <Field htmlFor="mensaje" label="Cuéntanos sobre tu proyecto *" error={touched.mensaje ? validationErrors.mensaje : ''} valid={touched.mensaje && !validationErrors.mensaje && Boolean(form.mensaje)}>
                <textarea id="mensaje" name="mensaje" rows={4} maxLength={500} value={form.mensaje} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(touched.mensaje && validationErrors.mensaje)} aria-describedby={touched.mensaje && validationErrors.mensaje ? 'mensaje-error' : undefined} placeholder="Describe qué está pasando, cuántas ubicaciones tienes, qué quieres mejorar o qué resultado esperas." className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-primary/35 focus:ring-2 focus:ring-primary/15" />
              </Field>

              <button type="submit" disabled={loading || !isFormValid()} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white transition hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50">
                {loading ? <><span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Enviando...</> : <>Enviar solicitud <Send className="h-4 w-4" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ htmlFor, label, error, valid, children }: { htmlFor: string; label: string; error?: string; valid?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.12em] text-slate-500">{label}</label>
      {children}
      {error && <p id={`${htmlFor}-error`} className="mt-1 flex items-center gap-1 text-xs text-destructive"><AlertCircle aria-hidden="true" className="h-3 w-3" />{error}</p>}
      {!error && valid && <p className="mt-1 flex items-center gap-1 text-xs text-emerald-600"><CheckCircle aria-hidden="true" className="h-3 w-3" />Válido</p>}
    </div>
  )
}

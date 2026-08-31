import Link from 'next/link'
import { Activity, ArrowRight, BarChart3, BellRing, BrainCircuit, Check, FileText, Gauge, MapPin, ShieldCheck, Smartphone, Sparkles, Zap } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { EnergiaDisclaimer, EnergiaMark } from '@/components/energia-shell'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Energia | Monitorea y entiende tu consumo eléctrico',
  description: 'Energia, la aplicación de AGO TECH para registrar lecturas, analizar recibos y entender mejor el consumo eléctrico.',
  path: '/energia',
  imageAlt: 'Energia, aplicación de AGO TECH para análisis de consumo eléctrico',
  keywords: ['Energia AGO TECH', 'consumo eléctrico', 'análisis de recibos', 'monitoreo de energía'],
})

const features = [
  { icon: Gauge, title: 'Lecturas con contexto', text: 'Registra lecturas acumuladas y consulta la evolución histórica de cada medidor.' },
  { icon: BrainCircuit, title: 'Predicción y ritmo', text: 'Obtén predicciones de consumo y una recomendación dinámica para tu siguiente lectura.' },
  { icon: Activity, title: 'Patrones visibles', text: 'Identifica consumo fuera del patrón habitual y recibe señales para revisar tu operación.' },
  { icon: MapPin, title: 'Varias ubicaciones', text: 'Organiza múltiples ubicaciones y medidores desde una misma aplicación.' },
  { icon: Zap, title: 'Aparatos eléctricos', text: 'Registra aparatos y consulta estimaciones de consumo por aparato.' },
  { icon: BellRing, title: 'Alertas útiles', text: 'Recibe recomendaciones para tomar decisiones con información más clara.' },
]

const steps = ['Registra tu medidor.', 'Captura lecturas o recibos.', 'Energia analiza la información.', 'Revisa tendencias, alertas y recomendaciones.']

export default function EnergiaPage() {
  return <>
    <Navbar />
    <main id="contenido-principal" tabIndex={-1} className="min-h-screen bg-slate-50 pt-18">
      <section className="relative overflow-hidden bg-white px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(59,130,246,.14),transparent_32%),radial-gradient(circle_at_92%_8%,rgba(124,58,237,.13),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div>
            <EnergiaMark />
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-blue-700"><Sparkles className="h-4 w-4" /> AGO TECH</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[.98] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">Conoce tu consumo. <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Decide mejor.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Energia te ayuda a registrar, entender y analizar tu consumo eléctrico para convertir tus datos en acciones más conscientes.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#caracteristicas" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5">Explorar Energia <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
              <Link href="/energia/privacidad" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-primary">Conocer la privacidad</Link>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500"><Smartphone className="h-4 w-4 text-primary" /> Aplicación Android disponible actualmente en fase de pruebas de Google Play.</p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white bg-slate-950 p-4 shadow-2xl shadow-indigo-900/20">
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6 text-white">
                <div className="flex items-start justify-between"><div><p className="text-xs font-semibold text-white/70">Consumo acumulado</p><p className="mt-2 text-4xl font-black tracking-tight">284 <span className="text-base font-bold text-white/70">kWh</span></p></div><span className="rounded-xl bg-white/15 p-3"><BarChart3 className="h-5 w-5" /></span></div>
                <div className="mt-10 flex h-32 items-end gap-2" aria-label="Gráfica ilustrativa de consumo"><span className="h-[38%] flex-1 rounded-t-lg bg-white/30" /><span className="h-[52%] flex-1 rounded-t-lg bg-white/40" /><span className="h-[45%] flex-1 rounded-t-lg bg-white/35" /><span className="h-[68%] flex-1 rounded-t-lg bg-white/55" /><span className="h-[60%] flex-1 rounded-t-lg bg-white/60" /><span className="h-[82%] flex-1 rounded-t-lg bg-white" /><span className="h-[74%] flex-1 rounded-t-lg bg-white/75" /></div>
                <div className="mt-5 flex items-center justify-between text-xs text-white/65"><span>Historial</span><span>Últimas lecturas</span></div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white/10 p-4 text-white"><p className="text-[10px] uppercase tracking-wider text-white/50">Siguiente lectura</p><p className="mt-2 text-sm font-bold">En 4 días</p></div><div className="rounded-2xl bg-white/10 p-4 text-white"><p className="text-[10px] uppercase tracking-wider text-white/50">Patrón</p><p className="mt-2 text-sm font-bold text-emerald-300">Dentro de lo habitual</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="caracteristicas" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Todo en un mismo lugar</p><h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl">Una lectura más completa de tu energía.</h2><p className="mt-4 leading-7 text-slate-600">Registra lo que ocurre, consulta tendencias y recibe señales que te ayudan a entender mejor tus hábitos.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary"><Icon className="h-5 w-5" /></div><h3 className="mt-5 font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Cómo funciona</p><h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-950 sm:text-4xl">De la lectura a una decisión más informada.</h2></div><ol className="grid gap-3 sm:grid-cols-2">{steps.map((step, index) => <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">{index + 1}</span><span className="pt-1 text-sm font-bold leading-6 text-slate-700">{step}</span></li>)}</ol></div></section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10"><FileText className="h-5 w-5" /></div><h2 className="mt-6 text-2xl font-black tracking-[-0.03em]">Tus recibos también cuentan la historia.</h2><p className="mt-3 text-sm leading-7 text-slate-300">Carga recibos PDF o fotografías. Energia puede extraer la información con procesamiento automático y OCR cuando es necesario, para construir un historial más completo.</p><div className="mt-6 space-y-3 text-sm text-slate-200"><p className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" /> Revisa manualmente lo extraído antes de confirmarlo.</p><p className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" /> Consulta información histórica obtenida de tus recibos.</p></div></article><article className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-7 sm:p-9"><ShieldCheck className="h-6 w-6 text-primary" /><h2 className="mt-6 text-2xl font-black tracking-[-0.03em] text-slate-950">Información bajo tu control.</h2><p className="mt-3 text-sm leading-7 text-slate-600">La aplicación está pensada para que revises tus datos, entiendas cómo se procesan y gestiones tu cuenta con claridad.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/energia/privacidad" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:text-primary">Leer política de privacidad <ArrowRight className="h-4 w-4" /></Link><Link href="/energia/eliminar-cuenta" className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-white">Eliminar cuenta</Link></div></article></div></section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"><div className="mx-auto max-w-4xl"><p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Preguntas frecuentes</p><h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-slate-950">Lo esencial, claro.</h2><div className="mt-8 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">{[['¿Energia es parte de CFE?', 'No. Energia es independiente y fue desarrollada por AGO TECH. No está afiliada, patrocinada ni representa oficialmente a CFE.'], ['¿Puedo administrar más de un medidor?', 'Sí. Puedes organizar múltiples ubicaciones y múltiples medidores dentro de tu cuenta.'], ['¿La aplicación sustituye una medición oficial?', 'No. Energia es una herramienta de monitoreo y análisis basada en la información que registras o cargas.'], ['¿Puedo revisar antes de guardar la información de un recibo?', 'Sí. La información extraída de documentos debe revisarse manualmente antes de confirmarla.']].map(([question, answer]) => <details key={question} className="group p-5"><summary className="cursor-pointer list-none pr-8 font-bold text-slate-900 marker:hidden">{question}<span className="float-right text-xl text-primary transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{answer}</p></details>)}</div></div></section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8"><div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 p-8 text-center text-white sm:p-12"><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">Empieza a entender mejor tu consumo.</h2><p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-blue-100">Conoce tus tendencias, revisa tus datos y toma decisiones con más información.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contacto" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-black text-indigo-700 transition hover:-translate-y-0.5">Solicitar información <ArrowRight className="h-4 w-4" /></Link><Link href="/energia/eliminar-cuenta" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Gestión de cuenta</Link></div></div><div className="mx-auto mt-8 max-w-4xl"><EnergiaDisclaimer /></div></section>
    </main><Footer />
  </>
}

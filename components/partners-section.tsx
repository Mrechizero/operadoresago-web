'use client'

import { motion } from 'framer-motion'

const brands = [
  'MikroTik',
  'Grandstream',
  'Yeastar',
  'Fortinet',
  'Cisco',
  'Ubiquiti',
  'TP-Link',
  'Hikvision',
]

export default function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Tecnologías con las que construimos soluciones
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand) => (
            <motion.div
              key={brand}
              whileHover={{ y: -4 }}
              className="h-20 rounded-xl border border-border bg-card flex items-center justify-center font-semibold text-muted-foreground hover:text-primary transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              {brand}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
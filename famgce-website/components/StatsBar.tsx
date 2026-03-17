'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

interface StatProps {
  number: number
  suffix: string
  label: string
  showDivider?: boolean
}

function Counter({ number, suffix, label, showDivider }: StatProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, number, { duration: 2, ease: 'easeOut' })
      return controls.stop
    }
  }, [inView, count, number])

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center py-6 group">
      <div className="flex items-center">
        <motion.span className="font-heading text-6xl md:text-7xl font-bold text-green-brand tracking-tighter">
          {rounded}
        </motion.span>
        <span className="font-heading text-5xl md:text-6xl font-bold text-green-brand">
          {suffix}
        </span>
      </div>
      <p className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mt-2 text-center group-hover:text-white transition-colors">
        {label}
      </p>
      
      {showDivider && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-gray-800" />
      )}
    </div>
  )
}

const stats = [
  { number: 5, suffix: '+', label: 'Years Experience' },
  { number: 500, suffix: '+', label: 'Projects Completed' },
  { number: 100, suffix: '%', label: 'Certified Manpower' },
  { number: 24, suffix: '/7', label: 'Support Available' },
]

export default function StatsBar() {
  return (
    <section className="bg-dark-2 w-full overflow-hidden border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, idx) => (
            <Counter 
              key={idx} 
              {...stat} 
              showDivider={idx !== stats.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

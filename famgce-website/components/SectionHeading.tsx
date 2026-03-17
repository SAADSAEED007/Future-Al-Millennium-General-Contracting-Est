import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  highlight: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex flex-col gap-3 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      <div className="w-12 h-1 bg-green-brand" />
      <h2
        className={`font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none ${
          dark ? 'text-white' : 'text-dark'
        }`}
      >
        {title} <span className="text-green-brand">{highlight}</span>
      </h2>
      {subtitle && (
        <p className={`font-body text-lg max-w-2xl ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

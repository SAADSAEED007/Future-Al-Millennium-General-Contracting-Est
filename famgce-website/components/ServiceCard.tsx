'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface ServiceCardProps {
  icon: IconType
  title: string
  desc: string
  href: string
  index: number
}

export default function ServiceCard({ icon: Icon, title, desc, href, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: 4 }}
      className="bg-white p-8 group border-l-[1px] border-transparent hover:border-green-brand hover:border-l-4 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col items-start gap-4 h-full"
    >
      <div className="text-green-brand text-5xl transition-transform duration-300 group-hover:scale-110">
        <Icon />
      </div>
      
      <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-dark mt-2">
        {title}
      </h3>
      
      <p className="font-body text-gray-500 text-sm leading-relaxed flex-grow">
        {desc}
      </p>
      
      <a
        href="/images/INTRODUCTION PROFILE - FAMGCE.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-heading text-green-brand font-bold uppercase tracking-widest text-sm flex items-center gap-2 mt-4 hover:gap-4 transition-all"
      >
        Learn More <span className="text-lg">→</span>
      </a>
    </motion.div>
  )
}

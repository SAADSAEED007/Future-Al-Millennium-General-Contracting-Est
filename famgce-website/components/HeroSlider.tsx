'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    image: '/images/slide_01.jpg',
    eyebrow: 'WE ARE HERE TO HELP YOU',
    title: 'COMPREHENSIVE INDUSTRIAL SUPPORT & SERVICES',
    subtitle: 'We specialize in diesel and sweet water supply, bolt torquing, equipment rental, and more industrial solutions.',
    cta: 'OUR SERVICES',
    href: '/services',
    isH1: true,
  },
  {
    id: 2,
    image: '/images/slide_02.jpg',
    eyebrow: 'CERTIFIED & TRUSTED',
    title: 'PROFESSIONAL MANPOWER FOR INDUSTRIAL PROJECTS',
    subtitle: 'Aramco-approved certified personnel ready for immediate mobilization',
    cta: 'LEARN MORE',
    href: '/about',
    isH1: false,
  },
  {
    id: 3,
    image: '/images/slide_03.jpg',
    eyebrow: 'EQUIPMENT & SUPPLY',
    title: 'HEAVY EQUIPMENT & VEHICLE RENTAL ACROSS SAUDI ARABIA',
    subtitle: 'Full fleet of industrial equipment and vehicles for every project scale',
    cta: 'CONTACT US',
    href: '/contact',
    isH1: false,
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-full w-full"
        >
          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className={`absolute inset-0 flex flex-col justify-end ${slides[current].id === 1 ? 'pb-4 md:pb-6' : 'pb-8 md:pb-12'}`}>
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-4xl"
              >
                <p className="font-heading text-green-brand text-lg md:text-xl font-bold tracking-[0.2em] mb-4 uppercase">
                  {slides[current].eyebrow}
                </p>
                {slides[current].isH1 ? (
                  <h1 className="font-heading text-white text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[1.1] mb-6">
                    {slides[current].title}
                  </h1>
                ) : (
                  <h2 className="font-heading text-white text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[1.1] mb-6">
                    {slides[current].title}
                  </h2>
                )}
                <p className="font-body text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                  {slides[current].subtitle}
                </p>
                <a
                  href="/images/INTRODUCTION PROFILE - FAMGCE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green inline-block text-center"
                >
                  {slides[current].cta}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 ${
              idx === current
                ? 'w-10 h-2 bg-green-brand rounded-full'
                : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

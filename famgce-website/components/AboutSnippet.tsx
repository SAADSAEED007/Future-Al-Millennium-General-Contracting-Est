'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutSnippet() {
  return (
    <section className="bg-white section-pad overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full border-l-8 border-green-brand overflow-hidden shadow-2xl">
              <Image
                src="/images/about-image.jpg"
                alt="FAMGCE Industrial Construction Crew"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-brand/10 -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="font-heading text-green-brand text-sm font-bold tracking-[0.3em] uppercase mb-2">
                Who We Are
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase leading-tight text-dark">
                Get to know about <br />
                <span className="text-green-brand">Our Company</span>
              </h2>
            </div>

            <div className="border-l-4 border-green-brand pl-6">
              <p className="font-body text-gray-700 text-lg leading-relaxed italic">
                Future Al Millennium General Contracting Est. (FAMGCE) is a premier industrial support firm in Saudi Arabia, building infrastructure for a sustainable future.
              </p>
            </div>

            <p className="font-body text-gray-500 leading-relaxed">
              We specialize in providing high-performance manpower solutions, heavy equipment rental, and comprehensive material supply. Our team of Aramco-approved professionals is trained to meet the highest safety and technical standards of the international industry, ensuring your project success every step of the way.
            </p>

            <div className="pt-4">
              <a
                href="/images/INTRODUCTION PROFILE - FAMGCE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-block text-center"
              >
                Read More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import SectionHeading from './SectionHeading'

const features = [
  {
    title: "20+ Years of Proven Experience",
    desc: "Decades of industrial expertise delivering projects across Saudi Arabia"
  },
  {
    title: "Fully Certified Manpower",
    desc: "Aramco-approved professionals ready for immediate deployment"
  },
  {
    title: "End-to-End Project Support",
    desc: "From material supply to full execution — we handle everything"
  },
  {
    title: "Trusted by Industry Leaders",
    desc: "Partnered with Saudi Arabia's leading industrial corporations"
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-light-2 section-pad overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start lg:items-center">
          
          {/* Left Column: Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <SectionHeading
              title="WHY CHOOSE"
              highlight="FAMGCE?"
              align="left"
            />
            
            <div className="flex flex-col gap-8">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="mt-1">
                    <RiCheckboxCircleFill className="text-3xl text-green-brand" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold uppercase text-dark">
                      {f.title}
                    </h4>
                    <p className="font-body text-gray-500 text-sm mt-1">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-dark-2 p-10 md:p-14 border-t-4 border-green-brand shadow-2xl">
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="font-heading text-7xl md:text-8xl font-bold text-green-brand leading-none">
                    500+
                  </h3>
                  <p className="font-heading text-xl uppercase tracking-widest text-gray-300 mt-4">
                    Projects Successfully Completed
                  </p>
                </div>
                
                <div className="w-full h-[1px] bg-gray-800" />
                
                <div>
                  <h3 className="font-heading text-5xl md:text-6xl font-bold text-white leading-none">
                    20+
                  </h3>
                  <p className="font-heading text-lg uppercase tracking-widest text-gray-400 mt-3">
                    Years Serving Saudi Industry
                  </p>
                </div>

                <div className="mt-4">
                  <p className="font-body text-gray-400 italic text-sm leading-relaxed border-l-2 border-green-brand/40 pl-4">
                    "Our commitment to excellence and safety is the cornerstone of every project we undertake in the Kingdom."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background decorative square */}
            <div className="absolute -top-6 -right-6 w-1/2 h-1/2 bg-green-brand/10 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

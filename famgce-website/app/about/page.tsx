import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RiShieldCheckLine, RiTrophyLine, RiFocus2Line } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'About Us | FAMGCE – 20+ Years Industrial Contracting Saudi Arabia',
  description: 'Learn about FAMGCE — Future Al Millennium General Contracting Est. Over 20 years of industrial experience in Saudi Arabia, providing specialized manpower and equipment solutions.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-dark py-24 md:py-32 border-l-[12px] border-green-brand">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="font-heading text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            About <span className="text-green-brand">Us</span>
          </h1>
          <div className="flex items-center gap-3 mt-8 font-heading text-lg font-bold tracking-widest uppercase">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <span className="text-green-brand">About Us</span>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white section-pad">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[600px] w-full shadow-2xl">
              <Image
                src="/images/more-info.jpg"
                alt="FAMGCE Industrial Operations"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-dark">
                Building Excellence <br />
                <span className="text-green-brand">Since 2000</span>
              </h2>
              <div className="border-l-4 border-green-brand pl-8 py-2">
                <p className="font-body text-gray-700 text-xl font-medium leading-relaxed italic">
                  "FAMGCE provides comprehensive industrial support and general contracting services in Saudi Arabia, specializing in certified manpower, heavy equipment, and material supply."
                </p>
              </div>
              <p className="font-body text-gray-500 leading-seventh">
                Future Al Millennium General Contracting Est. (FAMGCE) has established itself as a cornerstone of industrial support in the Kingdom. With over two decades of dedicated service, we have participated in major infrastructure developments across the GCC/MENA region.
              </p>
              <p className="font-body text-gray-500 leading-seventh">
                Our specialty lies in providing Aramco-approved certified professionals—including riggers, engineers, and technicians—who are ready for immediate mobilization. We also maintain a modern fleet of high-performance heavy equipment and vehicles to ensure project efficiency and safety.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-heading text-4xl font-bold text-dark">20+</h4>
                  <p className="font-heading text-xs uppercase tracking-widest text-green-brand font-bold">Years Experience</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-heading text-4xl font-bold text-dark">500+</h4>
                  <p className="font-heading text-xs uppercase tracking-widest text-green-brand font-bold">Projects Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-light section-pad">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-dark">
              Our Core <span className="text-green-brand">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: RiShieldCheckLine, title: 'Integrity', desc: 'We maintain the highest standards of ethics and transparency in every project and partnership.' },
              { icon: RiTrophyLine, title: 'Excellence', desc: 'Delivering superior quality through meticulous planning, skilled labor, and modern equipment.' },
              { icon: RiFocus2Line, title: 'Safety', desc: 'Prioritizing the health and well-being of our workforce with strict adherence to safety protocols.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-dark-3 p-10 group border-t-4 border-transparent hover:border-green-brand transition-all duration-300 shadow-lg">
                <value.icon className="text-5xl text-green-brand mb-6 transition-transform group-hover:scale-110" />
                <h3 className="font-heading text-2xl font-bold uppercase text-white mb-4 italic group-hover:not-italic transition-all">
                  {value.title}
                </h3>
                <p className="font-body text-gray-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white section-pad">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="font-heading text-green-brand text-sm font-bold tracking-widest uppercase mb-2">Success Stories</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-dark">
              What They Say <br /> <span className="text-green-brand">About Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                quote: 'Working with Future Al Millennium General Contracting Est has been a highly positive experience. Their team consistently demonstrates professionalism, technical expertise, and a deep understanding of our requirements. We particularly value their ability to deliver quality solutions on time while maintaining clear and proactive communication throughout each project.', 
                author: 'Technology and Manufacturing company', 
                company: 'Siemens Energy' 
              },
              { 
                quote: 'Our partnership with FAMGCE has been extremely valuable. Their team brings strong technical knowledge, reliability, and a customer-first approach to every project. We were impressed with their efficiency, attention to detail, and ability to adapt to our operational needs. Their support has contributed to smoother project execution and improved results.', 
                author: 'The leading industrial services provider since 1983', 
                company: 'Anabeeb' 
              },
            ].map((t, idx) => (
              <div key={idx} className="p-10 border border-gray-100 shadow-sm relative italic bg-gray-50/50">
                <div className="absolute top-8 left-8 text-5xl text-green-brand opacity-10">"</div>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                  {t.quote}
                </p>
                <div className="not-italic">
                  <h5 className="font-heading text-lg font-bold text-dark">{t.author}</h5>
                  <p className="font-heading text-xs uppercase tracking-widest text-green-brand">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-dark py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white uppercase mb-10 tracking-tight">
            Ready to Build Your <span className="text-green-brand">Future?</span>
          </h2>
          <Link href="/contact" className="btn-green inline-block text-xl">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

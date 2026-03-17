'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine } from 'react-icons/ri'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Manpower',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [currentDay, setCurrentDay] = useState('')

  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    setCurrentDay(days[new Date().getDay()])
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', company: '', phone: '', email: '', service: 'Manpower', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const contactInfo = [
    { 
      icon: RiMapPinLine, 
      label: 'Our Location', 
      value: 'Future Al Millennium General Contracting Est.\nJubail, Kingdom of Saudi Arabia' 
    },
    { 
      icon: RiPhoneLine, 
      label: 'Phone Number', 
      value: '+966 560 385 462' 
    },
    { 
      icon: RiMailLine, 
      label: 'Email Address', 
      value: 'info@famgce.com' 
    },
    { 
      icon: RiTimeLine, 
      label: 'Working Hours', 
      value: 'Saturday – Thursday: 08:00 – 17:00\nFriday: Closed' 
    }
  ]

  const schedule = [
    { day: 'Saturday', hours: '08:00 – 17:00' },
    { day: 'Sunday', hours: '08:00 – 17:00' },
    { day: 'Monday', hours: '08:00 – 17:00' },
    { day: 'Tuesday', hours: '08:00 – 17:00' },
    { day: 'Wednesday', hours: '08:00 – 17:00' },
    { day: 'Thursday', hours: '08:00 – 17:00' },
    { day: 'Friday', hours: 'Closed', closed: true },
  ]

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-dark py-24 md:py-32 border-l-[12px] border-green-brand">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Contact <span className="text-green-brand">Us</span>
          </motion.h1>
          <div className="flex items-center gap-3 mt-8 font-heading text-lg font-bold tracking-widest uppercase">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <span className="text-green-brand">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-white section-pad">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Contact Info */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="font-heading text-green-brand font-bold tracking-[0.3em] uppercase text-sm">Get in Touch</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-dark">We are ready to <span className="text-green-brand">help you</span></h2>
                <p className="font-body text-gray-500 max-w-lg">Have a question or looking for a quote? Our team is available 24/7 to provide industrial support and contracting solutions.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="bg-dark-3 p-8 border-l-4 border-green-brand flex flex-col gap-4 group hover:bg-dark transition-colors duration-300">
                    <info.icon className="text-4xl text-green-brand group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-heading text-lg font-bold uppercase text-gray-400 tracking-wider mb-2">{info.label}</h4>
                      <p className="font-body text-white text-sm leading-relaxed whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-light-2 p-10 md:p-14 border-t-8 border-green-brand shadow-xl"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-heading text-xs font-bold uppercase tracking-widest text-dark/60">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="bg-white border border-gray-200 px-4 py-3 font-body text-sm focus:border-green-brand outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-heading text-xs font-bold uppercase tracking-widest text-dark/60">Company Name</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required className="bg-white border border-gray-200 px-4 py-3 font-body text-sm focus:border-green-brand outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-heading text-xs font-bold uppercase tracking-widest text-dark/60">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="bg-white border border-gray-200 px-4 py-3 font-body text-sm focus:border-green-brand outline-none transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-heading text-xs font-bold uppercase tracking-widest text-dark/60">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="bg-white border border-gray-200 px-4 py-3 font-body text-sm focus:border-green-brand outline-none transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-heading text-xs font-bold uppercase tracking-widest text-dark/60">Select Service</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="bg-white border border-gray-200 px-4 py-3 font-body text-sm focus:border-green-brand outline-none transition-colors appearance-none">
                    <option>Manpower Services</option>
                    <option>Equipment Services</option>
                    <option>Vehicle Services</option>
                    <option>Material & Supply</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-heading text-xs font-bold uppercase tracking-widest text-dark/60">Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="bg-white border border-gray-200 px-4 py-3 font-body text-sm focus:border-green-brand outline-none transition-colors resize-none"></textarea>
                </div>

                <button type="submit" disabled={status === 'loading'} className="btn-green w-full py-5 text-lg font-bold tracking-[0.2em]">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-green-brand font-bold text-center">Message sent successfully! We will contact you shortly.</p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-dark py-32 text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 grayscale">
          {/* Subtle grid pattern or simple noise could go here */}
          <div className="w-full h-full border-[1px] border-white/20 grid grid-cols-12 grid-rows-6">
            {Array.from({ length: 72 }).map((_, i) => <div key={i} className="border-[0.5px] border-white/5" />)}
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-green-brand/10 rounded-full flex items-center justify-center mb-4">
             <RiMapPinLine className="text-5xl text-green-brand" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
            Find us in <span className="text-green-brand">Saudi Arabia</span>
          </h2>
          <p className="font-body text-gray-500 max-w-md mx-auto">Our headquarters are located in Jubail, strategically positioned to support industrial hubs across the Kingdom.</p>
        </div>
      </section>

      {/* Operating Hours Table */}
      <section className="bg-light section-pad">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-dark">Operating <span className="text-green-brand">Hours</span></h2>
          </div>
          <div className="bg-white shadow-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark text-white font-heading uppercase tracking-widest text-sm">
                  <th className="px-8 py-6">Day</th>
                  <th className="px-8 py-6">Hours</th>
                </tr>
              </thead>
              <tbody className="font-body text-lg">
                {schedule.map((item, idx) => (
                   <tr key={idx} className={`border-b border-gray-100 transition-colors ${currentDay === item.day ? 'bg-green-brand/10 border-l-[6px] border-green-brand' : ''}`}>
                      <td className={`px-8 py-5 font-bold ${currentDay === item.day ? 'text-green-brand' : 'text-dark'}`}>{item.day}</td>
                      <td className={`px-8 py-5 ${item.closed ? 'text-red-500 font-bold' : 'text-gray-600'}`}>{item.hours}</td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  )
}
